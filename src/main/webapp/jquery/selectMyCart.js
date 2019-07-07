var MyCartList;
var thisMyCartNum;
//第一次载入界面用AJAX发送请求向数据库拿数据，并存在全局变量中以便使用
selectMyCart();
function selectMyCart(){
	if(jq("#isLogin").val()==1){
		jq.post("/easyBuy_SSM/myCart/selectMyCart",null,function(data){
			console.log(data.result);
			if(data.result=="noPro"){
				ShowDiv('NoProDiv','fade');
			}else{
				console.log(data.list);
				MyCartList = data.list;
				eachToTbody(MyCartList);
			}
		},"json");
	}else{
		ShowDiv('NoLoginDiv','fade');
	}
}

//将最新数据循环打印到页面
function eachToTbody(list){
	var html = "";
	var totalPrice = 0;
	var myCartNum = 0;
	jq.each(list,function(i,pro){
		var Subtotal = pro.price*pro.num;
		var pType = "默认";
		if(pro.proType!=null&&pro.proType!=""){
			pType = pro.proType;
		}
		myCartNum+=pro.num;
		totalPrice+=Subtotal;
		html+="<tr>" +
				"<td>" +
					"<div class='c_s_img'>" +
					"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='73' height='73' />" +
					"</div>" +pro.name +
				"</td>" +
				"<td align='center'>类型："+pType+"</td>" +
				"<td align='center'>" +
					"<div class='c_num'>" +
						"<input type='button' value='' onclick='reduceThisPro("+pro.id+",jq(this));' class='car_btn_1' />" +
						"<input type='text' value='"+pro.num+"' name='' class='car_ipt' />" +
						"<input type='button' value='' onclick='addThisPro("+pro.id+",jq(this));' class='car_btn_2' />" +
					"</div>" +
				"</td>" +
				"<td align='center'>￥"+saveDecimal2(pro.price)+"</td>" +
				"<td align='center' style='color:#ff4e00;'>￥"+saveDecimal2(Subtotal)+"</td><td align='center'>" +
					"<a onclick='wantDel("+pro.id+")'>删除</a>&nbsp; &nbsp;<a href='javascript:void(0);'>加入收藏</a>" +
				"</td>" +
			"</tr>";
	});
	thisMyCartNum = myCartNum;
	jq(".myCartNum").text(myCartNum);
	jq(".totalPrice").html("￥"+saveDecimal2(totalPrice));
	jq("#MyCartTbody").html(html);
	jq("#totalPrice").html("￥"+saveDecimal2(totalPrice));
}

//添加商品数量
function addThisPro(cartID,thisNum){		
	var num = thisNum.parent().find(".car_ipt").val();
	num=parseInt(num)+1;	
	thisNum.parent().find(".car_ipt").val(num);
	updatePageData(cartID,num);
	updateTopMyCartNum(num)
}
//减少商品数量
function reduceThisPro(cartID,thisNum){    
	var num = thisNum.parent().find(".car_ipt").val();
	if(num==1){    
		num=1;    
	}else{    
		num=parseInt(num)-1;    
		thisNum.parent().find(".car_ipt").val(num);
	}
	updatePageData(cartID,num);
	updateTopMyCartNum(0-num)
} 
//增加，减少数据以后，将页面刷新，并更改数据库中的数据
function updatePageData(cartID,num){
	jq.each(MyCartList,function(i,pro){
		if(pro.id==cartID){
			pro.num = num;
			return false;
		}
	});
	jq.post("/easyBuy_SSM/myCart/updateThisPro/"+cartID+"/"+num,null,function(data){
		console.log(data.result);
		if(data.result=="ok"){
			eachToTbody(MyCartList);
		}else if(data.result=="sysError"){
			ShowDiv('errorDiv','fade');
		}else if(data.result=="noLogin"){
			ShowDiv('NoLoginDiv','fade');
		}else{
			ShowDiv('errorDiv','fade');
		}
	},"json");
}

function wantDel(cartID){
	jq("#delCartID").val(cartID);
	ShowDiv('MyDiv','fade');
}


function delProFromMyCart(){
	CloseDiv('MyDiv','fade');
	var cartID = jq("#delCartID").val();
	jq.each(MyCartList,function(i,pro){
		if(pro.id==cartID){
//			pro = null;
			return false;
		}
	});
	jq.post("/easyBuy_SSM/myCart/delProFromMyCart/"+cartID,null,function(data){
		console.log(data.result);
		if(data.result=="ok"){
			selectMyCart();
			eachToTbody(MyCartList);
		}else if(data.result=="sysError"){
			ShowDiv('errorDiv','fade');
		}else if(data.result=="noLogin"){
			ShowDiv('NoLoginDiv','fade');
		}else{
			ShowDiv('errorDiv','fade');
		}
	},"json");
}

function updateTopMyCartNum(num){
	thisMyCartNum += parseInt(num);
	jq(".myCartNum").text(thisMyCartNum);
}

function shouMyCart(){
	if(jq("#isLogin").val()==1){
		jq("#noLoginMyCart").attr("style","display:none;");//隐藏
		jq("#isLoginMycart1").attr("style","display:block;");
		jq("#isLoginMycart2").attr("style","display:block;");
		jq("#isLoginMycart3").attr("style","display:block;");
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
			"<div class='price'><font color='#ff4e00'>￥"+saveDecimal2(pro.price)+"</font> X"+pro.num+"</div>" +
			"</li>";
		});
		jq("#isLoginMycart1").html(html);
		jq(".totalPrice").html(totalPrice);
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
