function selectProByType(type1,type2,type3){
	location.href="/easyBuy_SSM/pro/selectProByType/"+type1+"/"+type2+"/"+type3;
}

jq(function(){selectType();});

function selectType(){
	jq.post("/easyBuy_SSM/protype/selecttype",null,function(data){
		/*console.log(data.type1list);
		console.log(data.type2list);
		console.log(data.type3list);*/
		var html = "<ul>";
		jq.each(data.type1list,function(i,t1){
			html+="<li>";
				html+="<div class='fj' onclick='selectProByType("+t1.id+",0,0)'>";
					html+="<span class='n_img'><span></span><img src='/easyBuy_SSM/images/nav"+(i+1)+".png' /></span><span class='fl'>";
						html+=t1.name;
					html+="</span>";
				html+="</div>";
				
				html+="<div class='zj'>";
					html+="<div class='zj_l'>";
						jq.each(data.type2list,function(j,t2){
							if(t2.parentId==t1.id){
								html+="<div class='zj_l_c'>";
									html+="<h2 onclick='selectProByType("+t1.id+","+t2.id+",0)'>";
										html+=t2.name;
									html+="</h2>";
									jq.each(data.type3list,function(k,t3){
										if(t3.parentId==t2.id){
											html+="<a href='javascript:void(0);' onclick='selectProByType("+t1.id+","+t2.id+","+t3.id+")'>";
												html+=t3.name;
											html+",</a>";
											html+"<span style='color:gray;'>|</span>";
										}
									});
								html+="</div>";
							}
						});
					html+="</div>";
				html+="<div class='zj_r'>";
					html+="<a href='#'><img src='/easyBuy_SSM/images/n_img1.jpg' width='236' height='200' /></a>"; 
					html+="<a href='#'><img src='/easyBuy_SSM/images/n_img2.jpg' width='236' height='200' /></a>";
					html+="</div>";
				html+="</div>";
			html+="</li>";
		});
		html += "</ul>";
		//console.log(html);
		jq("#leftNav").html(html);
		jq(".leftNav ul li").hover(
			function(){
				jq(this).find(".fj").addClass("nuw");
				jq(this).find(".zj").show();
			}
			,
			function(){
				jq(this).find(".fj").removeClass("nuw");
				jq(this).find(".zj").hide();
			}
		);
	},"json");
}