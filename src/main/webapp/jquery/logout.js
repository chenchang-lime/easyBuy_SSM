$(function(){
	$("#logout").click(function(){
		$.post("UserServlet?action=logout",function(data){
			if(data=="ok"){
				location.href="Login.jsp";
			}else{
				alert("服务器繁忙，注销失败，请稍后重试！");
			}
		});
	});
})