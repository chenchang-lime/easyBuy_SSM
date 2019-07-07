function islogin() {
	var loginName = jq("#loginName").val();
	if(loginName==null||loginName==""){
		location.href="/easyBuy_SSM/page/login";
	}
}
islogin();