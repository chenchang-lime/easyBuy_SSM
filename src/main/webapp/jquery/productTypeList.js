jq(function(){
	var currPage = 1;
	var pageSize = 5;
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
                "<td align='center' width='120px'>"+this.name+"</td>"+
                "<td align='center' width='120px'>"+typaname+"</td>"+
                "<td align='center' width='120px'>"+parentName123+"</td>"+
                "<td align='center'><a href='javascript:void(0)' onclick='deleteType("+this.id+")' style=color:red>删除</a></td>"+
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

function deleteType(id){
		alert(id);
		jq.post("/easyBuy_SSM/product/deleteType","id="+id,function(data){
			if (data.result=="yes") {
				alert("删除成功！");
				window.location.reload();
			}else{
				alert("删除失败！");
			}
		},"json");
		 
	}