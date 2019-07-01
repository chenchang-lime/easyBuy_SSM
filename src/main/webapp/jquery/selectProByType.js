var thisType1list;
var thisType2list;
var thisType3list;
var thisType1ID;
var thisType2ID;
var thisType3ID;
var thisType1Name;
var thisType2Name;
var thisType3Name;
var pageNum = 1;
var pageSize = 20;
var totalPro = 0;
var totalPage = 0;

//第一次进入页面时，将客户在主页选择的1，2，3分类从页面的hide input框中取出，处理，做显示，并根据此分类用AJAX去数据库拿到相应的数据
jq(function(){selectProByTypeJAX(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());});

//从悬浮列表中选择1，2，3的某一分类，不通过数据库，将分类处理好，再去数据库查询Pro
function selectProByTypeJAX(type1,type2,type3){
	jq("#type1").val(type1);
	jq("#type2").val(type2);
	jq("#type3").val(type3);
	if(thisType1list!=null&&thisType2list!=null&thisType3list!=null){
		jq("#type1Name").empty();
		jq("#type2Name").empty();
		if(type1==0){
			jq("#type1Name").empty();
			jq("#type2Name").empty();
			jq("#type3NameAll").empty();
		}else{
			if(type2==0){
				jq("#type1Name").empty();
				jq("#type2Name").empty();
				jq.each(thisType1list,function(){
					if(type1==this.id){
						var html = "";
						html+="<span class='n_ch'>"+
						"<span class='fl'>"+
						"<font id='type3Name'>"+this.name+"</font>"+
						"</span>"+
						"<a href='javascript:void(0);' onclick='delType()'><img src='/easyBuy_SSM/images/s_close.gif' /></a>"+
						"</span>";
						jq("#type3NameAll").html(html);
						thisType3Name = this.name;
					}
				});
			}else{
				if(type3==0){
					jq("#type2Name").empty();
					jq.each(thisType1list,function(){
						if(type1==this.id){
							jq("#type1Name").html(this.name+" > ");
						}
					});
					jq.each(thisType2list,function(){
						if(type2==this.id){
							var html = "";
							html+="<span class='n_ch'>"+
							"<span class='fl'>"+
							"<font id='type3Name'>"+this.name+"</font>"+
							"</span>"+
							"<a href='javascript:void(0);' onclick='delType()'><img src='/easyBuy_SSM/images/s_close.gif' /></a>"+
							"</span>";
							jq("#type3NameAll").html(html);
							thisType3Name = this.name;
						}
					});
				}else{
					jq.each(thisType1list,function(){
						if(type1==this.id){
							thisType1Name = this.name;
							jq("#type1Name").html(this.name+" > ");
						}
					});
					jq.each(thisType2list,function(){
						if(type2==this.id){
							thisType2Name = this.name;
							jq("#type2Name").html(this.name+" > ");
						}
					});
					jq.each(thisType3list,function(){
						if(type3==this.id){
							var html = "";
							html+="<span class='n_ch'>"+
							"<span class='fl'>"+
							"<font id='type3Name'>"+this.name+"</font>"+
							"</span>"+
							"<a href='javascript:void(0);' onclick='delType()'><img src='/easyBuy_SSM/images/s_close.gif' /></a>"+
							"</span>";
							jq("#type3NameAll").html(html);
							thisType3Name = this.name;
						}
					});
				}
			}
		}
	}
	selectProByTypeAJAXZhen(type1,type2,type3);
}

