var currPage = 1;

var pageSize = 5;
function show(currPage, pageSize) {

	jq
			.post(
					"/easyBuy_SSM/new/tonews",
					"currPage=" + currPage + "&pageSize=" + pageSize,
					function(data) {
						currPage = data.currPage;
						totalPage = data.totalPage;
						var html = "";
						jq("#count").text(data.count);
						jq(data.list)
								.each(
										function() {
											html += "<tr ondblclick='showDetail("
													+ this.id
													+ ")'>"
													+ "<td align='center'  class='td_bg'>"
													+ "<a   href='javascript:void(0)'>"
													+ this.title
													+ "</a>"
													+ "</td>"
													+ "<td align='center'>"
													+ this.createTime
													+ "</td>" + "</tr>";
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
	jq
			.post(
					"/easyBuy_SSM/new/tonewscontent/" + id,
					function(data) {
						var html = "";
						html += "<tr>"
								+ "<td class='address' name='title' class='tx_txt'>"
								+ data.id.title + "</td>";
						html += "</tr>";
						html += "<tr>" + "<td name='content'>";
						html += "<textarea rows='20' cols='130' readonly='readonly' class='tx_txt'>";
						html += data.id.content + "</textarea>" + "</td>"
								+ "</tr>";
						html += "<tr>";
						html += "<td  colspan='8' class='m_num fr' style='margin-top:10px;'> ";
						html += "<a   onclick='shanchu(" + data.id.id
								+ ")' href='javascript:void(0)'>删除</a>";
						html += "<td  colspan='8' class='m_num fr' style='margin-top:10px;'> ";
						html += "<a  onclick='xiugai(" + data.id.id
								+ ")' href='javascript:void(0)'>修改</a>";
						html += "</tr>";
						jq("#tb").html(html);
					}, "json");
}
// 新增新闻
function xinzeng() {
	var html = "";
	html += "<tr>" + "<td class='address'>"
			+ "<input type='text' name='title' placeholder='请输入新闻标题'  id='xinnewstitle'>"
			+ "</td>" + "</tr>";
	html += "<tr>"
			+ "<td >"
			+ "<textarea rows='20' cols='130' name='content' placeholder='请输入新闻内容'  id='xinnewsinfo'>"
			+ "</textarea>" + "</td>" + "</tr>";
	html += "<tr>"
			+ "<td class='address'>"
			+ "<input type='button' onclick='add()' value='提交新增' class='log_btn' >"
			+ "</td>" + "</tr>";
	jq("#tb").html(html);
}
// 提示新增成功
function add() {
	if(jq("#xinnewstitle").val()==""){
		alert("不允许新增标题为空，请麻烦您耐心填写");
		return false;
	}
	if(jq("#xinnewsinfo").val()==""){
		alert("不允许内容为空，请麻烦您耐心填写");
		return false;
	}
	jq.ajax({
		"url" : "/easyBuy_SSM/new/toinsertnews",
		"data" : jq("#myform").serialize(),
		"dataType" : "JSON",
		"type" : "POST",
		"success" : function(data) {
			if (data.result == "ok") {
				window.location.reload();
			}else{
				alert("新增失败，请麻烦你重新填写新闻内容")
			}
		}
	});
}

// 删除新闻
function shanchu(id) {
	jq.post("/easyBuy_SSM/new/todeletenewsbyid", "id=" + id, function(data) {
		if (data.result == "yes") {
			alert("删除成功！")
			window.location.reload();
		} else {
			alert("删除失败")
		}
	}, "json");
}
// 修改新闻
function xiugai(id) {
	jq
			.post(
					"/easyBuy_SSM/new/tonewscontent/" + id,
					function(data) {
						var html = "";
						html += "<tr>" + "<td  class='address'>";
						html += "<input type='hidden' value='" + data.id.id
								+ "' name='id' >";
						html += "<input type='text' value='" + data.id.title
								+ "'   name='title' id='newstitle' placeholder='请输入新闻标题'>";
						html += "</td>" + "</tr>";
						html += "<tr>";
						html += "<tr>" + "<td >";
						html += "<textarea rows='20' cols='130'  name='content'  id='newsinfo' placeholder='请输入新闻内容'>";
						html += data.id.content + "</textarea>" + "</td>"
								+ "</tr>";
						html += "<tr>";
						html += "<td  colspan='8' class='m_num fr' style='margin-top:10px;'> ";
						html += "<a   onclick='shanchu(" + data.id.id
								+ ")' href='javascript:void(0)'>删除</a>";
						html += "</tr>";
						html += "<tr>" + "<td class='address'>"
						html += "<input type='button' onclick='app("
								+ data.id.id
								+ ")' value='提交修改' class='log_btn'>";
						html += "</td>" + "</tr>";
						jq("#tb").html(html);
					}, "json");

}
// 修改新闻

function app(id) {
	
	if(jq("#newstitle").val()==""){
		alert("不允许标题为空，请麻烦您耐心填写")
		return false;
	}
	if(jq("#newsinfo").val()==""){
		alert("不允许新闻内容为空,请麻烦您耐心填写")
		return false;
	}
	jq.ajax({
		"url" : "/easyBuy_SSM/new/toupdatenewsbyid",
		"data" : jq("#myform").serialize(),
		"dataType" : "JSON",
		"type" : "POST",
		"success" : function(data) {
			if (data.result == "yes") {
				alert("修改成功!");
				window.location.reload();
			} else {
				alert("修改失败!");
			}
		}
	});
}
