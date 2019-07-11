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
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/lrscroll_1.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/n_nav.js"></script>
<title>【转转】商城-类别查询商品</title>
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
    	<form action="" id="myForm">
			<input type="hidden" id="type1" name="categoryLevel1Id" value="${type1}"/>
			<input type="hidden" id="type2" name="categoryLevel2Id" value="${type2}"/>
			<input type="hidden" id="type3" name="categoryLevel3Id" value="${type3}"/>
			<input type="hidden" id="thisMinPrice" value="0"/>
			<input type="hidden" id="thisMaxPrice" value="0"/>
			<input type="hidden" id="orderBy" value=""/>
        	<input type="text" value="${ControllerToPageLikeName}" name="name" id="likeName" class="s_ipt" />
            <input type="button" value="搜索" id="selectLike" class="s_btn" />
		</form>
		<input type="hidden" id="thisType1Name" value="${type1Name}"/>
		<input type="hidden" id="thisType2Name" value="${type2Name}"/>
		<input type="hidden" id="thisType3Name" value="${type3Name}"/>
<!--         <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span> -->
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
    	<div class="nav" id="nav_t">
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
	<div class="postion">
    	<span class="fl">
    	全部 > <span id="type1Name">
    			<c:if test="${type3==0&&type2!=0}">${type1Name} > </c:if>
    			<c:if test="${type3!=0&&type2!=0&&type1!=0}">${type1Name} > </c:if>
    		</span>
    		<span id="type2Name">
    		<c:if test="${type3!=0&&type2!=0}">${type2Name} > </c:if>
    		</span>
    	</span>
    	<span id="type3NameAll">
	    	<span class="n_ch">
		        <span class="fl">
		        	<font id="type3Name">
		        	<c:if test="${type3!=0}">
		        	${type3Name}
		        	</c:if>
		        	<c:if test="${type3==0&&type2!=0}">
		        	${type2Name}
		        	</c:if>
		        	<c:if test="${type3==0&&type2==0&&type1!=0}">
		        	${type1Name}
		        	</c:if>
		        	</font>
		        </span>
		        <a href='javascript:void(0);' onclick='delType()'><img src="${pageContext.request.contextPath}/images/s_close.gif" /></a>
		    </span>
	    </span>
    </div>
    <!--Begin 筛选条件 Begin-->
    <div class="content mar_10">
    	<table border="0" class="choice" style="width:100%; font-family:'宋体'; margin:0 auto;" cellspacing="0" cellpadding="0">
          <tr valign="top" id="pinpai">
            <td width="70">&nbsp; 品牌：</td>
            <td class="td_a">
            	<a href="#" id="thisPinPai" class="now"></a>
            </td>	
          </tr>
          <tr valign="top">
            <td>&nbsp; 价格：</td>                                                                                                       
            <td class="td_a">
	            <span id="price1"><a href="javascript:void(0);" onclick="selectProByPrice(1,0,0)" class="now">默认</a></span>
	            <span id="price2"><a href="javascript:void(0);" onclick="selectProByPrice(2,0,199)">0-199</a></span>
	            <span id="price3"><a href="javascript:void(0);" onclick="selectProByPrice(3,200,399)">200-399</a></span>
	            <span id="price4"><a href="javascript:void(0);" onclick="selectProByPrice(4,400,599)">400-599</a></span>
	            <span id="price5"><a href="javascript:void(0);" onclick="selectProByPrice(5,600,899)">600-899</a></span>
	            <span id="price6"><a href="javascript:void(0);" onclick="selectProByPrice(6,900,1299)">900-1299</a></span>
	            <span id="price7"><a href="javascript:void(0);" onclick="selectProByPrice(7,1300,1399)">1300-1399</a></span>
	           <span id="price8"> <a href="javascript:void(0);" onclick="selectProByPrice(8,1400,0)">1400以上</a></span>
            </td>
          </tr>                                              
        </table>                                                                                 
    </div>
    <!--End 筛选条件 End-->
    
    <div class="content mar_20">
    	<div class="l_history">
        	<div class="his_t">
            	<span class="fl">浏览历史</span>
<!--                 <span class="fr"><a href="#">清空</a></span> -->
            </div>
        	<ul id="myBrowse">
        	</ul>
        </div>
        <div class="l_list">
        	<div class="list_t">
            	<span class="fl list_or" id="orderByA">
                	<a href="javascript:void(0)" class="now" id="moren">默认</a>
                    <a href="javascript:void(0)" id="orderBySalesA">
                    	<span class="fl" id="orderBySales">销量</span>                        
                        <span class="i_up" id="orderBySalesMax">销量从低到高显示</span>
                        <span class="i_down" id="orderBySalesMin">销量从高到低显示</span>                                                     
                    </a>
                    <a href="javascript:void(0)" id="orderByPriceA">
                    	<span class="fl" id="orderByPrice">价格</span>                        
                        <span class="i_up" id="orderByPriceMax">价格从低到高显示</span>
                        <span class="i_down" id="orderByPriceMin">价格从高到低显示</span>     
                    </a>
<!--                     <a href="#">新品</a> -->
                </span>
                <span class="fr">共发现<span id="totalPro" style="color:#ff3600;font-size:16px;font-weight:bold;">0</span>件</span>
            </div>
            <!---------------------------------------------商品列表 --------------------------------------------->
            <div class="list_c">
            </div>
            <!--------------------------------------------商品列表end -------------------------------------------->
        </div>
    </div>
    
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
		<!--Begin 弹出层-没登陆 Begin-->
	<div id="fade" class="black_overlay"></div>
    <div id="NoLoginDiv" class="white_content">             
        <div class="white_d">
            <div class="notice_t">
                <span class="fr" style="margin-top:10px; cursor:pointer;"></span>
            </div>
            <div class="notice_c">
                <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
                  <tr valign="top">
                    <td>登录后才可以操作哦~~~~</td>
                  </tr>
                  <tr height="50" valign="bottom">
                    <td>
	                    <a href="/easyBuy_SSM/page/login" onclick="CloseDiv('NoLoginDiv','fade')" class="b_sure">确定</a>
	                    <a href="javascript:void(0);" onclick="CloseDiv('NoLoginDiv','fade')" class="b_buy">取消</a>
                    </td>
                  </tr>
                </table>
            </div>
        </div>
    </div>    
    <!--End 弹出层-购物车没登陆 End-->
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

<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/util.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/logout.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectTopMyCart.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectProByType.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/selectMyBrowse.js"></script>
</body>
</html>
