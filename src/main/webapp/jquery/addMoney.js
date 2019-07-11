//当鼠标悬浮在全部商品分类时触发
jq(".nav_t").mouseover(function(){
	selectType();
});
jq(".pay li").click(function() {
	jq('.pay li').removeClass('checked');
	jq(this).attr('class', 'checked');
	jq("#addMoney").val(jq(this).val());
});

jq("#inputMoney").blur(function(){
	var zz = /^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
	var money = jq("#inputMoney").val();
	if(zz.test(money)){
		jq("#addMoney").val(money);
		//jq("#inputMoney").val(saveDecimal2(money));
		jq("#inputMoney").val(money);
	}else{
		jq("#msg").html("充值金额只能是数字哟~~~");
		jq("#zuo").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
		jq("#you").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
		ShowDiv('showMsgDiv','fade');
	}
});

jq("#addMoneyDiv").attr("style","display:none;");//隐藏
jq("#showzhifu").attr("style","display:none;top:10%;");//隐藏

function zhifubao(){
	ShowDiv('showzhifu','fade');
}

function addMoney(){
	CloseDiv('showzhifu','fade');
	var money = jq("#addMoney").val();
	jq("#addMoneyDiv").attr("style","display:none;");//隐藏
	jq("#toAddMoney").attr("style","display:block;");
	jq.post("/easyBuy_SSM/user/addMoney/"+money,function(data){
		console.log(data);
		if(data.result=="ok"){
			var oldMoney = jq("#oldMoney").val();
			var newMoney = parseFloat(oldMoney)+parseFloat(money);
			jq("#oldMoney").val(newMoney);
			jq("#userMoney").html("￥"+saveDecimal2(newMoney)+"元");
			jq("#msg").html("成功充值"+saveDecimal2(money)+"元！");
			jq("#zuo").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("转转");
			jq("#you").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("留下");
			ShowDiv('showMsgDiv','fade');
		}else{
			jq("#msg").html("充值失败，银行卡余额不足！");
			jq("#zuo").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
			jq("#you").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
			ShowDiv('showMsgDiv','fade');
		}
	},"json");
}

function showAddMoney(){
	jq("#addMoneyDiv").attr("style","display:block;");
	jq("#toAddMoney").attr("style","display:none;");
}