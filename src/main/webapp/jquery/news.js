var currPage = 1;
var pageSize = 5;
function show(currPage, pageSize) {

	jq
			.post(
					"/easyBuy_SSM/new/tonews",
					"currPage=" + currPage + "&pageSize=" + pageSize,
					function(data) {
						console.log(data.list);
						console.log(data.currPage);
						console.log(data.pageSize);
						console.log(data.id);
						console.log(data.content);

						currPage = data.currPage;
						totalPage = data.totalPage;
						var html = "";
						jq("#count").text(data.count);
						jq(data.list)
								.each(
										function() {
											html += "<tr>"
													+ "<td align='center'  class='td_bg'>"
													+ "<a id='bbb' onclick='showDetail("
													+ this.id
													+ ")' href='javascript:void(0)'>"

													+ this.title + "</a>"
													+ "</td>"
													+ "<td align='center'>"
													+ this.createTime + "</td>"
													+ "</tr>";
										});
						html += "<tr>"
								+ "<td colspan='2'>"
								+ "<a href='javascript:void(0)' onclick='shangyi()' style='color: #ff4e00;'>上一页</a>"
								+ "<span id='currPage'></span>|<span id='totalPage'></span>"
								+ "<a href='javascript:void(0)'onclick='xiayi()' style='color: #ff4e00;'>下一页</a>"
								+ "</td>" + "</tr>";
						jq("#tb").html(html);
						jq("#currPage").text(data.currPage);
						jq("#totalPage").text(data.totalPage);
					}, "json");
}
// 返回到新闻列表页面
function fanhui() {
	show(currPage, pageSize);

}
// 上一页
function shangyi() {
	currPage -= 1;
	if (currPage == 0) {
		currPage = 1;
	}
	show(currPage, pageSize);
}
// 下一页
function xiayi() {
	currPage += 1;
	if (currPage > jq("#totalPage").text()) {
		currPage = jq("#totalPage").text();
	}
	show(currPage, pageSize);
}
jq(function() {
	show(currPage, pageSize);
});
// 根据id显示新闻
function showDetail(id) {
	jq.post("/easyBuy_SSM/new/tonewscontent/" + id, function(data) {
		var html = "";
		html += "<tr>" + "<td class='address'>" + data.id.title + "</td>"
				+ "</tr>";
		html += "<tr>" + "<td >"
				+ "<textarea rows='20' cols='130' readonly='readonly'>"
				+ data.id.content + "</textarea>" + "</td>" + "</tr>";
		jq("#tb").html(html);
	}, "json");
}
function xinzeng() {
	var html = "";
	html += "<tr>" + "<td class='address'>" + "<input type='text' name='title' >"
			+ "</td>" + "</tr>";
	
	html += "<tr>" + "<td >"
			+ "<textarea rows='20' cols='130' name='content' >" + "</textarea>"
			+ "</td>" + "</tr>";
	html += "<tr>" + "<td class='address'>" + "<input type='button' onclick='add()' >"
			+ "</td>" + "</tr>";
	jq("#tb").html(html);
}

function add(){
	
	jq.ajax({
		"url" : "/easyBuy_SSM/new/toinsertnews",
		"data" : jq("#myform").serialize(),
		"datatype" : "JSON",
		"type" : "POST",
		"success" : function(data) {
			alert(data.result)
			if(data.result=="ok"){
			alert("新增成功")
			}
			
		}
	});
}
