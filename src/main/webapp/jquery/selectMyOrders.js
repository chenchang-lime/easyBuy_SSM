var orderList;
var pageNum = 1;
var pageSize = 8;
var totalPage = 0;
//当鼠标悬浮在全部商品分类时触发
jq(".nav_t").mouseover(function(){
	selectType();
});
function orderInfo(orderID){
	var url = "/easyBuy_SSM/orderCC/toOrderInfo/"+orderID;
	location.href = url;
}

function toPayOrder(orderID){
	var url = "/easyBuy_SSM/orderCC/toPayOrder/"+orderID;
	location.href = url;
}

selectMyOrders();
function selectMyOrders(){
	if(jq("#loginName").val()!=null&&jq("#loginName").val()!=""){
		jq.post("/easyBuy_SSM/orderCC/selectMyOrders/"+pageNum+"/"+pageSize,null,function(data){
			console.log(data.result);
			console.log(data.pageNum);
			console.log(data.totalPage);
			console.log(data.resultList);
			pageNum = data.pageNum;
			totalPage = data.totalPage;
			orderList = data.resultList;
			var html = "";
			jq.each(data.resultList,function(i,order){
				var status = "";
				var a = "<font color='#ff4e00'>[已完结]</font>";
				if(order.status==0){
					status = "已取消";
				} else if(order.status==1){
					status = "未付款";
					a = "<a href='/easyBuy_SSM/orderCC/toPay/"+order.serialNumber+"'><font color='#ff4e00'>[去付款]</font></a>"
				}  else if(order.status==2){
					status = "等待商家发货";
					a = "<a href='javascript:void(0)'><font color='#ff4e00'>[催一下]</font></a>"
				}  else if(order.status==3){
					status = "商家已经发货";
					a = "<a href='/easyBuy_SSM/orderCC/toOrderInfo/"+order.id+"'><font color='#ff4e00'>[确认收货]</font></a>"
				}  else if(order.status==4){
					status = "订单已完成";
					a = "<font color='#ff4e00'>[评价一下]</font>";
				} 
				html+="<tr ondblclick='orderInfo("+order.id+")'>" +
						"<td>" +
							"<a href='javascript:void(0)' onclick='orderInfo("+order.id+")' style='color:#ff4e00;'>" +
								"<font color='#ff4e00'>"+order.serialNumber+"</font>" +
							"</a>" +
						"</td>" +
						"<td>"+order.createTime+"</td>" +
						"<td>￥"+saveDecimal2(order.cost)+"</td>" +
						"<td>"+status+"</td>" +
						"<td>"+a+"</td>" +
					"</tr>";
			});
			jq("#orderTB").html(html);
			jq("#pageNum").html(data.pageNum);
			jq("#totalPage").html(data.totalPage);
		},"json");
	}else{
		location.href = "/easyBuy_SSM/page/login";
	}
}

jq("#lastPage").click(function(){
	if(pageNum>1){
		pageNum--;
		selectMyOrders();
	}
});

jq("#nextPage").click(function(){
	if(pageNum<totalPage){
		pageNum++;
		selectMyOrders();
	}
});
