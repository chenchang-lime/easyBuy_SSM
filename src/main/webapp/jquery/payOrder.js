jq(function(){
	jq(document).keyup(function(event) {
		if (event.keyCode == 13) {
			jq("#payOrder").trigger("click");
		}
	});
	
	jq(".pay li").click(function(){
		jq('.pay li').removeClass('checked');
		jq(this).attr('class','checked');
		jq("#paymentMethod").val(jq(this).val());
	});
	
	jq("#payOrder").click(function(){
		var orderID = jq("#orderID").val();
		var payPwd = jq("#payPwd").val();
		var paymentMethod = jq("#paymentMethod").val();
		if(payPwd==null||payPwd==""){
			jq("#msg").html("请输入支付密码！");
			ShowDiv('showMsgDiv','fade');
			return false;
		}
		//alert("orderID-->"+orderID+"，payPwd-->"+payPwd+",paymentMethod-->"+paymentMethod);
		jq.post("/easyBuy_SSM/orderCC/payOrder/"+orderID+"/"+payPwd+"/"+paymentMethod,null,function(data) {
			console.log(data);
			if (data.result == "ok") {
				jq(".b_sure").attr("href","/easyBuy_SSM/page/member_UserOrder").attr("onclick","CloseDiv('showMsgDiv','fade')").html("查看订单");
				jq(".b_buy").attr("href","/easyBuy_SSM/page/index").attr("onclick","CloseDiv('showMsgDiv','fade')").html("继续选购");
				jq("#msg").html("支付成功！");
				ShowDiv('showMsgDiv','fade');
			} else if(data.result == "noLogin"){
				location.href="/easyBuy_SSM/page/login";
			} else if(data.result == "noMoney"){
				jq("#msg").html("余额不足，您可以尝试一下货到付款哟！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","hdfk()").html("确定");
				jq(".b_buy").attr("href","/easyBuy_SSM/page/member_User").attr("onclick","CloseDiv('showMsgDiv','fade')").html("充值");
				ShowDiv('showMsgDiv','fade');
			} else if(data.result == "pwdError"){
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				jq("#msg").html("支付密码错误！");
				ShowDiv('showMsgDiv','fade');
			} else if(data.result == "yizhifu"){
				jq("#msg").html("订单已支付，请不要重复操作！");
				jq(".b_sure").attr("href","/easyBuy_SSM/page/member_UserOrder").attr("onclick","CloseDiv('showMsgDiv','fade')").html("查看订单");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
			} else {
				jq("#msg").html("系统错误！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
			}
		}, "json");
	});
});

function hdfk(){
	CloseDiv('showMsgDiv','fade');
	jq('#hdfk').trigger("click");
}

