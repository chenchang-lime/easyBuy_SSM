var MyCartList;
var MyCartNum = 0;

selectTopMyCart();

function selectTopMyCart(){
	var loginName = jq("#loginName").val();
	if(loginName!=null&&loginName!=""){
		jq.post("/easyBuy_SSM/myCart/selectMyCart",null,function(data){
			console.log(data.result);
			var total = 0;
			var typeNum = 0;
			var totalPrice = 0;
			if(data.result=="ok"){
				console.log(data.list);
				MyCartList = data.list;
				jq.each(MyCartList,function(i,pro){
					total += pro.num;
					typeNum++;
					totalPrice+=pro.price*pro.num;
				});
			}else{
				jq("#isLoginMycart1").attr("style","display:none;");//隐藏
				jq("#isLoginMycart2").attr("style","display:none;");//隐藏
				jq("#isLoginMycart3").attr("style","display:none;");//隐藏
				jq("#noLoginMyCart").attr("style","display:block;");
			}
			MyCartNum=total;
			jq(".myCartNum").text(total);
			jq(".totalPrice").html("￥"+saveDecimal2(totalPrice));
			jq("#typeNum").html(typeNum);
		},"json");
	}
}

function updateTopMyCartNum(num){
	MyCartNum += parseInt(num);
	jq(".myCartNum").text(MyCartNum);
}

function shouMyCart(){
	if(jq("#isLogin").val()==1){
		jq("#noLoginMyCart").attr("style","display:none;");//隐藏
		jq("#isLoginMycart1").attr("style","display:block;");
		jq("#isLoginMycart2").attr("style","display:block;");
		jq("#isLoginMycart3").attr("style","display:block;");
//		if(MyCartList==null){
//			selectTopMyCart();
//		}
		var html = "";
		var totalPrice = 0;
		jq.each(MyCartList,function(i,pro){
			totalPrice += pro.price * pro.num;
			html += "<li>" +
			"<div class='img'>" +
			"<a href='/easyBuy_SSM/pro/product/"+pro.proID+"'>" +
			"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='58' height='58' />" +
			"</a>" +
			"</div>" +
			"<div class='name'>" +
			"<a href='/easyBuy_SSM/pro/product/"+pro.proID+"'>"+pro.name+"</a>" +
			"</div>" +
			"<div class='price'><font color='#ff4e00'>￥"+saveDecimal2(pro.price)+"</font>  X "+pro.num+"</div>" +
			"</li>";
		});
		jq("#isLoginMycart1").html(html);
		jq(".totalPrice").html(saveDecimal2(totalPrice));
	}else{
		jq("#isLoginMycart1").attr("style","display:none;");//隐藏
		jq("#isLoginMycart2").attr("style","display:none;");//隐藏
		jq("#isLoginMycart3").attr("style","display:none;");//隐藏
		jq("#noLoginMyCart").attr("style","display:block;");
	}
}

jq("#shouMyCart").mouseover(function(){
	shouMyCart();
});
jq("#shouMyCart").click(function(){
	location.href="/easyBuy_SSM/page/buyCar";
});

function addMyCart(proID,num){
	var loginName = jq("#loginName").val();
	if(loginName!=null&&loginName!=""){
		jq.post("/easyBuy_SSM/myCart/addMyCart/"+proID+"/"+num,null,function(data){
			console.log(data);
			if(data.result=="ok"){
				updateTopMyCartNum(num);
				ShowDiv_1('MyDiv1','fade1');
				selectTopMyCart();
			}else if(data.result=="sysError"){
				ShowDiv('errorDiv','fade');
			}else if(data.result=="noLogin"){
				ShowDiv('NoLoginDiv','fade');
			}else{
				ShowDiv('errorDiv','fade');
			}
		},"json");
	}else{
		jq(".b_sure").html("登录");
		jq(".b_buy").html("转转");
		ShowDiv('NoLoginDiv','fade');
	}
}