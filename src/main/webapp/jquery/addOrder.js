var MyCartList;
var MyCartNum = 0;
var expressPrice = 10;
var packing = 0;

jq(".checkbox1").click(function(){
	jq('.checkbox1').removeAttr('checked');
	jq(this).attr('checked','checked');
	if(jq(this).val()==1){
		expressPrice=20;
	}else if(jq(this).val()==2){
		expressPrice=10;
	}else if(jq(this).val()==3){
		expressPrice=8;
	}
	jq("#expressPrice").html("￥"+saveDecimal2(expressPrice));
	updateOrderTotalMoney();
});
jq(".checkbox2").click(function(){
	jq('.checkbox2').removeAttr('checked');
	jq(this).attr('checked','checked');
	if(jq(this).val()==0){
		jq("#packing").attr("style","display:none;");//隐藏
		packing = 0;
	}else if(jq(this).val()==1){
		jq("#packing").attr("style","display:block;");
		packing = 15;
	}
	updateOrderTotalMoney();
});
jq(".checkbox3").click(function(){
	jq('.checkbox3').removeAttr('checked');
	jq(this).attr('checked','checked');
});

function updateOrderTotalMoney(){
	var cost = parseInt(jq("#totalPriceNum").val())+expressPrice+packing;
	jq("#orderTotalMoney").val(cost);
	jq("#orderTotalMoneyText").html("￥"+saveDecimal2(cost));
}

selectTopMyCart();
function selectTopMyCart(){
	jq.post("/easyBuy_SSM/myCart/selectMyCart",null,function(data){
		console.log(data.result);
		var total = 0;
		var typeNum = 0;
		var totalPrice = 0;
		var html = "";
		if(data.result=="ok"){
			console.log(data.list);
			MyCartList = data.list;
			jq.each(MyCartList,function(i,pro){
				var color = "";
				if((i+1)%2==0){
					color =  " class='car_tr'";
				}
				total += pro.num;
				typeNum++;
				totalPrice+=pro.price*pro.num;
				var Subtotal = pro.price*pro.num;
				var pType = "默认";
				if(pro.proType!=null&&pro.proType!=""){
					pType = pro.proType;
				}
				html+="<tr "+color+">" +
						"<td>" +
							"<div class='c_s_img'><img src='/easyBuy_SSM/images/"+pro.fileName+"' width='73' height='73' /></div>" +
							pro.name +
						"</td>" +
						"<td align='center'>类型："+pType+"</td>" +
						"<td align='center'>"+pro.num+"</td>" +
						"<td align='center'>￥"+saveDecimal2(pro.price)+"</td>" +
						"<td align='center' style='color:#ff4e00;'>￥"+saveDecimal2(Subtotal)+"</td>" +
					"</tr>";
			});
		}else{
			jq("#isLoginMycart1").attr("style","display:none;");//隐藏
			jq("#isLoginMycart2").attr("style","display:none;");//隐藏
			jq("#isLoginMycart3").attr("style","display:none;");//隐藏
			jq("#noLoginMyCart").attr("style","display:block;");
		}
		MyCartNum=total;
		jq("#buyCar2").html(html);
		jq(".myCartNum").text(total);
		jq(".totalPrice").html("￥"+saveDecimal2(totalPrice));
		jq("#totalPriceNum").val(totalPrice);
		jq("#typeNum").html(typeNum);
		updateOrderTotalMoney();
	},"json");
}

selectMyDefaultAddress();
function selectMyDefaultAddress(){
	jq.post("/easyBuy_SSM/userAddress/selectMyDefaultAddress",null,function(data){
		if (data.result == "ok") {
			jq("#userName").html(data.account.userName);
			jq("#email").html(data.account.email);
			jq("#address").html(data.defaultAddress.address);
			jq("#userAddress").val(data.defaultAddress.address);
			jq("#mobile").html(data.account.mobile);
		} else if (data.result == "noLogin") {
			ShowDiv('NoLoginDiv','fade');
		}
	},"json");
}

function addOrder(){
	//alert(jq("#orderForm").serialize());
	//jq("#orderForm").submit();
	jq.post("/easyBuy_SSM/orderCC/addOrder",jq("#orderForm").serialize(),function(data){
		if (data.result == "ok") {
			console.log(data.finallyOrder);
			var url = "/easyBuy_SSM/orderCC/toPay/"+data.finallyOrder.serialNumber;
			console.log(url);
			location.href=url;
		} else if (data.result == "noLogin") {
			ShowDiv('NoLoginDiv','fade');
		} else {
			ShowDiv('errorDiv','fade');
		}
	},"json");
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
		if(MyCartList==null){
			selectTopMyCart();
		}
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
		jq(".totalPrice").html("￥"+saveDecimal2(totalPrice));
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

