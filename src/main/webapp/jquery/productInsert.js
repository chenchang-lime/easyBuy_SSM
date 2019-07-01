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
		alert(jq('#firstType option:selected').val());
		jq.each(type2Listlcw,function(){
			if(this.parentId==jq('#firstType option:selected').val()){
				html2 += "<option value='"+this.id+"'>"+this.name+"</option>";
			}
		});
		jq("#secendType").html(html2);
	});
	//当第二个类别的值发生变化，则循环遍历第三个类别的值
	jq("#secendType").change(function(){
		jq.each(type3Listlcw,function(){
			if(this.parentId==jq('#secendType 	').val()){
				html3 += "<option value='"+this.id+"'>"+this.name+"</option>";
			}
		});
		jq("#thirdType").html(html3);
	});
	//添加商品的ajax
function insertajax(){
	jq("#btn").click(function(){
		alert("12356");
		jq.post("/easyBuy_SSM/product/insertProduct",jq("#insertform").serialize(),function(data){
			if (data.result=="yes") {
				alert("添加成功");
				location.href='Member_productList.jsp';
			}else if(data.result=="no"){
				alert("添加失败");
			}
		},"json")
	})
}
jq("#btn1").click(function(){
	location.href='/easyBuy_SSM/page/Member_productList';
});
//主方法	
jq(function(){
	selectInsertType();
	alert(111);
	insertajax();
});
