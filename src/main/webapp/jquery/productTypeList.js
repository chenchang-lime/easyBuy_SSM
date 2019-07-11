var typeList1;
var typeList2;
var typeList3;
var html1 = "<option value='-1'>请选择</option>";
var html2 = "<option value='-1'>请选择</option>";
var html3 = "<option value='-1'>请选择</option>";

jq(function(){
	//islogin();
	jq("#showList").attr("style","display:block;");
	jq("#showInsert2").attr("style","display:none;");
	jq("#showInsert3").attr("style","display:none;");
	var currPage = 1;
	var pageSize = 10;
	function show(currPage,pageSize){
		jq.post("/easyBuy_SSM/product/selectType","currPage="+currPage+"&pageSize="+pageSize,function(data){
			console.log(data.list);
			console.log(data.currPage);
			console.log(data.pageSize);
			jq("#currPage").text(data.currPage);
			jq("#totalPage").text(data.totalPage);
			currPage=data.currPage;
			totalPage=data.totalPage;
			var html = "";
			jq("#count").text(data.count);
			jq(data.list).each(function(index,item){
				var parentName123=null;
				if (item.parentId==0) {
					parentName123="无";
				}else{
					jq(data.list1).each(function(index1,item1){
						if (item.parentId==item1.id) {
							parentName123=item1.name;
						}
					});
				}
				
				var typaname;
				if (item.type==1) {
					typaname="一级分类";
				}else if(item.type==2){
					typaname="二级分类";
				}else if(item.type==3){
					typaname="三级分类";
				}
			
				html += "<tr>"+                                                                                                                                       
                "<td align='center' width='200px'>"+this.name+"</td>"+
                "<td align='center' width='200px'>"+typaname+"</td>"+
                "<td align='center' width='200px'>"+parentName123+"</td>"+
               /* "<td align='center'><a href='javascript:void(0)' onclick='deleteType("+this.id+")' style=color:red>删除</a></td>"+*/
              "</tr>";
			});
			jq("#tb").html(html);
		},"json"); 	
	};
	
	
	
	jq("#before").click(function(){
		currPage -= 1;
		if (currPage==0) {
			currPage=1;
		}
		show(currPage,pageSize);
	})
	
	jq("#after").click(function(){
		currPage += 1;
		if (currPage>jq("#totalPage").text()) {
			currPage=jq("#totalPage").text();
		}
		show(currPage,pageSize);
	})
	show(currPage,pageSize);
})

//删除分类
function deleteType(id){
		
		jq.post("/easyBuy_SSM/product/deleteType","id="+id,function(data){
			if (data.result=="yes") {
				jq("#msg").html("删除成功！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
				window.location.reload();
			}else{
				jq("#msg").html("删除失败！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
			}
		},"json");
		 
}

jq(function(){
	//上传图片的AJAX
	jq("[name=file]").change(function(){
		 var formData = new FormData(jq("#form3")[0] );
		 jq.ajax({
			 url:"/easyBuy_SSM/product/upload",
			 type:"POST",
			 data:formData,
			 dataType:"json",
			 async:false,
			 cache:false,
			 contentType:false,
			 processData:false,
			 success:function(data){
				 if(data.code=="100"){
					 jq("#image").attr("src","/easyBuy_SSM/images/"+data.url);
					 jq("[name=iconClass]").val(data.url);
				 }
			 },
			 error:function(returndata){
				 console.log(returndata);
			 }
		 });
	});
	//验证商品二级分类同名
	jq("#insertSecType").blur(function(){
		jq.post("/easyBuy_SSM/product/sameSecType","name="+jq("#insertSecType").val(),function(data){
			if(data.result=="no"){
				jq("#msg").html("存在同名分类！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
				jq("#insertSecType").val("");
			}
		},"json");
	});
	//验证商品三级分类同名
	jq("#insertThdType").blur(function(){
		jq.post("/easyBuy_SSM/product/sameThdType","name="+jq("#insertThdType").val(),function(data){
			if(data.result=="no"){
				jq("#msg").html("存在同名分类！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
				jq("#insertThdType").val("");
			}
		},"json");
	});

	jq("#typeinsert2").click(function(){
		jq("#showList").attr("style","display:none;");
		jq("#showInsert2").attr("style","display:block;");
		jq("#showInsert3").attr("style","display:none;");
		selectType1();
		jq(".firstType").change(function(){
			var pid = jq('.firstType option:selected').val();
			jq("#pid").val(pid);
			jq("#insert2").click(function(){
				jq.post("/easyBuy_SSM/product/insertType",jq("#form2").serialize(),function(data){
					if (data.result=="yes") {
						jq("#msg").html("添加成功！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
						location.href='/easyBuy_SSM/page/Member_productTypeList';
					}else{
						jq("#msg").html("添加失败！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
					}
				},"json");
			});
		});
		
	});
	
	jq("#typeinsert3").click(function(){
		jq("#showList").attr("style","display:none;");
		jq("#showInsert2").attr("style","display:none;");
		jq("#showInsert3").attr("style","display:block;");
		selectType1();
		//当第一个类别的值发生变化，则循环遍历第二个类别的值
		jq("#typeLevel3").change(function(){
			html2 = "<option value='-1'>请选择</option>"
			jq(typeList2).each(function(){
				if(this.parentId==jq('#typeLevel3').val()){
					html2 += "<option value='"+this.id+"'>"+this.name+"</option>";
				}
			});
			jq("#secendType").html(html2);
		});
		
		jq("#secendType").change(function(){
			var pid = jq('#secendType option:selected').val();
			jq("#pid3").val(pid);
			jq("#insert3").click(function(){
				
				jq.post("/easyBuy_SSM/product/insertType",jq("#form3").serialize(),function(data){
					if (data.result=="yes") {
						jq("#msg").html("添加成功！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
						location.href='/easyBuy_SSM/page/Member_productTypeList';
					}else{
						jq("#msg").html("添加失败！");
						jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
						jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
						ShowDiv('showMsgDiv','fade');
					}
				},"json");
			});
		});
		
	});
});


//ajax把第一种类别都查出来
function selectType1(){
	jq.post("/easyBuy_SSM/product/selectInsertType",null,function(data){
		typeList1 = data.list1;
		typeList2 = data.list2;
		typeList3 = data.list3;
		jq.each(typeList1,function(){
			html1 += "<option value='"+this.id+"'>"+this.name+"</option>";
		});
		jq(".firstType").html(html1);
	},"json");
}

//判断是否登录
function islogin(){
	jq.post("/easyBuy_SSM/product/islogin",null,function(data){
		if (data.result=="yes") {
			jq("#msg").html("已登录！");
			jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
			jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
			ShowDiv('showMsgDiv','fade');
		}else{
			jq("#msg").html("请先登录！");
			jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
			jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
			ShowDiv('showMsgDiv','fade');
			location.href="/easyBuy_SSM/page/login";
		}
	},"json");
}