var codes;


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
        			 alert("发送成功，请稍等")
        		 }
        	 },"json");
         } else {
        	 alert("请输入正确手机号！")
        	 return false;
		}
	})
	
	$("[name=code]").blur(function(){
			if (codes==$("[name=code]").val()) {
				alert("验证成功")
			}else {
				alert("验证失败重新输入,或一分钟后重新发送验证码")
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
				alert("注册成功");
				location.href="/easyBuy_SSM/page/login";
			}else{
				alert("注册失败！"+data.errorlist);
			}
		},"json");
	});
	
	$("[name=loginName]").blur(function(){
		$.post("/easyBuy_SSM/user/regist1","loginName="+$("[name=loginName]").val(),function(data){
			if (data.a=="no") {
				alert("用户名重复");
			}
		},"json");
		
	})
})
