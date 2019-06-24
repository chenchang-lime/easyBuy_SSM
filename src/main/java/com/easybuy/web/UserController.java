package com.easybuy.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.easybuy.entity.User;
import com.easybuy.service.UserService;

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
}
