<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/menu.js"></script>    
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/select.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/jquery/productTypeList.js"></script>    
    
<title>【转转】商城-分类管理</title>
</head>
<body>  
<!--Begin Header Begin-->
<div class="soubg">
	<div class="sou">
    	<!--Begin 所在收货地区 Begin-->
    	<span class="s_city_b">
        	<span class="fl">送货至：</span>
            <span class="s_city">
            	<span>四川</span>
                <div class="s_city_bg">
                	<div class="s_city_t"></div>
                    <div class="s_city_c">
                    	<h2>请选择所在的收货地区</h2>
                        <table border="0" class="c_tab" style="width:235px; margin-top:10px;" cellspacing="0" cellpadding="0">
                          <tr>
                            <th>A</th>
                            <td class="c_h"><span>安徽</span><span>澳门</span></td>
                          </tr>
                          <tr>
                            <th>B</th>
                            <td class="c_h"><span>北京</span></td>
                          </tr>
                          <tr>
                            <th>C</th>
                            <td class="c_h"><span>重庆</span></td>
                          </tr>
                          <tr>
                            <th>F</th>
                            <td class="c_h"><span>福建</span></td>
                          </tr>
                          <tr>
                            <th>G</th>
                            <td class="c_h"><span>广东</span><span>广西</span><span>贵州</span><span>甘肃</span></td>
                          </tr>
                          <tr>
                            <th>H</th>
                            <td class="c_h"><span>河北</span><span>河南</span><span>黑龙江</span><span>海南</span><span>湖北</span><span>湖南</span></td>
                          </tr>
                          <tr>
                            <th>J</th>
                            <td class="c_h"><span>江苏</span><span>吉林</span><span>江西</span></td>
                          </tr>
                          <tr>
                            <th>L</th>
                            <td class="c_h"><span>辽宁</span></td>
                          </tr>
                          <tr>
                            <th>N</th>
                            <td class="c_h"><span>内蒙古</span><span>宁夏</span></td>
                          </tr>
                          <tr>
                            <th>Q</th>
                            <td class="c_h"><span>青海</span></td>
                          </tr>
                          <tr>
                            <th>S</th>
                            <td class="c_h"><span>上海</span><span>山东</span><span>山西</span><span class="c_check">四川</span><span>陕西</span></td>
                          </tr>
                          <tr>
                            <th>T</th>
                            <td class="c_h"><span>台湾</span><span>天津</span></td>
                          </tr>
                          <tr>
                            <th>X</th>
                            <td class="c_h"><span>西藏</span><span>香港</span><span>新疆</span></td>
                          </tr>
                          <tr>
                            <th>Y</th>
                            <td class="c_h"><span>云南</span></td>
                          </tr>
                          <tr>
                            <th>Z</th>
                            <td class="c_h"><span>浙江</span></td>
                          </tr>
                        </table>
                    </div>
                </div>
            </span>
        </span>
        <!--End 所在收货地区 End-->
        <!----------------------------------- 头部登录注销-------------------------------- -->
       <span class="fr">
        	<span class="fl">
        	<c:if test="${! empty account}">
        		<input type="hidden" id="isLogin" value="1" />
				欢迎<span style="color:#ff4e00;"><a href="/easyBuy_SSM/page/member_User">&nbsp;[${account.userName}]&nbsp;</a></span>登录&nbsp;
				<a href="javascript:void(0)" style="color:#ff4e00;" id="logout">[注销]</a>
				&nbsp;|&nbsp;<a href="/easyBuy_SSM/page/member_UserOrder">我的订单</a>&nbsp;|
			</c:if>
			<c:if test="${empty account}">
				<input type="hidden" id="isLogin" value="0" />
				<span class="fl">
					你好，请<a href="${pageContext.request.contextPath}/page/login">登录</a>&nbsp; 
					<a href="${pageContext.request.contextPath}/page/regist" style="color:#ff4e00;">免费注册</a>
				</span>
			</c:if>
        </span>
        <!----------------------------------- 头部登录注销-------------------------------- -->
        <span class="ss">
            	<div class="ss_list">
                	<a href="/easyBuy_SSM/page/member_MyLovePro">收藏夹</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="/easyBuy_SSM/page/member_MyLovePro">我的收藏夹</a></li>
                            </ul>
                        </div>
                    </div>     
                </div>
                <div class="ss_list">
                	<a href="#">客户服务</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                            </ul>
                        </div>
                    </div>    
                </div>
                <div class="ss_list">
                	<a href="#">网站导航</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">网站导航</a></li>
                                <li><a href="#">网站导航</a></li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </span>
            <span class="fl">|&nbsp;关注我们：</span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a><a href="#" class="sh2">微信</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="${pageContext.request.contextPath}/images/s_tel.png" align="absmiddle" /></a></span>
        </span>
    </div>
