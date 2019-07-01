var pageOrderList;
var page = {
	"currPage" : 1,
	"pageSize" : 5
}

function update(id) {
	jq.post("/easyBuy_SSM/order/update/" + id, function(data) {
		if (data.msg == "ok") {
			alert("已取消订单！")
			// window.location.reload()
			//jq("#" + id).html("---------");
			//jq("#i" + id).html("订单已取消");
			ajax(page);
			//selectOrder();
		} else {
			alert("操作失败！")
		}
	})
}

function ajax(page) {
	jq.post("/easyBuy_SSM/order/select/"+ page.currPage + "/" + page.pageSize,
					function(data) {
						var html = "";
						pageOrderList = data.order;
						jq(data.list).each(function() {
											jq("#currPage").text(data.currPage);
											jq("#totalPage").text(data.totalPage);
											var btn = "";
											var detail = "";
											switch (this.status) {
											case 0:
												detail = "订单已取消";
												break;
											case 1:
												detail = "已下单，未付款";
												break;
											case 2:
												detail = "<span id='i"
														+ this.id
														+ "'>已付款，未发货</span>";
												break;
											case 3:
												detail = "已发货，未收货";
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
											} else {
												btn = "--------";
											}
											html += "<tr>"
													+ "<td><font color='#ff4e00'>"
													+ this.serialNumber
													+ "</font></td>"
													+ "<td>"
													+ this.createTime
													+ "</td>" + "<td>"
													+ this.cost + "</td>"
													+ "<td>" + detail
													+ "</td>" + "<td>"
													+ btn + "</td>"
													+ "<tr>"
										});
						jq("#td").html(html);
						selectOrder1();
						selectOrder2();
					}, "json");
}

function selectOrder1() {
//	var htmll="<dl style='width: 180px; overflow: hidden auto; height: auto; display: none;'>"+
//			  "<dd val='0' class='noborder' jslcted' style='width: 197px;'>请选择...</dd>";
//	jq(pageOrderList).each(function(index,item) {
//		//htmll+="<option value='"+item.id+"'>"+item.serialNumber+"</option>";
//		htmll+="<dd val='"+item.id+"' style='width': 197px; class=''>"+item.serialNumber+"</dd>";
//	});
	var html="<select class='jj' id='qqqq' >";
	html+="<option value='0' selected='selected'>请选择...</option>";
	//jq(pageOrderList).each(function(index,item) {
	//	html+="<option value='"+item.id+"'>"+item.serialNumber+"</option>";
			jq(pageOrderList).each(function() {
			html+="<option value='"+this.id+"'>"+this.serialNumber+"</option>"
			;
	});
	html+="</select>";
	jq(".zwf1").html(html);
	jq(".jj").jselect();
}

function selectOrder2() {
	var html="<select class='jj' name='order2'>";
	html+="<option value='0' selected='selected'>请选择...</option>";
	jq(pageOrderList).each(function() {
		html+="<option value='"+this.id+"'>"+this.serialNumber+"</option>";
	});
	html+="</select>";
	jq(".zwf2").html(html);
	jq(".jj").jselect();
}



jq(function() {//页面加载完以后
	
	jq("#combine").click(function () {
		jq.post("/easyBuy_SSM/order/combine/1/2",function(data){
			if (data.msg=="ok") {
				alert("订单已合并！")
			} else {
				alert("用户不同，订单无法合并！")
			}
		})
	});
	
	jq("#qqqq").change(function(){
		console.log(jq("select option:selected").text())
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
			alert("已经是第一页了！")
			page.currPage = 1;
		}
		ajax(page);
	});

	jq("#next").click(function() {
		page.currPage = page.currPage + 1;
		if (page.currPage > jq("#totalPage").text()) {
			alert("已经是最后一页了！")
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
jq.fn.extend({
	jselect:function(){
		return jq(this).each(function(){
			var width = this.style.width;//��Ϊffȡ����auto
			jq(this).after("<input type=\"hidden\" /><div class='jslct'><div class='jslct_t'><em></em></div><dl></dl></div>");
			var ipt = jq(this).next("input");
			var lst = ipt.next("div");
			var itms = jq("dl",lst);
			var itm;
			var opt = jq("option",jq(this));
			var opts = jq("option:selected",jq(this));
			var opts_index = opt.index(opts);
			var em = jq("em",lst);
			var fn_change=jq(this).attr("onchange");
			if(width!=""){lst.css("width",jq(this).css("width"));em.css("width","100%");};
			ipt.attr("name",jq(this).attr("name"));
			em.text(jq("option:selected",jq(this)).text());
			opt.each(function(i){
				itms.append("<dd></dd>");
				itm = jq("dd",itms);
				var dd = itm.eq(i);
				dd.attr("val",jq(this).val()).text(jq(this).text());
			});
			itm.eq(0).addClass("noborder")
			itm.eq(opts_index).addClass("jslcted");
			jq(this).remove();
			lst.hover(function(){jq(this).addClass("jslct_hover");return false},function(){jq(this).removeClass("jslct_hover");return false});
			itm.hover(function(){jq(this).addClass("hover")},function(){jq(this).removeClass("hover")});
			itm.width(itms.width()+17);
			itms.css({width:itms.width(),"overflow-x":"hidden","overflow-y":"auto"});
			lst.click(function(){lstshow();});
			jq(document).mouseup(function(){lsthide();});
			itm.click(function(){
							   if(fn_change!=null){(eval(fn_change))();}
							   itm.removeClass("jslcted");
							   jq(this).addClass("jslcted");
							   em.text(jq(this).text());
							   ipt.val(jq(this).attr("val"));
							   lsthide();
							   return false;
							   })
			function lstshow(){
					var maxheight =jq(document).height()-200;
					itms.css({height:"auto"});
					maxheight = itms.height()>maxheight?maxheight:"auto";
					itms.css({height:maxheight});
					itms.show();
					lst.css("z-index","1000")
			};
			function lsthide(){
					jq(".jslct dl").hide();
					jq(".jslct").css("z-index","0")
			};
		});	
	}						
});
 
