var pageOrderList;
var randomNum = 1;
var firstId;
var secondId;
var toPage = "";
var order;
var orderDetail;
var getexpress;
var remarks;
var packing;

var express = "";

var page = {
	"currPage" : 1,
	"pageSize" : 5
}

function query(orderID){
	var url = "/easyBuy_SSM/order/toOrderInfo/"+orderID;
	location.href = url;
}

function ajax(page) {
	jq.post("/easyBuy_SSM/order/select/" + page.currPage + "/"+ page.pageSize,function(data) {
						var html = "";
						pageOrderList = data.list;
						jq(data.list).each(function() {
											jq("#currPage").text(data.currPage);
											jq("#totalPage").text(
													data.totalPage);
											var btn = "";
											var detail = "";
											var deliver = "";
											switch (this.status) {
											case 0:
												detail = "订单已取消";
												break;
											case 1:
												detail = "已下单";
												break;
											case 2:
												detail = "<span id='i"
														+ this.id
														+ "'>已付款</span>";
												break;
											case 3:
												detail = "已发货";
												break;
											case 4:
												detail = "已收货"
												break;
											default:
												break;
											}
											if (this.status == 2) {
												btn = "<a id='"
														+ this.id
														+ "' href='javascript:void(0)' onclick='update("
														+ this.id
														+ ")'>取消订单</a>";
												deliver = "<a href='javascript:void(0)' onclick='ondeliver("
														+ this.id + ")'>发货</a>";
											} else {
												btn = "--------";
												deliver = "--------";
											}
											html += "<tr ondblclick='query("+ this.id+ ")'>"
													
													+ "<td><a><font color='#ff4e00' onclick='addtoSelect("
													+ this.id
													+ ")'> "
													+ this.serialNumber
													+ "</font><a></td>"
													+ "<td>"
													+ this.createTime
													+ "</td>"
													+ "<td>"
													+ this.loginName
													+ "</td>"
													+ "<td>"
													+ saveDecimal2(this.cost)
													+ "</td>"
													+ "<td>"
													+ detail
													+ "</td>"
													+ "<td>"
													+ btn
													+ "</td>"
												+ "<tr>"
										});
						jq("#td").html(html);
					}, "json");
}

/*function ondeliver(id) {
	jq(pageOrderList).each(function() {
		if (this.id == id) {
			order = this;
			if (order.express == 1) {
				express = "顺丰";
			} else if (order.express == 2) {
				express = "申通";
			} else {
				express = "邮政";
			}
		}
	});
	jq("#homePage").attr("style", "display:none;")
	showondeliver();
}*/

/*function showondeliver() {
	var html="";
	    html = "<div class='m_right' id='back'>"
			+ "<div class='mem_tit'>发货</div>"
			+ "<table border='0' class='order_tab' style='width:930px; text-align:center; margin-bottom:30px;' cellspacing='0' cellpadding='0'>"
			+ "<tr>" + "<td colspan='2'><h2>确认邮递信息<h2></td>" + "</tr>" + "<tr>"
			+ "<td width='50%'>客户选择的邮递方式：</td>" + "<td width='50%'><h3>"
			+ express
			+ "<h3></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td width='50%'>顾客的备注信息：</td>"
			+ "<td width='50%'><h3>"
			+ order.remarks
			+ "<h3></td>"
			+ "</tr>"
			+ "<tr>"
				+ "<td width='50%'>选择邮递方式：</td>"
				+ "<td width='50%'>"
					+ "<h3><input type='radio' name='express' checked/>顺丰&nbsp;&nbsp;"
				+ "<input type='radio' name='express'/>申通&nbsp;&nbsp;"
				+ "<input type='radio' name='express'/>邮政&nbsp;&nbsp;"
				+"</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td width='50%'>填入快递单号：</td>"
			+ "<td width='50%'><input type='text' id='getcourierNumber' name='courierNumber'></input></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td colspan='2'><input type='button' value='返回' onclick='back()'></input>&nbsp;&nbsp;&nbsp;&nbsp;"
			+ "<input type='button' value='确认发货' onclick='deliver("+order.id+")'></input>"
			+ "</td>" + "</tr>" + "</table>" + "</div>";
	jq("#expressPage").html(html);
}*/

function deliver(id) {
	var str= jq("#getcourierNumber").val();
	var reg=/^[A-Za-z0-9]{12,15}$/;
	if (!reg.test(str)) {
		jq("#msg").html("快递单号有误，只能字母和数字组成，长度12-15位！");
		jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
		jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
		ShowDiv('showMsgDiv','fade');
		return ;
	} 
	jq.post("/easyBuy_SSM/order/deliver/"+id+"/"+jq("#getcourierNumber").val(), function(data){
		ajax(page);
		jq("#expressPage").attr("style", "display:none;")
		jq("#homePage").attr("style", "display:block;")
	})
}

function islogin() {
	var loginName = jq("#loginName").val();
	var userType = jq("#userType").val();
	if(loginName==null||loginName==""){
		location.href="/easyBuy_SSM/page/login";
	}else{
		if(userType==2||userType==1){
			return true;
		}else{
			jq("#msg").html("暂无此页面操作权限！请联系管理员！");
			jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
			jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
			ShowDiv('showMsgDiv','fade');
			location.href="/easyBuy_SSM/page/index";
		}
	}
}

