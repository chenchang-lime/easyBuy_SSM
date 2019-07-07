jq(function(){
	jq("#logout").click(function(){
		jq.post("/easyBuy_SSM/user/logout",function(data){
			if(data.result=="ok"){
				location.href="/easyBuy_SSM/page/index";
//				location.href="/easyBuy_SSM/page/login";
			}else{
				alert("服务器繁忙，注销失败，请稍后重试！");
			}
		},"json");
	});
})