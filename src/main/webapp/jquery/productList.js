jq(function(){
	var currPage = 1;
	var pageSize = 5;
	function show(currPage,pageSize){
		jq.post("/easyBuy_SSM/product/selectall","currPage="+currPage+"&pageSize="+pageSize,function(data){
			console.log(data.list);
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
	            "<td align='center'><img src='/easyBuy_SSM/images/"+this.fileName+"'></td>"+ 
	            "<td align='center'>"+this.stock+"</td>"+ 
	            "<td align='center'>"+this.price+"</td>"+ 
	            "<td align='center'><a href='#' style=color:red>修改</a></td>"+ 
	            "<td align='center'><a href='#' style=color:red>删除</a></td>"+ 
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