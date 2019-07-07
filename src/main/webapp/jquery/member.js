var userlist;// 页面还没有加载就创建本页面全局变量
var pageNums1 = 1;
var pageSize = 6;
var tatopage;



function xia() {
	if (pageNums1 >= tatopage) {
		pageNums1 = tatopage;
	} else {
		pageNums1++;
		selectvip();
	}
}

function shang() {
	if (pageNums1 <= 1) {
		pageNums1 = 1;
	} else {
		pageNums1--;
	}
	selectvip();
}

function updateUser(id) {
	
	var thisuser;
	$.each(userlist, function(i, item) {
		if (id == item.id) {
			console.log(item);
			thisuser = item;
		}
	});
	var xb;
	if (thisuser.sex==1) {
		xb="男";
	}else if (thisuser.sex==2) {
		xb="女";
	}else {
		xb="未知";
	}
	// 数据
	var html = "";
	html += "<tr>";
	html += "<td  width='145'  class='td_bg'>登录名: </td>";
	html += "<td width='145'>" +
			"<input type='hidden' name='id' value='"+thisuser.id+"'/>" +
			"<input type='hidden' name='money' value='"+thisuser.money+"'/>" +
			"<input type='text' name='loginName' readonly='readonly' value='" + thisuser.loginName
			+ "' class='m_ipt'></td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td  width='145' class='td_bg'>用户名: </td>";
	html += "<td width='145'><input type='text' name='userName' value='" + thisuser.userName
			+ "' class='m_ipt'></td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td  width='145' class='td_bg'>性别:</td>";
	html += "<td width='145' >" ;
	var checked1="";
	if (thisuser.sex==1) {
		checked1=" checked='checked'";
	}
	var checked2="";
	if (thisuser.sex==2) {
		checked2=" checked='checked'";
	}
	html += "<label class='r_rad'>" +
				"<input class='checkbox3' type='checkbox' name='sex' value='1' "+checked1+" />" +
			"</label>" +
			"<label class='r_txt' style='margin-right:50px;'>男</label>" +
			"<label class='r_rad'>" +
				"<input class='checkbox3' type='checkbox' name='sex' value='2' "+checked2+" /></label>" +
			"<label class='r_txt' style='margin-right:50px;'>女</label>";
			"</td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td  width='145' class='td_bg'>身份证:</td>";
	html += "<td width='145'><input type='text' name='identityCode' value='"
			+ thisuser.identityCode + "' class='m_ipt'></td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td  width='145' class='td_bg'>邮箱: </td>";
	html += "<td width='145'><input type='text' name='email' value='" + thisuser.email
			+ "' class='m_ipt'></td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td  width='145' class='td_bg'>手机号: </td>";
	html += "<td width='145'><input type='text' name='mobile' value='" + thisuser.mobile
			+ "' class='m_ipt'></td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td  colspan='8'> <a href='javascript:viod(0);' onclick='toDeleteUserByID()'>删除</a>" ;
	html +=	"&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<a href='javascript:viod(0);' onclick='toUpdateUserByID()'>修改</a></td>";
	html += "</tr>";
	

	$("#gjslist").html(html);
	$(".checkbox3").click(function(){
		jq('.checkbox3').removeAttr('checked');
		jq(this).attr('checked','checked');
	});
	// 表头
	var htmltop = "";
			htmltop += "<tr>",
			htmltop += "<td class='th_bg' colspan='8'>修改列表&nbsp; &nbsp; &nbsp;</td>";
	htmltop += "</tr>", $("#gjslist3").html(htmltop);

}

function toDeleteUserByID() {
	$("#state").val(2);
	updateUserByID(2);
	
}

function toUpdateUserByID() {
	$("#state").val(0);
	updateUserByID(0);
	
}

function updateUserByID(state){
	$.post("/easyBuy_SSM/user/updateUserByID",$("#myform").serialize(), function(data) {
		alert("data-->"+data);
		if (data.updatelist == "ok") {
			alert("操作成功");
		} else {
			alert("操作失败！"+data.errorlist);
		}
	}, "json");
};

//从数据库分页查询用户
function selectvip() {
	var a = "pageNums1=" + pageNums1 + "&pageSize=" + pageSize;
	$.post("/easyBuy_SSM/user/selectvip",a,function(data) {
						userlist = data.list;// 将data.list保存到userlist本页面全局变量
						tatopage = data.totalPageNum;
						var html = "";
								html += "<tr>",
								html += "<td class='th_bg' colspan='8'>会员列表&nbsp; &nbsp; &nbsp;</td>",
								html += "</tr>", $("#gjslist3").html(html);
								var html = "";
								$.each(data.list,function(i, item) {
													html += "<tr ondblclick='updateUser("
															+ this.id + ")' >";
													html += "<td  width='145' class='td_bg'>用户名</td>";
													html += "<td width='145'>"
															+ item.loginName
															+ "</td>";
													html += "<td width='145'>会员等级</td>";
													html += " <td width='145' class='td_bg'>普通会员</td>";
													html += "<td width='145' class='td_bg'>会员ID</td>";
													html += " <td width='145'>"
															+ item.id + "</td>";
													html += "<td width='145' class='td_bg'>操作</td>";
													html += " <td width='145' <a href='javascript:updateUser("
															+ this.id
															+ ")'><span>删除</span><span>修改</span></td>";
													html += "</tr>";
												});
								html += " <tr>	";
								html += " <td colspan='8'>";
								html += "<span><a href='javascript:viod(0);' onclick='shang()'>";
								html += "上一页</a></span>第<span id='pageNumsGJS'>1</span>页|共<span id='tatopageGJS'>5</span>页 <span><a href='javascript:viod(0);' onclick='xia()'>下一页</a></span>";
								html += " </td>";
								html += " </tr>";
								$("#gjslist").html(html);
								$("#pageNumsGJS").html(data.pageNums1);
								$("#tatopageGJS").html(data.totalPageNum);
					}, "json");
}

$(function() {// 页面加载完之后执行

	
	selectvip(pageNums1);

	$("#fanhui").click(function() {
		pageNums1 = 1;
		selectvip();
	});

});// 页面加载完之后执行end