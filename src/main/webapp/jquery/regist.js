$(function(){
	$(".res_btn").click(function(){
		$.post("/easyBuy_SSM/user/regist",$("#loginForm").serialize(),function(data){
			if (data.error=="ok") {
				if (data.b=="no") {
					alert("注册失败");
					location.href="/easyBuy_SSM/page/regis";
				}else{
					alert("注册成功");
					location.href="/easyBuy_SSM/page/login";
				}
			}else{
				console.log(data.errorlist);
				alert("注册失败！"+data.errorlist);
				location.href="/easyBuy_SSM/page/regis";
			}
			
			
			
			
		},"json");
	});
	
	$("[name=loginName]").blur(function(){
			alert($("[name=loginName]").val());
		$.post("/easyBuy_SSM/user/regist1","loginName="+$("[name=loginName]").val(),function(data){
			if (data.a=="no") {
				alert("用户名重复");
			}
		},"json");
		
	})
})