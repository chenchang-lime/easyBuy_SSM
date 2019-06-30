var MyCartList;

//第一次载入界面用AJAX发送请求向数据库拿数据，并存在全局变量中以便使用
selectMyCart();
function selectMyCart(){
	jq.post("/easyBuy_SSM/myCart/selectMyCart",null,function(data){
		console.log(data.result);
		console.log(data.list);
		MyCartList = data.list;
		eachToTbody(MyCartList);
	});
}

//将最新数据循环打印到页面
function eachToTbody(list){
	var html = "";
	var totalPrice = 0;
	jq.each(list,function(i,pro){
		var Subtotal = pro.price*pro.num;
		totalPrice+=Subtotal;
		html+="<tr>" +
				"<td>" +
					"<div class='c_s_img'>" +
					"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='73' height='73' />" +
					"</div>" +pro.name +
				"</td>" +
				"<td align='center'>类型："+pro.proType+"</td>" +
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
	jq("#MyCartTbody").html(html);
	jq("#totalPrice").html("￥"+saveDecimal2(totalPrice));
}

//添加商品数量
function addThisPro(cartID,thisNum){		
	var num = thisNum.parent().find(".car_ipt").val();
	num=parseInt(num)+1;	
	thisNum.parent().find(".car_ipt").val(num);
	updatePageData(cartID,num);
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
			alert("系统繁忙，请稍后再试！！！");
		}else if(data.result=="noLogin"){
			alert("长时间未操作，为保护您的账户安全，请从新登陆！");
			location.href="/easyBuy_SSM/page/login";
		}else{
			alert("意料之外的错误！！！");
		}
	});
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
			ShowDiv('MyDiv','fade');
		}else if(data.result=="sysError"){
			alert("系统繁忙，请稍后再试！！！");
		}else if(data.result=="noLogin"){
			alert("长时间未操作，为保护您的账户安全，请从新登陆！");
			location.href="/easyBuy_SSM/page/login";
		}else{
			alert("意料之外的错误！！！");
		}
	});
}
