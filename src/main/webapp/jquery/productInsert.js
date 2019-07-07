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
	//当第一个类别的值发生变化，则循环遍历第二个类别的值
	jq("#firstType").change(function(){
		html2="<option value='-1'>请选择</option>";
		jq.each(type2Listlcw,function(){
			if(this.parentId==jq('#firstType option:selected').val()){
				html2 += "<option value='"+this.id+"'>"+this.name+"</option>";
			}
		});
		jq("#secendType").html(html2);
	});
	//当第二个类别的值发生变化，则循环遍历第三个类别的值
	jq("#secendType").change(function(){
		html3 = "<option value='-1'>请选择</option>"
		jq.each(type3Listlcw,function(){
			if(this.parentId==jq('#secendType 	').val()){
				html3 += "<option value='"+this.id+"'>"+this.name+"</option>";
			}
		});
		jq("#thirdType").html(html3);
	});

	//添加商品的AJAX
function insertajax(){
	jq("#btn").click(function(){
		jq.post("/easyBuy_SSM/product/insertProduct",jq("#insertform").serialize(),function(data){
			if (data.result=="yes") {
				alert("添加成功");
				location.href='/easyBuy_SSM/page/Member_productList';
			}else if(data.result=="no"){
				alert("添加失败");
			}else if(data.result=="error"){
				alert("验证不通过"+data.errorList);
			}
		},"json");
	});
}


//上传图片的AJAX
jq("[name=file]").change(function(){
		
	 var formData = new FormData(jq("#insertform")[0] );
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
//主方法	
jq(function(){
	//islogin();
	selectInsertType();
	insertajax();
	
});
//验证商品名称同名
//jq("#insertName").blur(function(){
//	jq.post("/easyBuy_SSM/product/sameInsertName","name="+jq("#insertName").val(),function(data){
//		if(data.result=="no"){
//			alert("存在同名商品！");
//			jq("#insertName").val("");
//		}
//	},"json");
//});

//判断是否登录
function islogin(){
	jq.post("/easyBuy_SSM/product/islogin",null,function(data){
		if (data.result=="yes") {
			alert("已登录")
		}else{
			alert("请先登录");
			location.href="/easyBuy_SSM/page/login";
		}
	},"json");
}