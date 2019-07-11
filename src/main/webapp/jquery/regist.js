var code1;
var testPhoness
$(function(){
	var InterValObj; //timer变量，控制时间
	var count = 60; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
	$("#btnmobile1").click(function(){
	     $.post("/easyBuy_SSM/user/SmsSample",$("#loginForm").serialize(),function(data){
	    	 testPhoness=data.testPhones
	    	 code1= data.code;
	    	 if(data.codes=="ok"){
				$("[name=mobile]").val(testPhoness);
				curCount = count;
				 $("#btnmobile1").attr("disabled", "true");
			     $("#btnmobile1").val("剩余"+curCount+"s");
			     InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
//				jq("#msg").html(code1);
//				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
//				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
//				ShowDiv('showMsgDiv','fade');
			}else if(data.codes=="no"){
				$("[name=mobile]").html("手机号码错误,请重新输入");
			}
		},"json");
	     
    $("[name=code]").blur(function(){
    	if (code1==$("[name=code]").val()) {
			$("[name=code]").val(code1+"->验证通过√");
		}else {
			$("[name=code]").val("验证失败×,重新输入验证码");
		}
	})
	});
	
	
	function SetRemainTime() {
        if (curCount == 0){                
            window.clearInterval(InterValObj);//停止计时器
            $("#btnmobile1").removeAttr("disabled");//启用按钮
            $("#btnmobile1").val("重新发送验证码");
        }
        else {
            curCount--;
            $("#btnmobile1").val("剩余"+ curCount+"s");
        }
    }
})

function _change() {
    		var imgEle = document.getElementById("vCode");
    		imgEle.src = "/Test01_5/VerifyCodeServlet?" + new Date().getTime();
    	}

function doJudge(){
		if(document.getElementById('ck').checked=true){
			$("[name=btnregit]").removeAttr("disabled");
			}
		}



function _change() {
    		var imgEle = document.getElementById("vCode");
    		imgEle.src = "/Test01_5/VerifyCodeServlet?" + new Date().getTime();
    	}

function doJudge(){
		if(document.getElementById('ck').checked=true){
			$("[name=btnregit]").removeAttr("disabled");
			}
		}


$(function(){
	$("#btnmobile").click(function(){
		var sts=$("[name=mobile]").val();
		 var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
         if (myreg.test(sts)) {
        	 $.post("/easyBuy_SSM/user/SmsSample",$("#loginForm").serialize(),function(data){
        		 codes=data.code;
        		 console.log(codes);
        		 if (data.isOKs="ok") {
        			jq("#msg").html("发送成功，请稍等");
     				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
     				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
     				ShowDiv('showMsgDiv','fade');
        		 }
        	 },"json");
         } else {
        	 jq("#msg").html("请输入正确手机号！");
     				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
     				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
     				ShowDiv('showMsgDiv','fade');
        	 return false;
		}
	})
	
	$("[name=code]").blur(function(){
			if (codes==$("[name=code]").val()) {
				jq("#msg").html("验证成功");
 				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
 				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
 				ShowDiv('showMsgDiv','fade');
			}else {
				jq("#msg").html("验证失败重新输入,或一分钟后重新发送验证码");
 				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
 				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
 				ShowDiv('showMsgDiv','fade');
			}
	})
})

$(function(){
	$("#btn").click(function(){
		if ($("[name=sex]").val()==1) {
			sex=1;
		}else if ($("[name=sex]").val()==2) {
			sex=2;
		}
		$.post("/easyBuy_SSM/user/regist",$("#loginForm").serialize(),function(data){
			if (data.isOK=="ok") {
				jq("#msg").html("注册成功");
 				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
 				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
 				ShowDiv('showMsgDiv','fade');
				location.href="/easyBuy_SSM/page/login";
			}else{
				jq("#msg").html("注册失败！"+data.errorlist);
 				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
 				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
 				ShowDiv('showMsgDiv','fade');
			}
		},"json");
	});
	
	$("[name=loginName]").blur(function(){
		$.post("/easyBuy_SSM/user/regist1","loginName="+$("[name=loginName]").val(),function(data){
			if (data.a=="no") {
				jq("#msg").html("用户名重复");
 				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
 				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
 				ShowDiv('showMsgDiv','fade');
			}
		},"json");
		
	})
})
