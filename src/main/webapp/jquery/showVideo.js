jq('.videolist').each(function(){ //遍历视频列表
    jq(this).hover(function(){ //鼠标移上来后显示播放按钮
        jq(this).find('.videoed').show();
    },function(){
        jq(this).find('.videoed').hide();
    });
    jq(this).click(function(){ //这个视频被点击后执行
    	var img = jq("#videoPreviewPic").val();//获取视频预览图
    	var video = jq("#videoUrl").val();//获取视频路径
    	var html = "";
    	html+="<video id='video' poster='"+img+"' style='width: 640px'" +
    			" src='/easyBuy_SSM/video/"+video+"' preload='auto' controls='controls' autoplay='autoplay'>" +
    		"</video>" +
    		"<img onClick='close1()' class='vclose' src='/easyBuy_SSM/images/gb.png' width='25' height='25'/>";
        jq('.videos').html(html);
        jq('.videos').show();
    });
});
 
//关闭视频
function closeVideo(){
    var v = document.getElementById('video');//获取视频节点
    jq('#videos').hide();//点击关闭按钮关闭暂停视频
    v.pause();
    jq('#videos').html();
}

//显示视频
jq(".showVideo").click(function(){
	var video = jq("#videoUrl").val();//获取视频路径
	if(video!=null&&video!=""){
		var html = "";
		html+="<video id='video' style='width: 640px' " +
		"src='/easyBuy_SSM/video/"+video+"' preload='auto' controls='controls' autoplay='autoplay'>" +
		"</video>" +
		"<img onClick='closeVideo()' class='vclose' src='/easyBuy_SSM/images/gb.png' width='25' height='25'/>";
		jq('#videos').html(html);
		jq('#videos').show();
	}else{
		jq('#msg').html("该商品暂未添加视频！");
		ShowDiv('errorDiv','fade');
	}
});
