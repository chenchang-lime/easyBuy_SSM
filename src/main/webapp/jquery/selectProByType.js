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
var pageSize = 8;
var totalPro = 0;
var totalPage = 0;

//第一次进入页面时，将客户在主页选择的1，2，3分类从页面的hide input框中取出，处理，做显示，并根据此分类用AJAX去数据库拿到相应的数据
jq(function(){
	if(jq("#type1").val()==0){
		jq("#type3NameAll").empty();
	}
	thisType1Name = jq("#thisType1Name").val();
	thisType2Name = jq("#thisType2Name").val();
	thisType3Name = jq("#thisType3Name").val();
	selectProByTypeJAX(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});

jq("#selectLike").click(function(){
	selectProByTypeAJAXZhen(type1,type2,type3);
});

//从悬浮列表中选择1，2，3的某一分类，不通过数据库，将分类处理好，再去数据库查询Pro
function selectProByTypeJAX(type1,type2,type3){
	jq("#type1").val(type1);
	jq("#type2").val(type2);
	jq("#type3").val(type3);
	
	//如果缓存数据不为空，那么去缓存数据把当前筛选条件的显示整理完毕，再去拿数据
	if(thisType1list!=null&&thisType2list!=null&thisType3list!=null){
		jq("#likeName").val("");
		pinpaichaxun(thisType1list,thisType1list,thisType3list);
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
						thisType1Name = this.name;
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
							thisType2Name = this.name;
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
		//alert("Nofirst,end-->thisType1Name-->"+thisType1Name+",thisType2Name-->"+thisType2Name+",thisType3Name-->"+thisType3Name);
	}
	//当前筛选条件的显示已经整理完毕，现在再去拿数据
	selectProByTypeAJAXZhen(type1,type2,type3);
}

//keydown按下，keypress按着没上抬，keyup上抬键盘。
jq(document).keyup(function(event) {
	if (event.keyCode == 13) {
		selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
	}
});

//根据拿到1，2，3级类别查找【--ProList--】，AJAX
function selectProByTypeAJAXZhen(type1,type2,type3){
	jq("#leftNav").attr("style","display:none;");//隐藏
	var likeName = jq("#likeName").val();
	var mixPrice = jq("#thisMinPrice").val();
	var maxPrice = jq("#thisMaxPrice").val();
	var orderBy = jq("#orderBy").val();
	if(orderBy==null||orderBy==""){
		orderBy = "no";
	}
	//alert("type1-->"+type1+",type2-->"+type2+",type3-->"+type3+",pageNum-->"+pageNum+",pageSize-->"+pageSize+",likeName-->"+likeName+",mixPrice-->"+mixPrice+",maxPrice-->"+maxPrice+",orderBy-->"+orderBy);
	//alert(jq("#myForm").serialize());
	jq.post("/easyBuy_SSM/pro/selectProByTypeAJAX/"+pageNum+"/"+pageSize+"/"+mixPrice+"/"+maxPrice+"/"+orderBy,jq("#myForm").serialize(),function(data){
		console.log(data.list);
		console.log(data.myLoveList);
		pageNum = data.pageNum;
		pageSize = data.pageSize;
		totalPro = data.totalPro;
		totalPage = data.totalPage;
		var html = "<ul class='cate_list'>";
		if(data.list==null||data.list.length==0){
			jq(".list_c").html("<div align='left' style='font-size:20px;color:#ff3600;'>暂无此类型商品！</div>");
			jq("#totalPro").html(0);
			return false;
		}
		
		jq.each(data.list,function(i,pro){
			//设置高亮
			var proName = ""
			if(likeName!=null&&likeName!=""){
				var arr = pro.name.split(likeName);
				proName = arr[0]+"<span style='color:red'>"+likeName+"</span>"+arr[1];
			}else{
				proName=pro.name;
			}
			var shoucang = "<a href='javascript:void(0)' id='addMyLove"+pro.id+"' onclick='addMyLove("+pro.id+")' class='ss'>收藏</a>";
			if(data.myLoveList!=null){
				jq.each(data.myLoveList,function(j,myLove){
					if(pro.id==myLove.myLoveProID){
						shoucang = "<a href='javascript:void(0)' id='delMyLove"+pro.id+"' onclick='delMyLove("+pro.id+")' class='ss' style='background:url(/easyBuy_SSM/images/heart_h.png) no-repeat 10px center;color:#ff4e00;font-weight:bolder;'>收藏</a>";
						return false;
					}
				});
			}
			html += "<li>" +
						"<div class='img'>" +
							"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'><img src='/easyBuy_SSM/images/"+pro.fileName+"' width='210' height='185' /></a>" +
						"</div>" +
						"<div class='price'>" +
							"<font>￥<span>"+saveDecimal2(pro.price)+"</span></font>&nbsp;&nbsp;&nbsp;&nbsp;已销:" + pro.sales + "笔" +
						"</div>" +
						"<div class='name'>" +
							"<a href='/easyBuy_SSM/pro/product/"+pro.id+"'>"+proName+"</a>" +
						"</div>" +
						"<div class='carbg'>" + shoucang +
							"<a href='javascript:void(0)' onclick='addMyCart("+pro.id+",1)' class='j_car'>加入购物车</a>" +
						"</div>" +
					"</li>";
		});
		html+="</ul>";
			
		//分页页码打印
		var pageList = "";
		var n = 1;
		var lastPage = parseInt(data.totalPage);
		var firstPage = 1;
		if(data.pageNum>=4&&data.totalPage>=6){
			pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+",1)'>1</a>";
			pageList += "...";
			firstPage = data.pageNum;
			var shangyiye = data.pageNum - 1;
			pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+shangyiye+")'>"+shangyiye+"</a>";
		}else if(data.pageNum>=3&&data.totalPage>=6){
			pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+",1)'>1</a>";
			pageList += "...";
			firstPage = data.pageNum;
		}
		for (var i=firstPage;i<=lastPage;i++){
			if(n<=3&&firstPage<4){
				if(data.pageNum==i){
					pageList += "<a href='javascript:void(0);' class='cur'>"+i+"</a>";
				}else{
					pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")'>"+i+"</a>";
				}
			}else if(n<=2&&firstPage>=4){
				if(data.pageNum==i){
					pageList += "<a href='javascript:void(0);' class='cur'>"+i+"</a>";
				}else{
					pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")'>"+i+"</a>";
				}
			}else if(n==4){
				if(lastPage>=7&&firstPage==(lastPage-3)){
					pageList += "...";
					pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")'>"+lastPage+"</a>";
				}else if(lastPage==4){
					if(data.pageNum==4){
						pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")' class='cur'>"+lastPage+"</a>";
					}else{
						pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")'>"+lastPage+"</a>";
					}
				}else if(lastPage>4){
					pageList += "...";
					pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")'>"+lastPage+"</a>";
				}else if(i==lastPage-1){
					pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")'>"+lastPage+"</a>";
				}
			}else if(n==3&&lastPage>=7&&firstPage==(lastPage-2)){
				pageList += "<a href='javascript:void(0);' onclick='toThisPage("+type1+","+type2+","+type3+","+i+")'>"+lastPage+"</a>";
			}
			n++;
		}
			//分页页码打印end
		html += "<div class='pages'>" +
					"<a href='javascript:void(0);' onclick='lastPage("+type1+","+type2+","+type3+")' class='p_pre'>上一页</a>" +
					pageList+
					"<a href='javascript:void(0);' onclick='nextPage("+type1+","+type2+","+type3+")' class='p_pre'>下一页</a>" +
				"</div>";
		jq(".list_c").html(html);
		jq("#totalPro").html(data.totalPro);
			
		//根据类型查询完所有商品的数据后，再去把当前分类下的所有品牌找出来，打印，并高亮出当前的分类
		selectType();
	},"json");
}

//去指定页
function toThisPage(type1,type2,type3,toThisPage){
	pageNum = toThisPage;
	selectProByTypeAJAXZhen(type1,type2,type3);
}

//下一页
function nextPage(type1,type2,type3){
	if(pageNum<totalPage){
		pageNum++;
		selectProByTypeAJAXZhen(type1,type2,type3);
	}
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
	jq("#pinpai").html("<td width='70'>&nbsp; </td><td class='td_a'>全品类</td></td>");
	thisType1ID = jq("#type1").val();
	thisType2ID = jq("#type2").val();
	thisType3ID = jq("#type3").val();
	//alert("delType-->thisType1Name-->"+thisType1Name+",thisType2Name-->"+thisType2Name+",thisType3Name-->"+thisType3Name)
	pageNum = 1;
	//alert("thisType1ID-->"+thisType1ID+",thisType2ID-->"+thisType2ID+",thisType3ID-->"+thisType3ID);
	if(thisType2ID==0){
		//当2级分类为0，代表目前只剩下1级分类，再X掉就是全都消失
		jq("#type3NameAll").empty();
		jq("#type1").val(0);
		thisType1ID=0;
	}else if(thisType3ID==0){
		//当3级分类为0，代表目前剩下1,2级分类，再X掉就是只剩下1级分类
		jq("#type3Name").html(thisType1Name);
		jq("#type1Name").empty();
		jq("#type2").val(0);
		thisType2ID=0;
	}else{
		//当1，2，3级分类都存在时，X掉就是剩下1，2级分类，只将2级分类的名字挪到3级分类，并将2级分类名字显示清空，三级分类input清零
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
		//三级联动分类列表
		jq("#leftNav").html(html);
		
		pinpaichaxun(data.type1list,data.type2list,data.type3list);
		
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

function addMyLove(proID){
	alert(proID);
	jq.post("/easyBuy_SSM/myLove/addMyLove/"+proID,function(data){
		console.log(data);
		if(data.result=="ok"){
			jq("#addMyLove"+proID).attr("onclick","delMyLove("+proID+")").attr("style","background:url(/easyBuy_SSM/images/heart_h.png) no-repeat 10px center;color:#ff4e00;font-weight:bolder;");
		}else if(data.result=="noLogin"){
			ShowDiv('NoLoginDiv','fade');
		}else{
			ShowDiv('errorDiv','fade');
		}
	},"json");
}

function delMyLove(proID){
	jq.post("/easyBuy_SSM/myLove/delMyLove/"+proID,function(data){
		console.log(data);
		if(data.result=="ok"){
			jq("#addMyLove"+proID).attr("onclick","addMyLove("+proID+")").attr("style","background:url(/easyBuy_SSM/images/heart.png) no-repeat 10px center;color:#888888;");
		}else if(data.result=="noLogin"){
			ShowDiv('NoLoginDiv','fade');
		}else{
			ShowDiv('errorDiv','fade');
		}
	},"json");
}


//根据价格查询商品
function selectProByPrice(id,minPrice,maxPrice){
	var aID = "#price"+id;
	jq("#thisMinPrice").val(minPrice);
	jq("#thisMaxPrice").val(maxPrice);
	jq('.td_a a').removeAttr('class');
	if(minPrice==0&&maxPrice==0){
		jq(aID).html("<a href='javascript:void(0);' onclick='selectProByPrice("+id+","+minPrice+","+maxPrice+")' class='now'>默认</a>");
	}else if(minPrice==0){
		jq(aID).html("<a href='javascript:void(0);' onclick='selectProByPrice("+id+","+minPrice+","+maxPrice+")' class='now'>0-199</a>");
	}else if(maxPrice==0){
		jq(aID).html("<a href='javascript:void(0);' onclick='selectProByPrice("+id+","+minPrice+","+maxPrice+")' class='now'>1400以上</a>");
	}else{
		jq(aID).html("<a href='javascript:void(0);' onclick='selectProByPrice("+id+","+minPrice+","+maxPrice+")' class='now'>"+minPrice+"-"+maxPrice+"</a>");
	}
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
}

//根据超链接的品牌查询
function selectProByType3(type3ID){
	selectProByTypeJAX(jq("#type1").val(),jq("#type2").val(),type3ID);
}

//将此分类下的品牌列表以超链接形式打印在页面
function pinpaichaxun(type1list,type2list,type3list){
	if(jq("#type3").val()!=0){
		//页面品牌列表
		var parentId = -1;
		jq.each(type3list,function(i,type){
			if(jq("#type3").val()==type.id){
				parentId = type.parentId;
				return false;
			}
		});
		var pinpai = "<td width='70'>&nbsp; 品牌：</td><td class='td_a'>";
		jq.each(type3list,function(i,type){
			if(type.parentId==parentId){
				var typeName = "";
				if(type.englishName!=null&&type.englishName!=""){
					typeName=type.name+"("+type.englishName+")";
				}else{
					typeName=type.name;
				}
				if(jq("#type3").val()==type.id){
					pinpai+="<a href='javascript:void(0);' onclick='selectProByType3("+type.id+")' class='now'>"+typeName+"</a>";
				}else{
					pinpai+="<a href='javascript:void(0);' onclick='selectProByType3("+type.id+")'>"+typeName+"</a>";
				}
			}
		});
		pinpai+="</td></td>";
		jq("#pinpai").html(pinpai);
	}else{
		if(jq("#type2").val()!=0&&jq("#type3").val()==0){
			//页面品牌列表
			var type2ID = jq("#type2").val();
			var pinpai = "<td width='70'>&nbsp; 品牌：</td><td class='td_a'>";
			jq.each(type3list,function(i,type){
				if(type.parentId==type2ID){
					var typeName = "";
					if(type.englishName!=null&&type.englishName!=""){
						typeName=type.name+"("+type.englishName+")";
					}else{
						typeName=type.name;
					}
					pinpai+="<a href='javascript:void(0);' onclick='selectProByType3("+type.id+")'>"+typeName+"</a>";
				}
			});
			pinpai+="</td></td>";
			jq("#pinpai").html(pinpai);
		}else{
			console.log("t1-->"+jq("#type1").val());
			console.log("t2-->"+jq("#type2").val());
			console.log("t3-->"+jq("#type3").val());
			if(jq("#type1").val()!=0&&jq("#type2").val()==0&&jq("#type3").val()==0){
				var pinpai = "<td width='70'>&nbsp; 品牌：</td><td class='td_a'>";
				jq.each(type2list,function(i,type2){
					if(type2.parentId==jq("#type1").val()){
						console.log(jq("#type1").val()==type2.parentId);
						console.log(type2.id);
						jq.each(type3list,function(j,type3){
							if(type3.parentId==type2.id){
								console.log(type3.id);
								var typeName = "";
								if(type3.englishName!=null&&type3.englishName!=""){
									typeName=type3.name+"("+type3.englishName+")";
								}else{
									typeName=type3.name;
								}
								pinpai+="<a href='javascript:void(0);' onclick='selectProByType3("+type3.id+")'>"+typeName+"</a>";
							}
						});
					}
				});
				pinpai+="</td></td>";
				jq("#pinpai").html(pinpai);
			}else{
				jq("#pinpai").html("<td width='70'>&nbsp; </td><td class='td_a'>全品类</td></td>");
			}
		}
	}
}

//排序规则
jq("#moren").click(function(){
	jq("#orderByA a").removeClass("now");
	jq("#moren").attr("class","now");
	jq("#orderBy").val("");
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});
var orderBySalesNum = 1;
jq("#orderBySales").click(function(){
	if(orderBySalesNum==1){
		jq("#orderBy").val("orderBySalesMax");
		orderBySalesNum++;
	}else{
		jq("#orderBy").val("orderBySalesMin");
		orderBySalesNum=1;
	}
	jq("#orderByA a").removeClass("now");
	jq("#orderBySalesA").attr("class","now");
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});
jq("#orderBySalesMax").click(function(){
	jq("#orderBy").val("orderBySalesMax");
	jq("#orderByA a").removeClass("now");
	jq("#orderBySalesA").attr("class","now");
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});
jq("#orderBySalesMin").click(function(){
	jq("#orderBy").val("orderBySalesMin");
	jq("#orderByA a").removeClass("now");
	jq("#orderBySalesA").attr("class","now");
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});
var orderByPriceNum = 1;
jq("#orderByPrice").click(function(){
	if(orderByPriceNum==1){
		jq("#orderBy").val("orderByPriceMax");
		orderByPriceNum++;
	}else{
		jq("#orderBy").val("orderByPriceMin");
		orderByPriceNum=1;
	}
	orderByA
	jq("#orderByA a").removeClass("now");
	jq("#orderByPriceA").attr("class","now");
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});
jq("#orderByPriceMax").click(function(){
	jq("#orderBy").val("orderByPriceMax");
	jq("#orderByA a").removeClass("now");
	jq("#orderByPriceA").attr("class","now");
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});
jq("#orderByPriceMin").click(function(){
	jq("#orderBy").val("orderByPriceMin");
	jq("#orderByA a").removeClass("now");
	jq("#orderByPriceA").attr("class","now");
	selectProByTypeAJAXZhen(jq("#type1").val(),jq("#type2").val(),jq("#type3").val());
});
