<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" />
	<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/showVideo.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/menu.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/lrscroll_1.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/n_nav.js"></script>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/ShopShow.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/MagicZoom.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/MagicZoom.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/num.js">
		var jq = jQuery.noConflict();
	</script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/p_tab.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
<title>【转转】商城-我的订单</title>
</head>
<body>  
<!--Begin Header Begin-->
<div class="soubg">
	<div class="sou">
    	<!--Begin 所在收货地区 Begin-->
    	<span class="s_city_b">
        	<span class="fl">送货至：</span>
            <span class="s_city">
            	<span>湖北</span>
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
                            <td class="c_h"><span>河北</span><span>河南</span><span>黑龙江</span><span>海南</span><span class="c_check">湖北</span><span>湖南</span></td>
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
                            <td class="c_h"><span>上海</span><span>山东</span><span>山西</span><span>四川</span><span>陕西</span></td>
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
        	<span class="ss">
            	<div class="ss_list">
                	<a href="#">收藏夹</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">我的收藏夹</a></li>
                                <li><a href="#">我的收藏夹</a></li>
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
<!-- 顶部栏 -->
	<div class="top">
		<div class="logo">
			<a href="/easyBuy_SSM/page/index"><img src="${pageContext.request.contextPath}/images/logo.png" /></a>
		</div>
		<div class="search">
			<form method="post" action="${pageContext.request.contextPath}/pro/selectProLikeName">
	        	<input type="text" value="" name="name" id="likeName" class="s_ipt" />
	            <input type="submit" value="搜索" class="s_btn" />
	        </form>
			<span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a
				href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
		</div>
		<div class="i_car">
			<div class="car_t" id="shouMyCart">
				购物车 [ <span class="myCartNum">0</span> ]
			</div>
			<div class="car_bg">
				<!--Begin 购物车未登录 Begin-->
				<div class="un_login" id="noLoginMyCart">
					还未登录！<a href="/easyBuy_SSM/page/login" style="color: #ff4e00;">马上登录</a> 查看购物车！
				</div>
				<!--End 购物车未登录 End-->
				<!--Begin 购物车已登录 Begin-->
				<ul class="cars" id="isLoginMycart1">
				</ul>
				<div class="price_sum" id="isLoginMycart2">
					共计&nbsp; <font color="#ff4e00"></font><span class="totalPrice">0</span>
				</div>
				<div class="price_a" id="isLoginMycart3">
					<a href="/easyBuy_SSM/page/buyCar">去购物车结算</a>
				</div>
				<!--End 购物车已登录 End-->
			</div>
		</div>
	</div>
	<!--End Header End-->
	<!--Begin Menu Begin-->
	<div class="menu_bg">
		<div class="menu">
			<!--Begin 商品分类详情 Begin-->
			<div class="nav">
				<div class="nav_t">全部商品分类</div>
				<div class="leftNav none" id="leftNav"></div>
			</div>
			<!--End 商品分类详情 End-->
			<ul class="menu_r">
				<li><a href="/easyBuy_SSM/page/index">首页</a></li>
				<li><a href="/easyBuy_SSM/pro/selectProByType/548/0/0">美妆</a></li>
	            <li><a href="/easyBuy_SSM/pro/selectProByType/628/0/0">家居</a></li>
	            <li><a href="/easyBuy_SSM/pro/selectProByType/660/0/0">食品</a></li>
	            <li><a href="/easyBuy_SSM/pro/selectProByType/670/0/0">数码</a></li>
	            <li><a href="/easyBuy_SSM/pro/selectProByType/676/0/0">儿童</a></li>
	            <li><a href="/easyBuy_SSM/pro/selectProByType/681/0/0">箱包</a></li>
	            <li><a href="/easyBuy_SSM/pro/selectProByType/702/0/0">男装</a></li>
			</ul>
			<div class="m_ad">中秋送好礼！</div>
		</div>
	</div>
