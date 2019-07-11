<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.11.1.min_044d0927.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.bxslider_e88acd1b.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/menu.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/select.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/lrscroll.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/iban.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/fban.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/f_ban.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/mban.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bban.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/hban.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/tban.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/lrscroll_1.js"></script>
    
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/jquery/regist.js"></script>    
    
<title>【转转】商城-注册</title>
</head>
<body>  
<!--Begin Header Begin-->
<div class="soubg">
	<div class="sou">
        <span class="fr">
        <c:if test="${! empty account}">
        		<input type="hidden" id="isLogin" value="1" />
				欢迎<span style="color:#ff4e00;">[${account.userName}]</span>登录&nbsp;
				<a href="javascript:void(0)" style="color:#ff4e00;" id="logout">[注销]</a>
			</c:if>
			<c:if test="${empty account}">
				<input type="hidden" id="isLogin" value="0" />
				<span class="fl">
					你好，请<a href="${pageContext.request.contextPath}/page/login">登录</a>&nbsp; 
					<a href="${pageContext.request.contextPath}/page/regist" style="color:#ff4e00;">免费注册</a>
				</span>
			</c:if>    
            <span class="fl">|&nbsp;关注我们：</span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a><a href="#" class="sh2">微信</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="${pageContext.request.contextPath}/images/s_tel.png" align="absmiddle" /></a></span>
	        </span>
    </div>
</div>
<!--End Header End--> 
<!--Begin Login Begin-->
<div class="log_bg">	
    <div class="top">
        <div class="logo"><a href="/easyBuy_SSM/page/index"><img src="${pageContext.request.contextPath}/images/logo.png" /></a></div>
    </div>
	<div class="regist">
    	<div class="log_img"><img src="${pageContext.request.contextPath}/images/l_img.png" width="611" height="425" /></div>
		<div class="reg_c">
        	<form id="loginForm">
            <table border="0" style="width:420px; font-size:14px; margin-top:20px;" cellspacing="0" cellpadding="0">
              <tr height="50" valign="top">
              	<td width="95">&nbsp;</td>
                <td>
                	<span class="fl" style="font-size:24px;">注册</span>
                    <span class="fr" >已有商城账号，<a  href="${pageContext.request.contextPath}/page/login" style="color:#ff4e00;">我要登录</a>&nbsp; 
                </td>
              </tr>
              <span></span>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;用户名 &nbsp;</td>
                <td><input type="text" value="" class="l_user" name="loginName" /></td>
              </tr>
                <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;姓名 &nbsp;</td>
                <td><input type="text" value="" class="l_user" name="userName" /></td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;登录密码 &nbsp;</td>
                <td><input type="password" value="" class="l_pwd" name="password"/></td>
              </tr>
               <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;支付密码 &nbsp;</td>
                <td><input type="password" value="" class="l_pwd" name="payPwd"/></td>
              </tr>
              <tr height="50">
              	<td align="right"><font color="#ff4e00">*</font>&nbsp;性别 &nbsp;</td>
              	<td>
              		<label class="r_rad">
                <input class="checkbox2" type="radio" name="sex" value="1" checked="checked"/>
					</label>
					<label class="r_txt" style="margin-right:50px;">男</label>
					<label class="r_rad">
				<input class="checkbox2" type="radio" name="sex" value="2" checked="checked"/></label>
					<label class="r_txt" style="margin-right:50px;">女</label>
					</td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;身份证 &nbsp;</td>
                <td><input type="text" value="" class="l_user" name="identityCode" /></td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;邮箱 &nbsp;</td>
                <td><input type="text" value="" class="l_email" name="email" /></td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;手机号码 &nbsp;</td>
                <td><input  type="text" value="" class="l_mobile"  name="mobile" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><input type="button" id="btnmobile1" value="获取验证码" class="c_btnmobile"/></span></td>
              </tr>
              <tr height="50">
               <td align="right"><font color="#ff4e00">*</font>&nbsp;验证码 &nbsp;</td>
                <td><input type="text" value="" class="l_email" name="code" /></td>
              </tr>	
              	<td>&nbsp;</td>
                <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox"  name="ck" onclick="doJudge()" id="ck" value="" /></label><label class="r_txt">我已阅读并接受《用户协议》</label>
                    </span>
                </td>
              </tr>
              <tr height="60">
              	<td>&nbsp;</td>
              	 <!-- class="res_btn" -->
                <td><input class="log_btn" name="btnregit" id="btn" disabled="disabled"   type="button" value="立即注册"  /></td>
              </tr>
            </table>
            </form>
        </div>
    </div>
</div>
<!--End Login End--> 
<!--Begin Footer Begin-->
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

</body>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/shade.js"></script>
</html>
