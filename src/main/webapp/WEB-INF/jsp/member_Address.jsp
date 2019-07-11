<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/menu.js"></script>    
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/select.js"></script>
<title>【转转】商城-个人中心-收货地址</title>
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
<div class="m_top_bg">
    <div class="top">
        <div class="m_logo"><a href="Index.html"><img src="${pageContext.request.contextPath}/images/logo1.png" /></a></div>
        <div class="m_search">
            <form>
                <input type="text" value="" class="m_ipt" />
                <input type="submit" value="搜索" class="m_btn" />
            </form>                      
            <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
        </div>
        <div class="i_car">
            <div class="car_t">购物车 [ <span>3</span> ]</div>
            <div class="car_bg">
                <!--Begin 购物车未登录 Begin-->
                <div class="un_login">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
                <!--End 购物车未登录 End-->
                <!--Begin 购物车已登录 Begin-->
                <ul class="cars">
                    <li>
                        <div class="img"><a href="#"><img src="${pageContext.request.contextPath}/images/car1.jpg" width="58" height="58" /></a></div>
                        <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
                        <div class="price"><font color="#ff4e00">￥399</font> X1</div>
                    </li>
                    <li>
                        <div class="img"><a href="#"><img src="${pageContext.request.contextPath}/images/car2.jpg" width="58" height="58" /></a></div>
                        <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                        <div class="price"><font color="#ff4e00">￥399</font> X1</div>
                    </li>
                    <li>
                        <div class="img"><a href="#"><img src="${pageContext.request.contextPath}/images/car2.jpg" width="58" height="58" /></a></div>
                        <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                        <div class="price"><font color="#ff4e00">￥399</font> X1</div>
                    </li>
                </ul>
                <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>1058</span></div>
                <div class="price_a"><a href="#">去购物车结算</a></div>
                <!--End 购物车已登录 End-->
            </div>
        </div>
    </div>
</div>
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
        </div>        	
		<div class="m_right">
            <p></p>
            <div class="mem_tit">收货地址</div>
			<div class="address">
            	<div class="a_close"><a href="#"><img src="${pageContext.request.contextPath}/images/a_close.png" /></a></div>
            	<table border="0" class="add_t" align="center" style="width:98%; margin:10px auto;" cellspacing="0" cellpadding="0">
                  <tr>
                    <td colspan="2" style="font-size:14px; color:#ff4e00;">杨杨公司</td>
                  </tr>
                  <tr>
                    <td align="right" width="80">收货人姓名：</td>
                    <td>杨杨</td>
                  </tr>
                  <tr>
                    <td align="right">配送区域：</td>
                    <td>四川成都市武侯区三环以内</td>
                  </tr>
                  <tr>
                    <td align="right">详细地址：</td>
                    <td>科华北路66号世外桃源写字楼3楼</td>
                  </tr>
                  <tr>
                    <td align="right">手机：</td>
                    <td>12345678998</td>
                  </tr>
                  <tr>
                    <td align="right">电话：</td>
                    <td>028-12345678</td>
                  </tr>
                  <tr>
                    <td align="right">电子邮箱：</td>
                    <td>123456789@qq.com</td>
                  </tr>
                  <tr>
                    <td align="right">标志建筑：</td>
                    <td>世外桃源</td>
                  </tr>
                </table>
				
                <p align="right">
                	<a href="#" style="color:#ff4e00;">设为默认</a>&nbsp; &nbsp; &nbsp; &nbsp; <a href="#" style="color:#ff4e00;">编辑</a>&nbsp; &nbsp; &nbsp; &nbsp; 
                </p>

            </div>

            <div class="mem_tit">
            	<a href="#"><img src="${pageContext.request.contextPath}/images/add_ad.gif" /></a>
            </div>
            <table border="0" class="add_tab" style="width:930px;"  cellspacing="0" cellpadding="0">
              <tr>
                <td width="135" align="right">配送地区</td>
                <td colspan="3" style="font-family:'宋体';">
                	<select class="jj" name="country" style="background-color:#f6f6f6;">
                      <option value="0" selected="selected">请选择...</option>
                      <option value="1">中国</option>
                      <option value="2">中国</option>
                      <option value="3">中国</option>
                      <option value="4">中国</option>
                    </select>
                	<select class="jj" name="province">
                      <option value="0" selected="selected">请选择...</option>
                      <option value="1">四川</option>
                      <option value="2">重庆</option>
                      <option value="3">北京</option>
                      <option value="4">云南</option>
                    </select>
                    <select class="jj" name="city">
                      <option value="0" selected="selected">请选择...</option>
                      <option value="1">成都</option>
                      <option value="2">宜宾</option>
                      <option value="3">南充</option>
                      <option value="4">绵阳</option>
                    </select>
                    <select class="jj" name="area">
                      <option value="0" selected="selected">请选择...</option>
                      <option value="1">武侯区</option>
                      <option value="2">成华区</option>
                      <option value="3">锦江区</option>
                      <option value="4">青羊区</option>
                    </select>
                    （必填）
                </td>
              </tr>
              <tr>
                <td align="right">收货人姓名</td>
                <td style="font-family:'宋体';"><input type="text" value="姓名" class="add_ipt" />（必填）</td>
                <td align="right">电子邮箱</td>
                <td style="font-family:'宋体';"><input type="text" value="12345678@qq.com" class="add_ipt" />（必填）</td>
              </tr>
              <tr>
                <td align="right">详细地址</td>
                <td style="font-family:'宋体';"><input type="text" value="世外桃源" class="add_ipt" />（必填）</td>
                <td align="right">邮政编码</td>
                <td style="font-family:'宋体';"><input type="text" value="610000" class="add_ipt" /></td>
              </tr>
              <tr>
                <td align="right">手机</td>
                <td style="font-family:'宋体';"><input type="text" value="1361234587" class="add_ipt" />（必填）</td>
                <td align="right">电话</td>
                <td style="font-family:'宋体';"><input type="text" value="028-12345678" class="add_ipt" /></td>
              </tr>
              <tr>
                <td align="right">标志建筑</td>
                <td style="font-family:'宋体';"><input type="text" value="世外桃源大酒店" class="add_ipt" /></td>
                <td align="right">最佳送货时间</td>
                <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt" /></td>
              </tr>
            </table>
           	<p align="right">
            	<a href="#">删除</a>&nbsp; &nbsp; <a href="#" class="add_b">确认修改</a>
            </p> 
           

            
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
</div>
</body>
</html>
