<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/menu.js"></script>    
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/n_nav.js"></script>   
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/select.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/num.js">
    	var jq = jQuery.noConflict();
    </script>     
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
<title>【转转】商城-订单确认</title>
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
<div class="top">
    <div class="logo"><a href="${pageContext.request.contextPath}/page/index"><img src="${pageContext.request.contextPath}/images/logo.png" /></a></div>
    <div class="search">
    	<form method="post" action="${pageContext.request.contextPath}/pro/selectProLikeName">
        	<input type="text" value="" name="name" id="likeName" class="s_ipt" />
            <input type="submit" value="搜索" class="s_btn" />
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
        	<li><a href="${pageContext.request.contextPath}/page/index">首页</a></li>
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
<!--End Menu End--> 
<div class="i_bg">  
    <div class="content mar_20">
    	<img src="${pageContext.request.contextPath}/images/img2.jpg" />        
    </div>
    
    <!--Begin 第二步：确认订单信息 Begin -->
    <div class="content mar_20">
    	<div class="two_bg">
        	<div class="two_t">
            	<span class="fr"><a href="#">修改</a></span>商品列表
            </div>
            <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
              <tr>
                <td class="car_th" width="550">商品名称</td>
                <td class="car_th" width="140">属性</td>
                <td class="car_th" width="150">购买数量</td>
                <td class="car_th" width="130">单价</td>
                <td class="car_th" width="140">小计</td>
              </tr>
              <tbody id="buyCar2">
              </tbody>
              <tr>
                <td colspan="5" align="right" style="font-family:'Microsoft YaHei';">
                    商品总价：<font color="#ff4e00" class="totalPrice">￥0.00</font>元 
                </td>
              </tr>
            </table>
            
            <div class="two_t">
            	<span class="fr"><a href="#">修改</a></span>收货人信息
            </div>
            <table border="0" class="peo_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
              <tr>
                <td class="p_td" width="160">收件人</td>
                <td width="395" id="userName">未知</td>
                <td class="p_td" width="160">电子邮件</td>
                <td width="395" id="email">未知</td>
              </tr>
              <tr>
                <td class="p_td">详细地址</td>
                <td id="address">未知</td>
                <td class="p_td">手机</td>
                <td id="mobile">未知</td>
              </tr>
            </table>
            
            <div class="two_t">
            	配送方式
            </div>
