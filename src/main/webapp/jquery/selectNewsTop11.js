selectNewsTop11();
function selectNewsTop11(){
	jq.post("/easyBuy_SSM/new/selectNewsTop5",null,function(data){
		console.log(data);
		var html = "";
		jq.each(data.list,function(index,obj){
			html+="<li><span>[特惠 ]</span><a href='/easyBuy_SSM/new/selectNewsByID/"+obj.id+"'>"+obj.title+"</a></li>";
		});
		jq("#lxNews").html(html);
	},"json");
}