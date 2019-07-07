var pageNum = 1;
var pageSize = 5;
var totalPage = 0;
selectMyLovePro();
function selectMyLovePro() {
	if (jq("#loginName").val() != null && jq("#loginName").val() != "") {
		jq.post("/easyBuy_SSM/myLove/selectMyLovePro/"+pageNum+"/"+pageSize,null,function(data) {
			console.log(data);
			totalPage = data.totalPage;
			pageNum = data.pageNum;
			var html = "";
			if(data.myLoveList!=null){
				jq.each(data.myLoveList,function(i,item){
					jq.each(data.myLoveProList,function(j,pro){
						if(item.myLoveProID==pro.id){
							var chajia = "";
							if(item.oldPri>pro.price){
								var chajiaPri = item.oldPri- pro.price ;
								chajia+="<span style='color:green'>&nbsp; &nbsp;( ↓"+saveDecimal2(chajiaPri)+" )</span>"
							}else if(item.oldPri<pro.price){
								var chajiaPri = pro.price - item.oldPri;
								chajia+="<span style='color:red'>&nbsp; &nbsp;( ↑"+saveDecimal2(chajiaPri)+" )</span>"
							}
							
							html+="<tr>" +
									"<td style='font-family:'宋体';'>" +
										"<div class='sm_img'>" +
											"<img src='/easyBuy_SSM/images/"+pro.fileName+"' width='48' height='48' />" +
										"</div><a href='/easyBuy_SSM/pro/product/"+pro.id+"'>" +pro.name+"</a>"+
									"</td>" +
									"<td align='center'>" +
										"￥"+saveDecimal2(pro.price)+chajia+
									"</td>" +
									"<td align='center'>&nbsp; &nbsp;" +
										"<a href='javascript:void(0);' onclick='addMyCart("+pro.id+",1)' style=''color:#ff4e00;'>加入购物车</a>&nbsp; &nbsp; " +
										"<a href='javascript:void(0);' onclick='delMyLove("+pro.id+")'>删除</a>" +
									"</td>" +
								"</tr>";
						}
					});
				});
				html+="<tr>" +
						"<td colspan='3' align='right'>" +
						"<a href='javascript:void(0);' onclick='lastPage()'><font color='#ff4e00'>上一页</font></a>&nbsp;&nbsp;" +
							"第<span><font color='#ff4e00' id='pageNum'>"+data.pageNum+"</font></span>页&nbsp;/&nbsp;" +
							"共<span><font color='#ff4e00' id='totalPage'>"+data.totalPage+"</font></span>页&nbsp;&nbsp;" +
						"<a href='javascript:void(0);' onclick='nextPage()'><font color='#ff4e00'>下一页</font></a>" +
						"</tr>"
				jq("#myLoveProTB").html(html);
			}else{
				jq("#myLoveProTB").html("<div align='left' style='font-size:20px;color:#ff3600;'>暂无关注商品！还不赶紧去转转~~~</div>");
			}
			jq("#totalPro").html(data.totalMyLovePro);
		},"json");
	}
}

function lastPage(){
	if(pageNum>1){
		pageNum--;
		selectMyLovePro();
	}
}

function nextPage(){
	if(pageNum<totalPage){
		pageNum++;
		selectMyLovePro();
	}
}

function delMyLove(proID){
	jq.post("/easyBuy_SSM/myLove/delMyLove/"+proID,function(data){
		console.log(data);
		if(data.result=="ok"){
			selectMyLovePro();
		}else if(data.result=="noLogin"){
			ShowDiv('NoLoginDiv','fade');
		}else{
			ShowDiv('errorDiv','fade');
		}
	},"json");
}