//根据拿到1，2，3级类别查找【--ProList--】，AJAX
function selectProByTypeAJAXZhen(type1,type2,type3){
	//alert("type1-->"+type1+",type2-->"+type2+",type3-->"+type3+",pageNum-->"+pageNum+",pageSize-->"+pageSize);
	jq.post("/easyBuy_SSM/pro/selectProByTypeAJAX/"+type1+"/"+type2+"/"+type3+"/"+pageNum+"/"+pageSize,null,function(data){
		console.log(data.list);
		console.log(data.pageNum);
		console.log(data.pageSize);
		console.log(data.totalPro);
		console.log(data.totalPage);
		pageNum = data.pageNum;
		pageSize = data.pageSize;
		totalPro = data.totalPro;
		totalPage = data.totalPage;
		var html = "<ul class='cate_list'>";
				jq.each(data.list,function(i,pro){
					html += "<li>" +
								"<div class='img'>" +
									"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'><img src='/easyBuy_SSM/images/"+pro.fileName+"' width='210' height='185' /></a>" +
								"</div>" +
								"<div class='price'>" +
									"<font>￥<span>"+saveDecimal2(pro.price)+"</span></font>" +
								"</div>" +
								"<div class='name'>" +
									"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'>"+pro.name+"</a>" +
								"</div>" +
								"<div class='carbg'>" +
									"<a href='#' class='ss'>收藏</a><a href='#' class='j_car'>加入购物车</a>" +
								"</div>" +
							"</li>";
				});
			html += "</ul>" +
					"<div class='pages'>" +
						"<a href='javascript:void(0);' onclick='lastPage("+type1+","+type2+","+type3+")' class='p_pre'>上一页</a>" +
						"<a href='javascript:void(0);' class='cur'>第"+data.pageNum+"页</a>" +
						"<a href='javascript:void(0);'>共"+data.totalPage+"页</a>" +
						"<a href='javascript:void(0);' onclick='nextPage("+type1+","+type2+","+type3+")' class='p_pre'>下一页</a>" +
					"</div>";
			jq(".list_c").html(html);
			jq("#totalPro").html("共发现"+data.totalPro+"件");
	},"json");
}

//下一页
function nextPage(type1,type2,type3){
	pageNum++;
	selectProByTypeAJAXZhen(type1,type2,type3);
}

//上一页
function lastPage(type1,type2,type3){
	if(pageNum>1){
		pageNum--;
		selectProByTypeAJAXZhen(type1,type2,type3);
	}
}

//叉掉小分类,从服务器拿相应的数据
function delType(){
	thisType1ID = jq("#type1").val();
	thisType2ID = jq("#type2").val();
	thisType3ID = jq("#type3").val();
	//alert("thisType1ID-->"+thisType1ID+",thisType2ID-->"+thisType2ID+",thisType3ID-->"+thisType3ID);
	if(thisType2ID==0){
		jq("#type3NameAll").empty();
		jq("#type1").val(0);
		thisType1ID=0;
	}else if(thisType3ID==0){
		jq("#type3Name").html(thisType1Name);
		jq("#type1Name").empty();
		jq("#type2").val(0);
		thisType2ID=0;
	}else{
		jq("#type3Name").html(thisType2Name);
		jq("#type2Name").empty();
		jq("#type3").val(0);
		thisType3ID=0;
	}
	selectProByTypeAJAXZhen(thisType1ID,thisType2ID,thisType3ID);
}

//当鼠标悬浮在全部商品分类时触发
jq(".nav_t").mouseover(function(){
	selectType();
});

//查找三维类别列表
function selectType(){
	jq.post("/easyBuy_SSM/protype/selecttype",null,function(data){
		/*console.log(data.type1list);
		console.log(data.type2list);
		console.log(data.type3list);*/
		thisType1list = data.type1list;
		thisType2list = data.type2list;
		thisType3list = data.type3list;
		var html = "<ul>";
		jq.each(data.type1list,function(i,t1){
			html+="<li>";
				html+="<div class='fj' onclick='selectProByTypeJAX("+t1.id+",0,0)'>";
					html+="<span class='n_img'><span></span><img src='/easyBuy_SSM/images/nav"+(i+1)+".png' /></span><span class='fl'>";
						html+=t1.name;
					html+="</span>";
				html+="</div>";
				
				html+="<div class='zj'>";
					html+="<div class='zj_l'>";
						jq.each(data.type2list,function(j,t2){
							if(t2.parentId==t1.id){
								html+="<div class='zj_l_c'>";
									html+="<h2 onclick='selectProByTypeJAX("+t1.id+","+t2.id+",0)'>";
										html+=t2.name;
									html+="</h2>";
									jq.each(data.type3list,function(k,t3){
										if(t3.parentId==t2.id){
											html+="<a href='javascript:void(0);' onclick='selectProByTypeJAX("+t1.id+","+t2.id+","+t3.id+")'>";
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
//		console.log(html);
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
