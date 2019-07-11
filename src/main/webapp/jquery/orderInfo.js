var orderID;

jq(function(){
	selectOrderInfoByOrderID();
	if(jq("#express").val()==1){
		jq("#kd1").attr('class','checked');
	}else if(jq("#express").val()==2){
		jq("#kd2").attr('class','checked');
	}else if(jq("#express").val()==3){
		jq("#kd3").attr('class','checked');
	}
});

jq(this).attr('checked','checked');
jq(".pay li").click(function(){
	jq('.pay li').removeClass('checked');
	jq(this).attr('class','checked');
	jq("#express").val(jq(this).val());
});
function selectOrderInfoByOrderID(){
	if(jq("#loginName").val()!=null&&jq("#loginName").val()!=""){
		orderID = jq("#orderID").val();
		jq.post("/easyBuy_SSM/orderCC/selectInfoByOrderID/"+orderID,null,function(data) {
			console.log("result-->"+data.result);
			if (data.result == "ok") {
				console.log(data.detailList);
				console.log(data.proList);
				var html = "";
				var totalProPrice = 0;
				jq.each(data.detailList,function(i,info){
					var thiPro; 
					jq.each(data.proList,function(j,pro){
						if(pro.id==info.productId){
							thiPro = pro;
						}
					});
					var pType = "默认";
					if(thiPro.proType!=null&&thiPro.proType!=""){
						pType = thiPro.proType;
					}
					var xiaoji = thiPro.price*info.quantity;
					totalProPrice+=xiaoji;
					html+="<tr>" +
					"<td>" +
					"<div class='c_s_img'>" +
					"<img src='/easyBuy_SSM/images/"+thiPro.fileName+"' width='73' height='73' />" +
					"</div>" +thiPro.name+
					"</td>" +
					"<td align='center'>"+pType+"</td>" +
					"<td align='center'>"+info.quantity+"</td>" +
					"<td align='center'>￥"+saveDecimal2(thiPro.price)+"</td>" +
					"<td align='center' style='color: #ff4e00;'>￥"+saveDecimal2(xiaoji)+"</td>" +
					"</tr>";
				});
				jq("#prosInOrder").html(html);
				jq("#totalProPrice").html("￥"+saveDecimal2(totalProPrice));
			} else{
				jq("#msg").html("系统错误！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
			}
		}, "json");
	}else{
		location.href = "/easyBuy_SSM/page/login";
	}
}

function deliver() {
	var str= jq("#getcourierNumber").val();
	var reg=/^[A-Za-z0-9]{12,15}$/;
	if (!reg.test(str)) {
		jq("#msg").html("快递单号有误，只能字母和数字组成，长度12-15位");
		jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
		jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
		ShowDiv('showMsgDiv','fade');
		return false;
	} 
	jq.post("/easyBuy_SSM/order/deliver/"+orderID+"/"+jq("#getcourierNumber").val(), function(data){
		jq("#msg").html("订单已发货！");
		jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
		jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
		ShowDiv('showMsgDiv','fade');
	window.location.reload();
	})
}


