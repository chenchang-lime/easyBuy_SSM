$(function(){
	$(".log_btn").click(function(){
		var saveuser;
		if($("#saveuser").prop("checked")==true){
			saveuser = "on";
		}else{
			saveuser = "no";
		}
		$.post("/easyBuy_SSM/user/login/"+saveuser,$("#loginForm").serialize(),function(data){
			console.log(data);
			if(data.result=="no"){
				alert("账号密码错误！请重试！");
			}else if(data.result=="user"){
				location.href="/easyBuy_SSM/page/index";
			}else if(data.result=="admin"){
				location.href="/easyBuy_SSM/page/member";
			}
		},"json");
	});
})