function update(id) {
	var r=confirm("确定取消订单？");
	if (r==true) {
		jq.post("/easyBuy_SSM/order/update/" + id, function(data) {
			console.log(data);
			ajax(page);
		})
	} else {
		return false;
	}
}

function addtoSelect(id) {
	var html = "<select class='jj' name='order2'>";
	jq(pageOrderList).each(
			function() {
				if (this.id == id) {
					html += "<option value='" + this.id + "'>订单号:"
							+ this.serialNumber + "</option>";
					html += "<option value='" + this.id + "'>订单号:"
							+ this.loginName + "</option>";
					html += "<option value='" + this.id + "'>下单时间:"
							+ this.createTime + "</option>";
					html += "<option value='" + this.id + "'>订单总金额:"
							+ this.cost + "</option>";
					
				}
			});
	html += "</select>";
	if (randomNum <= 1) {
		randomNum++;
		jq(".zwf1").html(html);
		firstId = id;
	} else {
		randomNum = 1;
		jq(".zwf2").html(html);
		secondId = id;
	}
	jq(".jj").jselect();
}

jq(function() {// 页面加载完以后

	islogin();

jq("#combine").click(
			function() {
				jq.post("/easyBuy_SSM/order/combine/" + firstId + "/"
						+ secondId, function(data) {
					if (data.msg == "ok") {
						jq("#msg").html("订单已合并！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
						window.location.reload();
					} else if (data.msg == "same") {
						jq("#msg").html("订单相同，请核实要合并的订单！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
					} else if (data.msg == "out") {
						jq("#msg").html("只能合并未发货的订单！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
					} else {
						jq("#msg").html("用户或订单不同，订单无法合并！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
					}
				},"JSON");
			});

	ajax(page);

	jq("#js").click(function() {
		ajax(page);
	});

	jq("#firstPage").click(function() {
		page.currPage = 1;
		ajax(page);
	});

	jq("#before").click(function() {
		page.currPage = page.currPage - 1;
		if (page.currPage == 0) {
			page.currPage = 1;
		}
		ajax(page);
	});

	jq("#next").click(function() {
		page.currPage = page.currPage + 1;
		if (page.currPage > jq("#totalPage").text()) {
			page.currPage = jq("#totalPage").text();
		}
		ajax(page);
	});

	jq("#lastPage").click(function() {
		page.currPage = jq("#totalPage").text();
		ajax(page);
	});
})

var jq = jQuery.noConflict();
jq.fn
		.extend({
			jselect : function() {
				return jq(this)
						.each(
								function() {
									var width = this.style.width;// ��Ϊffȡ����auto
									jq(this)
											.after(
													"<input type=\"hidden\" /><div class='jslct'><div class='jslct_t'><em></em></div><dl></dl></div>");
									var ipt = jq(this).next("input");
									var lst = ipt.next("div");
									var itms = jq("dl", lst);
									var itm;
									var opt = jq("option", jq(this));
									var opts = jq("option:selected", jq(this));
									var opts_index = opt.index(opts);
									var em = jq("em", lst);
									var fn_change = jq(this).attr("onchange");
									if (width != "") {
										lst.css("width", jq(this).css("width"));
										em.css("width", "100%");
									}
									;
									ipt.attr("name", jq(this).attr("name"));
									em.text(jq("option:selected", jq(this))
											.text());
									opt.each(function(i) {
										itms.append("<dd></dd>");
										itm = jq("dd", itms);
										var dd = itm.eq(i);
										dd.attr("val", jq(this).val()).text(
												jq(this).text());
									});
									itm.eq(0).addClass("noborder")
									itm.eq(opts_index).addClass("jslcted");
									jq(this).remove();
									lst.hover(function() {
										jq(this).addClass("jslct_hover");
										return false
									}, function() {
										jq(this).removeClass("jslct_hover");
										return false
									});
									itm.hover(function() {
										jq(this).addClass("hover")
									}, function() {
										jq(this).removeClass("hover")
									});
									itm.width(itms.width() + 17);
									itms.css({
										width : itms.width(),
										"overflow-x" : "hidden",
										"overflow-y" : "auto"
									});
									lst.click(function() {
										lstshow();
									});
									jq(document).mouseup(function() {
										lsthide();
									});
									itm.click(function() {
										if (fn_change != null) {
											(eval(fn_change))();
										}
										itm.removeClass("jslcted");
										jq(this).addClass("jslcted");
										em.text(jq(this).text());
										ipt.val(jq(this).attr("val"));
										lsthide();
										return false;
									})
									function lstshow() {
										var maxheight = jq(document).height() - 200;
										itms.css({
											height : "auto"
										});
										maxheight = itms.height() > maxheight ? maxheight
												: "auto";
										itms.css({
											height : maxheight
										});
										itms.show();
										lst.css("z-index", "1000")
									}
									;
									function lsthide() {
										jq(".jslct dl").hide();
										jq(".jslct").css("z-index", "0")
									}
									;
								});
			}
		});
