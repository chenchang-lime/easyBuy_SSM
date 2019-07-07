function islogin() {
	var loginName = jq("#loginName").val();
	var userType = jq("#userType").val();
	if(loginName==null||loginName==""){
		location.href="/easyBuy_SSM/page/login";
	}else{
		if(userType==3||userType==1){
			return true;
		}else{
			alert("暂无此页面操作权限！请联系管理员！");
			location.href="/easyBuy_SSM/page/index";
		}
	}
}
islogin();