<form id="orderForm" method="post">
            <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
              <tr>
                <td class="car_th" width="80"></td>
                <td class="car_th" width="200">名称</td>
                <td class="car_th" width="370">订购描述</td>
                <td class="car_th" width="150">费用</td>
              </tr>
              <tr>
              	<td align="center"><input class="checkbox1" type="checkbox" name="express" value="1" /></td>
                <td align="center" style="font-size:14px;"><b>顺丰快递</b></td>
                <td align="center">顺丰次日达，空运</td>
                <td align="center">￥20.00</td>
              </tr>
              <tr>
              	<td align="center"><input class="checkbox1" type="checkbox" name="express" value="2" checked="checked" /></td>
                <td align="center" style="font-size:14px;"><b>申通快递</b></td>
                <td align="center">江、浙、沪地区首重为8元/KG，其他地区10元/KG，续重均为5元/KG， 云南地区为15元</td>
                <td align="center">￥10.00</td>
              </tr>
              <tr>
              	<td align="center"><input class="checkbox1" type="checkbox" name="express" value="3" name="ch" /></td>
                <td align="center" style="font-size:14px;"><b>邮局平邮</b></td>
                <td align="center">运费固定</td>
                <td align="center">￥8.00</td>
              </tr>
            </table> 
            
            <div class="two_t">
            	商品包装
            </div>
            <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
              <tr>
                <td class="car_th" width="80"></td>
                <td class="car_th" width="490">名称</td>
                <td class="car_th" width="180">费用</td>
              </tr>
              <tr>
              	<td align="center"><input class="checkbox2" type="checkbox" name="packing" value="0" checked="checked" /></td>
                <td align="center"><b style="font-size:14px;">不要包装</b></td>
                <td align="center">￥0.00</td>
              </tr>
              <tr>
              	<td align="center"><input class="checkbox2" type="checkbox" name="packing" value="1" /></td>
                <td align="center"><b style="font-size:14px;">精品包装</b></td>
                <td align="center">￥15.00</td>
              </tr>
            </table> 
            
            <div class="two_t">
            	其他信息
            </div>
            <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
              <tr valign="top">
                <td align="right" style="padding-right:0;"><b style="font-size:14px;">订单附言：</b></td>
                <td style="padding-left:0;"><textarea class="add_txt" name="remarks" style="width:860px; height:50px;"></textarea></td>
              </tr>
              <tr>
              	<td align="right" style="padding-right:0;"><b style="font-size:14px;">缺货处理：</b></td>
                <td>
                	<label class="r_rad"><input class="checkbox3" type="checkbox" name="shortage" value="1" checked="checked" /></label><label class="r_txt" style="margin-right:50px;">等待所有商品备齐后再发</label>
                    <label class="r_rad"><input class="checkbox3" type="checkbox" name="shortage" value="2" /></label><label class="r_txt" style="margin-right:50px;">取消订单</label>
                    <label class="r_rad"><input class="checkbox3" type="checkbox" name="shortage" value="3" /></label><label class="r_txt" style="margin-right:50px;">与店主协商</label>
                </td>
              </tr>
            </table>
            </div>
            <table border="0" style="width:900px; margin-top:0px;" cellspacing="0" cellpadding="0">
              <tr>
                <td align="right">
                    商品总价: <font color="#ff4e00" class="totalPrice">￥0.00</font>  + 配送费用: <font color="#ff4e00" id="expressPrice">￥10.00</font>
                <span id="packing" style="display:none;">  + 精品包装: <font color='#ff4e00'>￥15.00</font></span>
                </td>
              </tr>
              <tr height="70">
                <td align="right">
                	<input type="hidden" id="userAddress" name="userAddress" value="未知" />
                	<input type="hidden" id="totalPriceNum" value="" />
                	<input type="hidden" id="orderTotalMoney" name="cost" value="0" />
                	<b style="font-size:14px;">应付款金额：<span style="font-size:22px; color:#ff4e00;" id="orderTotalMoneyText">￥0.00</span>元</b>
                </td>
              </tr>
              <tr height="70">
                <td align="right">
	                <a href="javascript:void(0)" onclick="addOrder()">
	                	<img src="${pageContext.request.contextPath}/images/btn_sure.gif" />
	                </a>
               </td>
              </tr>
            </table>
</form>
            
        	
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
    
    <div id="fade" class="black_overlay"></div>
    <!--Begin 弹出层-购物车没有商品 Begin-->
    <div id="NoProDiv" class="white_content">             
        <div class="white_d">
            <div class="notice_t">
                <span class="fr" style="margin-top:10px; cursor:pointer;"></span>
            </div>
            <div class="notice_c">
                <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
                  <tr valign="top">
                    <td>购物车空空如也！是否去主页挑一些呢~~~</td>
                  </tr>
                  <tr height="50" valign="bottom">
                    <td>
	                    <a href="/easyBuy_SSM/page/index" onclick="CloseDiv('NoProDiv','fade')" class="b_sure">确定</a>
	                    <a href="javascript:void(0);" onclick="CloseDiv('NoProDiv','fade')" class="b_buy">取消</a>
                    </td>
                  </tr>
                </table>
            </div>
        </div>
    </div>    
    <!--End 弹出层-购物车没有商品 End-->
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
</div>
<input type="hidden" id="loginName" value="${account.loginName}" />
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/isLogin.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/util.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/logout.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectType.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/addOrder.js"></script>
</body>
</html>
