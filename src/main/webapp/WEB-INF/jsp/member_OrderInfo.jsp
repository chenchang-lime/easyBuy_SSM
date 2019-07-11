<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/menu.js"></script>    
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/select.js"></script>
<title>【转转】商城-订单详情</title>
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
                	<a href="/easyBuy_SSM/page/member_MyLovePro">收藏夹</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="/easyBuy_SSM/page/member_MyLovePro">我的收藏夹</a></li>
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
        <div class="i_car">
            <div class="car_t" id="shouMyCart">购物车 [ <span class="myCartNum">0</span> ]</div>
            <div class="car_bg">
                <!--Begin 购物车未登录 Begin-->
                <div class="un_login" id="noLoginMyCart">还未登录！<a href="${pageContext.request.contextPath}/page/login" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
                <!--End 购物车未登录 End-->
                <!--Begin 购物车已登录 Begin-->
                <ul class="cars" id="isLoginMycart1">
                </ul>
                <div class="price_sum" id="isLoginMycart2">共计&nbsp; <font color="#ff4e00"></font><span class="totalPrice">0</span></div>
                <div class="price_a" id="isLoginMycart3"><a href="/easyBuy_SSM/page/buyCar">去购物车结算</a></div>
                <!--End 购物车已登录 End-->
            </div>
        </div>
    </div>
</div>
<!--End Header End--> 

<!--End Menu End--> 
<div class="i_bg">  
    <!--Begin 第二步：确认订单信息 Begin -->
    <div class="content mar_20">
    	<div class="two_bg">
        	<div class="two_t">
            	<span class="fr"></span>商品列表
            </div>
            <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
              <tr>
                <td class="car_th" width="550">商品名称</td>
                <td class="car_th" width="140">属性</td>
                <td class="car_th" width="150">购买数量</td>
                <td class="car_th" width="130">单价</td>
                <td class="car_th" width="140">小计</td>
              </tr>
              <tbody id="prosInOrder">
              </tbody>
              <tr>
                <td colspan="5" align="right" style="font-family:'Microsoft YaHei';">
                    商品总价：<font color="#ff4e00" id="totalProPrice">￥0.00</font>元 
                </td>
              </tr>
            </table>
            
            <div class="two_t">
            	<span class="fr"></span>收货人信息
            </div>
            <table border="0" class="peo_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
              <tr>
                <td class="p_td" width="160">收件人</td>
                <td width="395" id="userName">${account.userName}</td>
                <td class="p_td" width="160">电子邮件</td>
                <td width="395" id="email">${account.email}</td>
              </tr>
              <tr>
                <td class="p_td">详细地址</td>
                <td id="address">${thisOrder.userAddress}</td>
                <td class="p_td">手机</td>
                <td id="mobile">${account.mobile}</td>
              </tr>
              <tr>
                <td class="p_td">快递</td>
                <td id="address">
                	<c:if test="${thisOrder.express==1}">顺丰快递</c:if>
                	<c:if test="${thisOrder.express==2}">申通快递</c:if>
                	<c:if test="${thisOrder.express==3}">邮政快递</c:if>
                </td>
                <td class="p_td">包装</td>
                <td id="mobile">
                	<c:if test="${thisOrder.packing==0}">无包装</c:if>
                	<c:if test="${thisOrder.packing==1}">精品包装</c:if>
                </td>
              </tr>
              <tr>
                <td class="p_td">留言</td>
                <td id="address">
                	<c:if test="${thisOrder.remarks==''}">无</c:if>
                	<c:if test="${thisOrder.remarks!=''}">${thisOrder.remarks}</c:if>
                </td>
                <td class="p_td">缺货处理</td>
                <td id="mobile">
	                <c:if test="${thisOrder.shortage==1}">等待所有商品备齐后再发</c:if>
	                <c:if test="${thisOrder.shortage==2}">取消订单</c:if>
	                <c:if test="${thisOrder.shortage==3}">与店主协商</c:if>
                </td>
              </tr>
              <tr>
                <td class="p_td">支付方式</td>
                <td id="address">
                	<c:if test="${thisOrder.paymentMethod==1}">余额</c:if>
                	<c:if test="${thisOrder.paymentMethod==2}">支付宝</c:if>
                	<c:if test="${thisOrder.paymentMethod==3}">花呗</c:if>
                	<c:if test="${thisOrder.paymentMethod==4}">储蓄卡</c:if>
                	<c:if test="${thisOrder.paymentMethod==5}">信用卡</c:if>
                	<c:if test="${thisOrder.paymentMethod==6}">货到付款</c:if>
                </td>
                <td class="p_td">快递单号</td>
                <td id="mobile">
                	<c:if test="${thisOrder.status==3||thisOrder.status==4}">${thisOrder.courierNumber}</c:if>
                	<c:if test="${thisOrder.status!=3&&thisOrder.status!=4}">暂无</c:if>
                </td>
              </tr>
            </table>
            <table border="0" style="width:900px; margin-top:0px;" cellspacing="0" cellpadding="0">
              <tr height="70">
                <td align="right">
                	<b style="font-size:14px;">订单总金额：<span style="font-size:22px; color:#ff4e00;" id="orderTotalMoneyText">￥${thisOrder.cost}</span>元</b>
                </td>
              </tr>
              <tr height="70">
                <td align="right">
                	<!-- 确认收货 -->
                	<c:if test="${thisOrder.status==3}">
		                <a href="javascript:void(0)" id="finishOrder" onclick="finishOrder()">
		                	<img src="${pageContext.request.contextPath}/images/btn_sure1.gif" />
		                </a>
	                </c:if>
	                <!-- 返回订单中心 -->
	                <c:if test="${thisOrder.status==0||thisOrder.status==2||thisOrder.status==4}">
		                <span class="m_num fr" style="margin-top:15px;">
		                	<a href="/easyBuy_SSM/page/member_UserOrder">返回</a>
		                </span>
	                </c:if>
	                <!-- 去付款 -->
	                <c:if test="${thisOrder.status==1}">
		                <a href="/easyBuy_SSM/orderCC/toPayOrder/${thisOrder.id}" >
			                <div id="payOrder" class="btn_u" style="margin:0 auto; padding:0 20px; width:120px;" align="right">
		                		立即支付
		                	</div>
	                	</a>
                	</c:if>
               </td>
              </tr>
            </table>
        </div>
    </div>
	<!--End 第二步：确认订单信息 End-->
    
    
    <!--Begin Footer Begin -->
    <div class="b_btm_bg bg_color">
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


    
<input type="hidden" id="loginName" value="${account.loginName}" />
<input type="hidden" id="orderID" value="${thisOrder.id}" />
<input type="hidden" id="serialNumber" value="${thisOrder.serialNumber}" />
<input type="hidden" id="loginName" value="${account.loginName}" />
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/logout.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/util.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectTopMyCart.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/orderInfo.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/logout.js"></script>
</body>
</html>