</div>
<div class="m_top_bg">
    <div class="top">
        <div class="m_logo"><a href="${pageContext.request.contextPath}/page/index"><img src="${pageContext.request.contextPath}/images/logo1.png" /></a></div>
        <div class="m_search">
            <form method="post" action="${pageContext.request.contextPath}/pro/selectProLikeName">
	        	<input type="text" value="" name="name" id="likeName" class="m_ipt" />
	            <input type="submit" value="搜索" class="m_btn" />
	        </form>                      
            <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
        </div>
    </div>
</div>
<!--End Header End--> 
<div class="i_bg bg_color">
    <!--Begin 用户中心 Begin -->
	<div class="m_content">
   		<div class="m_left">
	     <!-- -----------------------------订单管理员----------------------------- -->
	        <c:if test="${account.type==2}">
	            <div class="left_m">
	            	<div class="left_m_t t_bg1">订单中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_Order">订单管理</a></li>
	                </ul>
	            </div>
	        </c:if>
        <!-- -----------------------------订单管理员----------------------------- -->
	     <!-- -----------------------------会员理员----------------------------- -->
	        <c:if test="${account.type==3}">
	            <div class="left_m">
	            	<div class="left_m_t t_bg2">会员中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_Member_List">会员管理</a></li>
	                </ul>
	            </div>
	        </c:if>
        <!-- -----------------------------会员管理员----------------------------- -->
	     <!-- -----------------------------产品管理员----------------------------- -->
	        <c:if test="${account.type==4}">
	            <div class="left_m">
	            	<div class="left_m_t t_bg3">产品中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_productTypeList">分类管理</a></li>
	                    <li><a href="/easyBuy_SSM/page/Member_productList">商品管理</a></li>
	                    <li><a href="/easyBuy_SSM/page/Member_productInsert">商品上架</a></li>
	                </ul>
	            </div>
	        </c:if>
        <!-- -----------------------------产品管理员----------------------------- -->
	     <!-- -----------------------------新闻管理员----------------------------- -->
	        <c:if test="${account.type==5}">
	            <div class="left_m">
	            	<div class="left_m_t t_bg4">新闻中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_Packet">新闻管理</a></li>
	                </ul>
	            </div>
	        </c:if>
        <!-- -----------------------------新闻管理员----------------------------- -->
        
	        <!-- -----------------------------最高权限管理员----------------------------- -->
	        <c:if test="${account.type==1}">
	            <div class="left_m">
	            	<div class="left_m_t t_bg1">订单中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_Order">订单管理</a></li>
	                </ul>
	            </div>
	            <div class="left_m">
	            	<div class="left_m_t t_bg2">会员中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_Member_List">会员管理</a></li>
	                </ul>
	            </div>
	            <div class="left_m">
	            	<div class="left_m_t t_bg3">产品中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_productTypeList">分类管理</a></li>
	                    <li><a href="/easyBuy_SSM/page/Member_productList">商品管理</a></li>
	                    <li><a href="/easyBuy_SSM/page/Member_productInsert">商品上架</a></li>
	                </ul>
	            </div>
	            <div class="left_m">
	            	<div class="left_m_t t_bg4">新闻中心</div>
	                <ul>
	                    <li><a href="/easyBuy_SSM/page/Member_Packet">新闻管理</a></li>
	                </ul>
	            </div>
	        </c:if>
        </div>
        <!-- -----------------------------最高权限管理员----------------------------- -->
        
        
       <!-- 修改内容  -->
        
	<div class="m_right">
            
            <div class="mem_tit">
            	<span class="fr" style="font-size:12px; color:#55555; font-family:'宋体'; margin-top:5px;">共发现<span  id="count" style=color:red></span>个类别</span>分类管理
            </div>
      	<div id="showList">
           		<div>&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="添加二级分类" id="typeinsert2"/>&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="添加三级分类" id="typeinsert3"/></div>	
           		<table border="0" class="order_tab" style="width:80%;" cellspacing="0" cellpadding="0" id="table">
              <thead>
	              <tr>                                                                                                                                       
	                <td align="center" width="200px">分类名称</td>
	                <td align="center" width="200px">分类级别</td>
	                <td align="center" width="200px">父级分类</td>
	               
	              </tr>
              </thead>
              <tbody id="tb">
              
              </tbody>
            </table>
			<p align="right" style="padding:100px">
				<a href="javascript:void(0)" id="before" style="font-size:20px">上一页</a>
				<span id="currPage" style="font-size:20px"></span>
				<span>|</span>
				<span id="totalPage" style="font-size:20px"></span>
				<a href="javascript:void(0)" id="after" style="font-size:20px">下一页</a>
			</p>
		</div>	
		<div id="showInsert2">
			<form id="form2" method="post">
				<table border="1" class="order_tab" style="width:60%;" cellspacing="0" cellpadding="0">
	              	<tr>
	              		<td align="right" width="40%">一级分类</td>
	              		<td width="60%">
	              			<input type="hidden" id="pid" name="parentId"/>
	              			<input type="hidden" value="2" name="type"/>
	              			<select class="firstType" name="categoryLevel1Id" id="typeLevel2"><option value='-1'>请选择</option></select>
	              		</td>
	              		
	              	</tr>
	              	<tr>
	              		<td align="right" width="40%">请输入新增二级分类的名称：</td>
	              		<td width="60%"><input type="text" name="name" id="insertSecType"/></td>
	              	</tr>
	              	<tr>
	              		<td align="center" colspan=2>
	              		<input type="button" id="insert2" value="确认添加"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	              		<a href="${pageContext.request.contextPath}/page/Member_productTypeList">返回</a>
	              		</td>
	              	</tr>
	              	
				</table>
			</form>
		</div>
		<div id="showInsert3">
			<form id="form3">
				<table border="1" class="order_tab" style="width:60%;" cellspacing="0" cellpadding="0">
	              	<tr>
	              		<td align="right" width="40%">一级分类</td>
	              		<td width="60%"><select class="firstType" name="categoryLevel1Id" id="typeLevel3"><option value='-1'>请选择</option></select></td>
	              	</tr>
	              	<tr>
	              		<td align="right" width="40%">二级分类</td>
	              		<td width="60%">
	              			<select id="secendType" name="categoryLevel2Id"><option value='-1'>请选择</option></select>
	              			<input type="hidden" id="pid3" name="parentId"/>
	              			<input type="hidden" value="3" name="type"/>
	              			</td>
	              	</tr>
	              	<tr>
	              		<td align="right" width="40%">请输入新增三级分类的名称：</td>
	              		<td width="60%"><input type="text" name="name" id="insertThdType"/></td>
	              	</tr>
	              	<tr>
	              		<td align="right" width="40%">请上传三级分类的图片：</td>
	              		<td width="60%"><input type="file" name="file"/>
	              						<input type="hidden" name="iconClass"/>
										<img alt="" src="" width="100px" height="100px" id="image"/>
						</td>
	              	</tr>
	              	<tr>
	              		<td align="center" colspan=2>
	              		<input type="button" id="insert3" value="确认添加"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	              		<a href="${pageContext.request.contextPath}/page/Member_productTypeList">返回</a>
	              		</td>
	              	</tr>
				</table>
			</form>
		</div>
			
    </div>
	<!--End 用户中心 End--> 
    <!--Begin Footer Begin -->
    <div class="b_btm_bg b_btm_c">
        <div class="b_btm">
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="${pageContext.request.contextPath}/images/b1.png" width="62" height="62" /></td>
                <td><h2>正品保障</h2>正品行货  放心购买</td>
              </tr>
            </table>
			<table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="${pageContext.request.contextPath}/images/b2.png" width="62" height="62" /></td>
                <td><h2>满38包邮</h2>满38包邮 免运费</td>
              </tr>
            </table>
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="${pageContext.request.contextPath}/images/b3.png" width="62" height="62" /></td>
                <td><h2>天天低价</h2>天天低价 畅选无忧</td>
              </tr>
            </table>
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="${pageContext.request.contextPath}/images/b4.png" width="62" height="62" /></td>
                <td><h2>准时送达</h2>收货时间由你做主</td>
              </tr>
            </table>
        </div>
    </div>
    <div class="b_nav">
    	<dl>                                                                                            
        	<dt><a href="#">新手上路</a></dt>
            <dd><a href="#">售后流程</a></dd>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">订购方式</a></dd>
            <dd><a href="#">隐私声明</a></dd>
            <dd><a href="#">推荐分享说明</a></dd>
        </dl>
        <dl>
        	<dt><a href="#">配送与支付</a></dt>
            <dd><a href="#">货到付款区域</a></dd>
            <dd><a href="#">配送支付查询</a></dd>
            <dd><a href="#">支付方式说明</a></dd>
        </dl>
        <dl>
        	<dt><a href="#">会员中心</a></dt>
            <dd><a href="#">资金管理</a></dd>
            <dd><a href="#">我的收藏</a></dd>
            <dd><a href="#">我的订单</a></dd>
        </dl>
        <dl>
        	<dt><a href="#">服务保证</a></dt>
            <dd><a href="#">退换货原则</a></dd>
            <dd><a href="#">售后服务保证</a></dd>
            <dd><a href="#">产品质量保证</a></dd>
        </dl>
        <dl>
        	<dt><a href="#">联系我们</a></dt>
            <dd><a href="#">网站故障报告</a></dd>
            <dd><a href="#">购物咨询</a></dd>
            <dd><a href="#">投诉与建议</a></dd>
        </dl>
        <div class="b_tel_bg">
        	<a href="#" class="b_sh1">新浪微博</a>            
        	<a href="#" class="b_sh2">腾讯微博</a>
            <p>
            服务热线：<br />
            <span>400-123-4567</span>
            </p>
        </div>
        <div class="b_er">
            <div class="b_er_c"><img src="${pageContext.request.contextPath}/images/er.gif" width="118" height="118" /></div>
            <img src="${pageContext.request.contextPath}/images/ss.png" />
        </div>
    </div>    
    <div class="btmbg">
		<div class="btm">
        	备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
            <img src="${pageContext.request.contextPath}/images/b_1.gif" width="98" height="33" /><img src="${pageContext.request.contextPath}/images/b_2.gif" width="98" height="33" /><img src="${pageContext.request.contextPath}/images/b_3.gif" width="98" height="33" /><img src="${pageContext.request.contextPath}/images/b_4.gif" width="98" height="33" /><img src="${pageContext.request.contextPath}/images/b_5.gif" width="98" height="33" /><img src="${pageContext.request.contextPath}/images/b_6.gif" width="98" height="33" />
        </div>    	
    </div>
    <!--End Footer End -->   
        <!--Begin 弹出层-代替alert弹框 Begin-->
    <div id="fade" class="black_overlay"></div>
    <div id="showMsgDiv" class="white_content">             
        <div class="white_d">
            <div class="notice_t">
                <span class="fr" style="margin-top:10px; cursor:pointer;"></span>
            </div>
            <div class="notice_c">
                <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
                  <tr valign="top">
                    <td id="msg" align="center">没登陆！请登录后再查看购物车哟~~~</td>
                  </tr>
                  <tr height="50" valign="bottom">
                    <td align="center">
	                    <a href="javascript:void(0);" onclick="CloseDiv('showMsgDiv','fade')" class="b_sure">确定</a>
	                    <a href="javascript:void(0);" onclick="CloseDiv('showMsgDiv','fade')" class="b_buy">取消</a>
                    </td>
                  </tr>
                </table>
            </div>
        </div>
    </div>    
    <!--End 弹出层-代替alert弹框  End-->   
</div>
<input type="hidden" id="loginName" value="${account.loginName}" />
<input type="hidden" id="userType" value="${account.type}" />
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/isLoginType4.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/logout.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
</body>
</html>
