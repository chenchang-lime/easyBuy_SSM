selectPoster();
function selectPoster(){
	jq.post("/easyBuy_SSM/poster/selectPoster",null,function(data){
		console.log(data);
		var remenZuo = "";
		var remen = "";
		var temaiZuo="";
		var temaiWeiZhi = 1;
		jq.each(data.poList,function(i,po){
			if(po.type==-3){//热门左边
				jq.each(data.proList,function(j,pro){
					if(po.proID==pro.id){
						//console.log(po.proID);
						remenZuo+="<div class='img' id='remenZuo'>" +
									"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'>" +
										"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='188' height='220' />" +
									"</a>" +
								"</div>" +
								"<div class='pri_bg'>" +
									"<span class='price fl'>￥"+saveDecimal2(pro.price)+"</span>" +
								"</div>";
						return false;
					}
				});
			}else if(po.type==0){//热门
				jq.each(data.proList,function(j,pro){
					if(po.proID==pro.id){
						console.log(po.proID);
						remen+= "<li class='featureBox'>" +
						"<div class='box'>" +
						"<div class='h_icon'>" +
						"<img src='/easyBuy_SSM/images/hot.png' width='50' height='50' />" +
						"</div><div class='imgbg'>" +
						"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'>" +
						"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='160' height='136' />" +
						"</a>" +
						"</div>" +
						"<div class='name'>" +
						"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'><h2>"+pro.name+"</h2>"+pro.description+"</a>" +
						"</div>" +
						"<div class='price'>" +
						"<font>￥<span>"+saveDecimal2(pro.price)+"</span></font></div>" +
						"</div>" +
						"</li>";
						return false;
					}
				});
			}else if(po.type==-2){//特卖左边
				jq.each(data.proList,function(j,pro){
					if(po.proID==pro.id){
						temaiZuo+="<li>" +
								"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'>" +
								"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='211' height='357' />" +
								"</a></li>";
						return false;
					}
				});
			}else if(po.type==-1){//1F:限时特卖
				jq.each(data.proList,function(j,pro){
					if(po.proID==pro.id){
						//console.log(po.proID);
						var temaiA = "#temaiA"+temaiWeiZhi;
						var temaiImg="#temaiImg"+temaiWeiZhi;
						var temaiPri="#temaiPri"+temaiWeiZhi;
						var temaiName="#temaiName"+temaiWeiZhi;
						var temaiJJ="#temaiJJ"+temaiWeiZhi;
						console.log("temaiJJ-->"+temaiJJ+","+pro.description);
						temaiWeiZhi++;
						jq(temaiA).attr("href","/easyBuy_SSM/pro/product/"+pro.id);
						jq(temaiImg).attr("src","/easyBuy_SSM/images/"+pro.fileName);
						jq(temaiPri).html(saveDecimal2(pro.price));
						jq(temaiName).attr("href","/easyBuy_SSM/pro/product/"+pro.id).html(pro.name);
						jq(temaiJJ).after(pro.description);
						return false;
					}
				});
			}
		});
		jq('#remen').html(remen);
		jq('#remenZuo').html(remenZuo);
		jq('#actor').html(temaiZuo);
		
	},"json");
}