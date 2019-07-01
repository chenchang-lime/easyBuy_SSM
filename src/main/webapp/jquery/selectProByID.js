var product;
function selectProByTypeAJAXZhen(proID){
	jq.post("/easyBuy_SSM/pro/selectProByID/"+proID,null,function(data){
		console.log(data.pro);
		product = data.pro;
		var desName = "<p>"+data.pro.name+"</p>"+data.pro.description;
		jq("#des_name").html(desName);
		jq("#proPrice").html("￥"+saveDecimal2(data.pro.price));
		jq("#stock").html(data.pro.stock+"&nbsp;(月销"+data.pro.sales+"笔)");
		jq("#xinghao").html(data.pro.proType+"<div class='ch_img'></div>");
		
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
		
		jq("#thisType").html("全部 > "+data.type1.name+" > "+data.type2.name+" > "+data.type3.name);
		jq("#typeImg").attr("src","/easyBuy_SSM/images/"+data.type3.iconClass);
		
		jq("#toThisType").click(function(){
			location.href="/easyBuy_SSM/pro/selectProByType/"+data.type1.id+"/"+data.type2.id+"/"+data.type3.id;
		});
	});
}

selectProByTypeAJAXZhen(jq("#proID").val());

//当鼠标悬浮在全部商品分类时触发
jq(".nav_t").mouseover(function(){
	selectType();
});