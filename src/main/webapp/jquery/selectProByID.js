var product;
jq("#addMyCart").click(function(){
	var num = 1;
	num = jq("#buyNum").val();
	addMyCart(product.id,num);
});
function selectProByTypeAJAXZhen(proID){
	jq.post("/easyBuy_SSM/pro/selectProByID/"+proID,null,function(data){
		console.log(data);
		product = data.pro;
		console.log(data.type1);
		console.log(data.type2);
		console.log(data.type3);
		console.log(data.pro);
		console.log(product);
		var desName = "<p>"+data.pro.name+"</p>"+data.pro.description;
		var pType = "默认";
		if(data.pro.proType!=null&&data.pro.proType!=""){
			pType = data.pro.proType;
		}
		jq("#des_name").html(desName);
		jq("#proPrice").html("￥"+saveDecimal2(data.pro.price));
		jq("#stock").html(data.pro.stock+"&nbsp;(月销"+data.pro.sales+"笔)");
		jq("#xinghao").html(pType+"<div class='ch_img'></div>");
		jq("#videoPreviewPic").val(data.pro.fileName);
		jq("#videoUrl").val(data.pro.video);
		jq("#loadingImg").attr("src","/easyBuy_SSM/images/"+data.pro.fileName);
		
		jq("#MagicZoom").attr("href","/easyBuy_SSM/images/"+data.pro.fileName).attr("title","/easyBuy_SSM/images/"+data.pro.fileName);
		jq("#bigImg").attr("src","/easyBuy_SSM/images/"+data.pro.fileName);
		//alert("loading...");
		jq("#img1a").attr("src","/easyBuy_SSM/images/"+data.pro.img1).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img1);
		jq("#img2a").attr("src","/easyBuy_SSM/images/"+data.pro.img2).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img2);
		jq("#img3a").attr("src","/easyBuy_SSM/images/"+data.pro.img3).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img3);
		jq("#img4a").attr("src","/easyBuy_SSM/images/"+data.pro.img4).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img4);
		jq("#img1b").attr("src","/easyBuy_SSM/images/"+data.pro.img1).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img1);
		jq("#img2b").attr("src","/easyBuy_SSM/images/"+data.pro.img2).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img2);
		jq("#img3b").attr("src","/easyBuy_SSM/images/"+data.pro.img3).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img3);
		jq("#img4b").attr("src","/easyBuy_SSM/images/"+data.pro.img4).attr("tsImgS","/easyBuy_SSM/images/"+data.pro.img4);

		//jq(".aaa .bbb").eq(0).click();
		//页面加载完以后默认点击第一个Li保证第一个高清大图在放大镜中
		jq("#img1a").trigger("click");
		
		jq("#thisType").html("全部 > "+data.type1.name+" > "+data.type2.name+" > "+data.type3.name);
		jq("#typeImg").attr("src","/easyBuy_SSM/images/"+data.type3.iconClass);
		
		if(data.pro.video!=null&&data.pro.video!=""){
			var video = "";
			video+="<video style='width:987px'" +
			" src='/easyBuy_SSM/video/"+data.pro.video+"' preload='auto' controls='controls'>" +
			"</video>";
			jq("#InfoShowVideo").html(video);
		}
		var pic = "";
		pic+="<img src='/easyBuy_SSM/images/"+data.pro.fileName+"' width='800' height='800' />";
		pic+="<img src='/easyBuy_SSM/images/"+data.pro.img1+"' width='800' height='800' />";
		pic+="<img src='/easyBuy_SSM/images/"+data.pro.img2+"' width='800' height='800' />";
		pic+="<img src='/easyBuy_SSM/images/"+data.pro.img3+"' width='800' height='800' />";
		pic+="<img src='/easyBuy_SSM/images/"+data.pro.img4+"' width='800' height='800' />";
		jq("#picInfo").html(pic);
		
		jq("#toThisType").click(function(){
			location.href="/easyBuy_SSM/pro/selectProByType/"+data.type1.id+"/"+data.type2.id+"/"+data.type3.id;
		});
	},"json");
}

selectProByTypeAJAXZhen(jq("#proID").val());

//当鼠标悬浮在全部商品分类时触发
jq(".nav_t").mouseover(function(){
	selectType();
});


