var proList;
var product;
var type1Listlcw;
var type2Listlcw;
var type3Listlcw;
var html1 = "<option value='-1'>请选择</option>";
var html2 = "<option value='-1'>请选择</option>";
var html3 = "<option value='-1'>请选择</option>";

function selectInsertType(){
	//ajax把三种类别都查出来
	jq.post("/easyBuy_SSM/product/selectInsertType",null,function(data){
		type1Listlcw = data.list1;
		type2Listlcw = data.list2;
		type3Listlcw = data.list3;
		jq.each(type1Listlcw,function(){
			html1 += "<option value='"+this.id+"'>"+this.name+"</option>";
		});
		jq("#firstType").html(html1);
	},"json");
}
//把change事件放到一个方法里
jq(function(){
	//当第一个类别的值发生变化，则循环遍历第二个类别的值
	jq("#firstType").change(function(){
		html2 = "<option value='-1'>请选择</option>";
		var pid = jq('#firstType option:selected').val();
		jq(type2Listlcw).each(function(){
			if(this.parentId==pid){
				html2 += "<option value='"+this.id+"'>"+this.name+"</option>";
			}
		});
		jq("#secendType").html(html2);
	});
	//当第二个类别的值发生变化，则循环遍历第三个类别的值
	jq("#secendType").change(function(){
		html3 = "<option value='-1'>请选择</option>";
		jq(type3Listlcw).each(function(){
			if(this.parentId==jq('#secendType 	').val()){
				html3 += "<option value='"+this.id+"'>"+this.name+"</option>";
			}
		});
		jq("#thirdType").html(html3);
	});	
});

//主方法
jq(function(){
	var currPage = 1;
	var pageSize = 5;
	//islogin();
	jq("#showList").attr("style","display:block;");
	jq("#showUpdate").attr("style","display:none;");
	function show(currPage,pageSize){
		jq.post("/easyBuy_SSM/product/selectall","currPage="+currPage+"&pageSize="+pageSize,function(data){
			console.log(data.list);
			proList = data.list;
			console.log(data.currPage);
			console.log(data.pageSize);
			jq("#currPage").text(data.currPage);
			jq("#totalPage").text(data.totalPage);
			currPage=data.currPage;
			totalPage=data.totalPage;
			var html = "";
			jq("#count").text(data.count);
			jq(data.list).each(function(){
				html += "<tr>"+                                                                                                                                       
	            "<td align='center' height='140px'>"+this.name+"</td>"+ 
	            "<td align='center' ><img src='/easyBuy_SSM/images/"+this.fileName+"' style='width:200px;height:200px'></td>"+ 
	            "<td align='center'>"+this.stock+"</td>"+ 
	            "<td align='center'>"+this.price+"</td>"+ 
	            "<td align='center'><a href='javascript:void(0)' onclick='updatePro("+this.id+")' style=color:red>修改</a></td>"+ 
	            "<td align='center'><a href='javascript:void(0)' onclick='deletePro("+this.id+")' style=color:red>删除</a></td>"+ 
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

function deletePro(id){
		jq.post("/easyBuy_SSM/product/deletePro","id="+id,function(data){
			if (data.result=="yes") {
				jq("#msg").html("删除失败！");
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
selectInsertType();


//修改商品
function updatePro(id){
	jq("#showList").attr("style","display:none;");
	jq("#showUpdate").attr("style","display:block;");
	
	jq(proList).each(function(){
		if(this.id==id){
			product = this;
			jq("#proid").val(product.id);
			jq("[name=name]").val(product.name);
			jq("[name=name]").attr("value",product.name);
			jq("[name=name]").val(product.name);
			jq("[name=fileName]").val(product.fileName);
			jq("[name=price]").val(product.price);
			jq("[name=stock]").val(product.stock);
			jq("[name=description]").val(product.description);
			jq("#image1").attr("src","/easyBuy_SSM/images/"+product.fileName);
		}
	});
	//上传图片的AJAX
	jq("[name=file]").change(function(){
		jq("#image1").attr("src","");
		 var formData = new FormData(jq("#myform")[0] );
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
					 jq("[name=fileName]").val(data.url);
				 }
			 },
			 error:function(returndata){
				 console.log(returndata);
			 }
		 });
	});
   
	//三级联动赋值
	//获取type1的id  设置第一个下拉框选中要修改的商品的第一个类型
	jq(type1Listlcw).each(function(){
		jq("#firstType").val(product.categoryLevel1Id);
	});
	//获取选中的第一个下拉框选中的id
	//var pid = jq('#firstType option:selected').val();
	
	//循环二级分类，将第一个选中的id的子项绑定到第二个下拉框中
	jq(type2Listlcw).each(function(){
		if(this.parentId==jq('#firstType').val()){
			html2 += "<option value='"+this.id+"'>"+this.name+"</option>";
		}
	});
	jq("#secendType").html(html2);
	//设置第二个下拉框选中的商品的二级分类
	jq("#secendType").val(product.categoryLevel2Id);
	
	
	
	jq(type3Listlcw).each(function(){
		if(this.parentId==jq('#secendType').val()){
			html3 += "<option value='"+this.id+"'>"+this.name+"</option>";
		}
	});
	jq("#thirdType").html(html3);
	jq("#thirdType").val(product.categoryLevel3Id);
}

//提交修改后的结果
jq(function(){
	jq("#btn").click(function(){
		
		jq.post("/easyBuy_SSM/product/updatePro",jq("#myform").serialize(),function(data){
			if (data.result=="yes") {
				jq("#msg").html("修改成功！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
				window.location.reload();
			}else{
				jq("#msg").html("修改失败！");
				jq(".b_sure").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("确定");
				jq(".b_buy").attr("href","javascript:void(0)").attr("onclick","CloseDiv('showMsgDiv','fade')").html("取消");
				ShowDiv('showMsgDiv','fade');
			}
		},"json");
	});	

})



	