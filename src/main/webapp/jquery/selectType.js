$(function(){
	$.post("/easyBuy_SSM/protype/selecttype",null,function(data){
		console.log(data.type1list);
		console.log(data.type2list);
		console.log(data.type3list);
		var html = "<ul>";
		$.each(data.type1list,function(i,t1){
			html+="<li>";
				html+="<div class='fj'>";
					html+="<span class='n_img'><span></span><img src='/easyBuy_SSM/images/nav1.png' /></span><span class='fl'>";
						html+=t1.name;
					html+="</span>";
				html+="</div>";
				
				html+="<div class='zj'>";
					html+="<div class='zj_l'>";
						$.each(data.type2list,function(j,t2){
							if(t2.parentId==t1.id){
								html+="<div class='zj_l_c'>";
									html+="<h2>";
										html+=t2.name;
									html+="</h2>";
									$.each(data.type3list,function(k,t3){
										if(t3.parentId==t2.id){
											html+="<a href='#'>";
												html+=t3.name;
											html+"</a>|";
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
		console.log(html);
		$("#leftNav").html(html);
		$(".leftNav ul li").hover(
			function(){
				$(this).find(".fj").addClass("nuw");
				$(this).find(".zj").show();
			}
			,
			function(){
				$(this).find(".fj").removeClass("nuw");
				$(this).find(".zj").hide();
			}
		);
	},"json");
})