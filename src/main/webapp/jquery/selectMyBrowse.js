selectMyBrowse();
function selectMyBrowse(){
	if(jq("#isLogin").val()==1){
		jq.post("/easyBuy_SSM/browse/selectMyBrowse",null,function(data){
			console.log(data.browseList);
			console.log(data.proList);
			var html = "";
			if(data.browseList!=null){
				jq.each(data.browseList,function(i,b){
					jq.each(data.proList,function(j,pro){
						if(b.proID==pro.id){
							html+="<li>" +
									"<div class='img'>" +
										"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'>" +
										"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='185' height='162' />" +
										"</a>" +
									"</div>" +
									"<div class='name'>" +
										"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'>"+pro.name+"</a>" +
									"</div>" +
									"<div class='price'><font>￥<span>"+saveDecimal2(pro.price)+"</span></font></div>" +
								"</li>";
						}
					});
				});
				jq("#myBrowse").html(html);
			}
		},"json");
	}
}