<!--End Header End--> 
<!--End Header End--> 
<div class="i_bg bg_color">
    <!--Begin 用户中心 Begin -->
	<div class="m_content">
   		<div class="m_left">
        	<!-- -----------------------------普通用户----------------------------- -->
   			<c:if test="${account.type==0}">
	        	<div class="left_n">个人中心</div>
	            <div class="left_m">
	            	<div class="left_m_t t_bg2">个人中心</div>
	                <ul>
	                	<li><a href="/easyBuy_SSM/page/member_User">个人信息</a></li>
	                	<li><a href="/easyBuy_SSM/page/member_UserOrder">我的订单</a></li>
	                	<li><a href="/easyBuy_SSM/page/member_MyLovePro">我的收藏</a></li>
	                    <li><a href="/easyBuy_SSM/page/member_Address">收货地址</a></li>
	                </ul>
	            </div>
	        </c:if>
	        <!-- -----------------------------普通用户----------------------------- -->
	        
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
        <!-- -----------------------------最高权限管理员----------------------------- -->
        </div>
        <div class="m_right">
            <p></p>
            <div class="mem_tit">
            	<span class="fr" style="font-size:12px; color:#55555; font-family:'宋体'; margin-top:5px;">
	            	共发现<span id="totalPro" style="color:#ff3600;font-size:16px;font-weight:bold;">0</span>件
            	</span>
            	我的收藏
            </div>
           	<table border="0" class="order_tab" style="width:930px;" cellspacing="0" cellpadding="0">
              <tr>                                                                                                                                       
                <td align="center" width="420">商品名称</td>
                <td align="center" width="180">价格</td>
                <td align="center" width="270">操作</td>
              </tr>
              <tbody id="myLoveProTB">
              </tbody>
            </table>
        </div>
    </div>
        
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
            <dd><a href="/easyBuy_SSM/page/member_UserOrder">我的订单</a></dd>
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
</div>
    <!--Begin 弹出层-加入购物车 Begin-->
		<div id="fade1" class="black_overlay"></div>
		<div id="MyDiv1" class="white_content">
			<div class="white_d">
				<div class="notice_t">
					<span class="fr" style="margin-top: 10px; cursor: pointer;"
						onclick="CloseDiv_1('MyDiv1','fade1')"><img
						src="${pageContext.request.contextPath}/images/close.gif" /></span>
				</div>
				<div class="notice_c">

					<table border="0" align="center" style="margin-top:;"
						cellspacing="0" cellpadding="0">
						<tr valign="top">
							<td width="40"><img src="${pageContext.request.contextPath}/images/suc.png" /></td>
							<td><span
								style="color: #3e3e3e; font-size: 18px; font-weight: bold;">宝贝已成功添加到购物车</span><br />
								购物车共有<span id="typeNum">1</span>种宝贝（<span class="myCartNum">1</span>件） &nbsp; &nbsp; 合计：<span class="totalPrice">0</span>元</td>
						</tr>
						<tr height="50" valign="bottom">
							<td>&nbsp;</td>
							<td>
								<a href="/easyBuy_SSM/page/buyCar" class="b_sure">去购物车结算</a>
								<a href="javascript:void(0);" onclick="CloseDiv_1('MyDiv1','fade1')" class="b_buy">继续购物</a>
							</td>
						</tr>
					</table>

				</div>
			</div>
		</div>
		<!--End 弹出层-加入购物车 End-->
		    <!--Begin 弹出层-error Begin-->
    <div id="errorDiv" class="white_content">             
        <div class="white_d">
            <div class="notice_t">
                <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="${pageContext.request.contextPath}/images/close.gif" /></span>
            </div>
            <div class="notice_c">
                <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
                  <tr valign="top">
                    <td>系统繁忙，请稍后再试！！！</td>
                  </tr>
                  <tr height="50" valign="bottom">
                    <td>
	                    <a href="javascript:void(0);" onclick="CloseDiv('errorDiv','fade')" class="b_sure">确定</a>
	                    <a href="javascript:void(0);" onclick="CloseDiv('errorDiv','fade')" class="b_buy">取消</a>
                    </td>
                  </tr>
                </table>
            </div>
        </div>
    </div>    
    <!--End 弹出层-error End-->
<input type="hidden" id="loginName" value="${account.loginName}" />
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/isLogin.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/logout.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/util.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectType.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectTopMyCart.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectMyLovePro.js"></script>
</body>
</html>
