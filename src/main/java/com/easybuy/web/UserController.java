package com.easybuy.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.easybuy.entity.User;
import com.easybuy.service.UserService;
import com.easybuy.uitl.MD5TOOL;

@SessionAttributes({"account"})
@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService sService;
	
	@ResponseBody
	@RequestMapping("/login/{saveuser}")
	public Map<String,Object> login(Model model,User user,@PathVariable String saveuser) {
//		System.out.println("login-->"+user+","+saveuser);
		Map<String,Object> map = new HashMap<String,Object>();
		User account = sService.login(user.getLoginName(), user.getPassword());
		if(account==null) {
			map.put("result", "no");//用户名密码错误
		}else {
//			HttpSession session = request.getSession();
//			session.setAttribute("user", user);//将user登录信息保存在session中
//			if("on".equals(saveuser)) {
//				//设置Cookie
//				Cookie cookie = new Cookie("JSESSIONID",session.getId());
//				//调整Cookie时效为30天
//				cookie.setMaxAge(30*24*60*60);
//				//将Cookie放到浏览器中
//				response.addCookie(cookie);
//			}
			if(account.getType()==0) {
				map.put("result", "user");//普通用户，买家登录-->转去主页购物-->index.jsp
			}else {
				map.put("result", "admin");//管理员，店家登录-->转去后台管理界面-->Member.jsp
			}
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/regist")
	public Map<String,Object> regist(@Valid User user,BindingResult result) {
		Map<String,Object> map = new HashMap<String,Object>();
		
		user.setPassword(new MD5TOOL().getMD5tring(user.getPassword()));
		int account= sService.regist(user);
		if (account==1) {
			map.put("b","ok");
		}else {
			map.put("b","no");
		}
		List<String> errorlist = new ArrayList<String>();
		if (result.hasErrors()) {
			map.put("error", "no");
			List<ObjectError> list=result.getAllErrors();
			for (ObjectError objectError : list) {
				errorlist.add("\n"+objectError.getDefaultMessage()+"\n");
//				map.put(((FieldError)objectError).getField(),objectError.getDefaultMessage());	
			}
			map.put("errorlist", errorlist);
		}else {
			map.put("error", "ok");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/regist1")
	public Map<String,Object> regist1(String loginName) {
		System.out.println(loginName);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("a",sService.selectloginName(loginName));
		return map;
		
		

		
	}
}
