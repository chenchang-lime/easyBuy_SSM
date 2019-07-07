jq(function(){
	selectOrderInfoByOrderID();
});
function selectOrderInfoByOrderID(){
	if(jq("#loginName").val()!=null&&jq("#loginName").val()!=""){
		var orderID = jq("#orderID").val();
		jq.post("/easyBuy_SSM/orderCC/selectInfoByOrderID/"+orderID,null,function(data) {
			console.log("result-->"+data.result);
			if (data.result == "ok") {
				console.log(data.detailList);
				console.log(data.proList);
				var html = "";
				var totalProPrice = 0;
				jq.each(data.detailList,function(i,info){
					var thiPro; 
					jq.each(data.proList,function(j,pro){
						if(pro.id==info.productId){
							thiPro = pro;
						}
					});
					var pType = "默认";
					if(thiPro.proType!=null&&thiPro.proType!=""){
						pType = thiPro.proType;
					}
					var xiaoji = thiPro.price*info.quantity;
					totalProPrice+=xiaoji;
					html+="<tr>" +
					"<td>" +
					"<div class='c_s_img'>" +
					"<img src='/easyBuy_SSM/images/"+thiPro.fileName+"' width='73' height='73' />" +
					"</div>" +thiPro.name+
					"</td>" +
					"<td align='center'>"+pType+"</td>" +
					"<td align='center'>"+info.quantity+"</td>" +
					"<td align='center'>￥"+saveDecimal2(thiPro.price)+"</td>" +
					"<td align='center' style='color: #ff4e00;'>￥"+saveDecimal2(xiaoji)+"</td>" +
					"</tr>";
				});
				jq("#prosInOrder").html(html);
				jq("#totalProPrice").html("￥"+saveDecimal2(totalProPrice));
			} else{
				alert("系统错误！");
			}
		}, "json");
	}else{
		location.href = "/easyBuy_SSM/page/login";
	}
}

function finishOrder(){
	var url = "/easyBuy_SSM/orderCC/finishOrder/"+jq("#serialNumber").val();
	location.href=url;
}
