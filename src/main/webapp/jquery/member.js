$(function() {
	var pageNums1 = 1;
	var pageSize = 6;
	var tatopage;
	
	function selectvip() {
		var a = "pageNums1=" + pageNums1 + "&pageSize=" + pageSize;
//		alert("pageNums1-->"+pageNums1+",a-->"+a);
		$.post("/easyBuy_SSM/user/selectvip",a, function(data) {
			console.log(data);
			tatopage=data.totalPageNum;
			var html="";
			$.each(data.list, function(i, item) {
				html += "<tr onclick='alert(1)'>";
						html += "<td width='145' class='td_bg'>用户名</td>";
						html += "<td width='145'>"+item.loginName+"</td>";
						html += "<td width='145'>会员等级</td>";
						html += " <td width='145' class='td_bg'>普通会员</td>";
						html += "<td width='145' class='td_bg'>会员ID</td>";
						html += " <td width='145'>"+item.id+"</td>";
				html += "</tr>";
			});
			$("#gjslist").html(html);
			$("#pageNumsGJS").html(data.pageNums1);
			$("#tatopageGJS").html(data.totalPageNum);
		}, "json");
	}

	selectvip(pageNums1);
	$("#xia").click(function() {
			if (pageNums1 >= tatopage) {
				pageNums1 = tatopage;
			}else{
				pageNums1++;
				selectvip();
			}
	});
	$("#shang").click(function() {
		if (pageNums1 <= 1) {
			pageNums1 = 1;
		}else{
			pageNums1--;
		}
		selectvip();
	
	});

});