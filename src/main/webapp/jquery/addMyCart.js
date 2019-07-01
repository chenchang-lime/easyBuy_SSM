jq("#addMyCart").click(function(){
	addMyCart(product.id);
});
function addMyCart(proID){
	var num = 1;
	num = jq("#buyNum").val();
	jq.post("/easyBuy_SSM/myCart/addMyCart/"+proID+"/"+num,null,function(data){
		console.log(data.result);
		if(data.result=="ok"){
			ShowDiv_1('MyDiv1','fade1');
		}else if(data.result=="sysError"){
			alert("系统繁忙，请稍后再试！！！");
		}else if(data.result=="noLogin"){
			alert("请登陆后再加入购物车！！！");
			location.href="/easyBuy_SSM/page/login";
		}else{
			alert("意料之外的错误！！！");
		}
	});
}