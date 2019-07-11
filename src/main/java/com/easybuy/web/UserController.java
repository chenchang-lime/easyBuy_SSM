package com.easybuy.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.easybuy.entity.User;
import com.easybuy.service.UserService;
import com.easybuy.service.UserServiceCC;
import com.easybuy.service.impl.SmsSample;
import com.easybuy.util.MD5TOOL;
import com.github.pagehelper.PageHelper;

//@SessionAttributes({"account"})
@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserServiceCC ccService;
	@Autowired
	private UserService sService;
	@Autowired
	private SmsSample SmsSample;
	
	private int code=0;
	
//	@ResponseBody
//	@RequestMapping("/SmsSample")
//	public Map<String, Object> SmsSample( User user) {
//		String testPhones =user.getMobile();
//		Map<String, Object> map = new HashMap<String, Object>();
//		code=(int)((Math.random()*9+1)*100000);
//		 SmsSample.shou(testPhones, code);
//		 map.put("code", code);
//		 map.put("testPhones", testPhones);
//		 return map;
//	}
	
	@ResponseBody
	@RequestMapping("/SmsSample")
	public Map<String, Object> SmsSample( User user) {
		String testPhones =user.getMobile();
		Map<String, Object> map = new HashMap<String, Object>();
		if (user.getMobile().length()==11) {
		code=(int)((Math.random()*9+1)*100000);
		 SmsSample.shou(testPhones, code);
		System.out.println(testPhones+","+code);
		 map.put("code", code);
		 map.put("codes", "ok");
		 map.put("testPhones", testPhones);
		 return map;
		}else {
			map.put("codes", "no");
			return map;
		}
	}
	
	@ResponseBody
	@RequestMapping("/login/{saveuser}")
	public Map<String, Object> login(User user, @PathVariable String saveuser, HttpServletRequest request,
			HttpServletResponse response) {
		Map<String, Object> map = new HashMap<String, Object>();
		user.setPassword(new MD5TOOL().getMD5tring(user.getPassword()));
		User account = ccService.login(user.getLoginName(), user.getPassword());
		if (account == null) {
			map.put("result", "no");// 用户名密码错误
		} else {
			HttpSession session = request.getSession();
			session.setAttribute("account", account);// 将user登录信息保存在session中
			if ("on".equals(saveuser)) {
				// 设置Cookie
				Cookie cookie = new Cookie("JSESSIONID", session.getId());
				System.out.println("sessionID-->" + session.getId());
				// 调整Cookie时效为30天
				cookie.setMaxAge(30 * 24 * 60 * 60);
				// 将Cookie放到浏览器中
				response.addCookie(cookie);
			}
			if (account.getType() == 0) {
				map.put("result", "user");// 普通用户，买家登录-->转去主页购物-->index.jsp
			} else {
				map.put("result", "admin");// 管理员，店家登录-->转去后台管理界面-->Member.jsp
			}
		}
		return map;
	}

	@ResponseBody
	@RequestMapping("/logout")
	public Map<String, Object> logout(HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> map = new HashMap<String, Object>();
		HttpSession session = request.getSession();
		session.removeAttribute("account");
		map.put("result", "ok");
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/addMoney/{money}")
	public Map<String, Object> logout(@PathVariable Double money,HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		HttpSession session=request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			if(ccService.addMoney(money, user.getId())>0) {
				user.setMoney(user.getMoney()+money);
				session.removeAttribute("account");
				session.setAttribute("account", user);
				map.put("result", "ok");
			}else {
				map.put("result", "error");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}

	// 用户注册
	@ResponseBody
	@RequestMapping("/regist")
	public Map<String, Object> regist(@Valid User user, BindingResult result) {
		Map<String, Object> map = new HashMap<String, Object>();
		user.setPassword(new MD5TOOL().getMD5tring(user.getPassword()));
		user.setPayPwd(new MD5TOOL().getMD5tring(user.getPayPwd()));
		List<String> errorlist = new ArrayList<String>();
		if (result.hasErrors()) {
			map.put("error", "no");
			List<ObjectError> list = result.getAllErrors();
			for (ObjectError objectError : list) {
				errorlist.add("\n" + objectError.getDefaultMessage() + "\n");
			}
			map.put("isOK", "no");
			map.put("errorlist", errorlist);
			return map;
		} else {
			if (sService.regist(user) > 0) {
				map.put("isOK", "ok");
			} else {
				map.put("isOK", "no");
			}
			return map;
		}
	}

	// 验证用户名是否存在
	@ResponseBody
	@RequestMapping("/regist1")
	public Map<String, Object> regist1(String loginName) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("a", sService.selectloginName(loginName));
		return map;
	}

	@ResponseBody
	@RequestMapping("/selectvip")
	public Map<Object, Object> selectvip(@RequestParam(value = "pageNums1", defaultValue = "1") Integer pageNums1,
			@RequestParam(value = "pageSize", defaultValue = "6") Integer pageSize) {
		Map<Object, Object> map = new HashMap<Object, Object>();
		PageHelper.startPage(pageNums1, pageSize);
		List<User> list = sService.selectUserByPage(pageNums1, pageSize);
		int count = sService.tatopage();
		int totalPageNum = count % pageSize == 0 ? count / pageSize : count / pageSize + 1;

		map.put("totalPageNum", totalPageNum);
		map.put("pageNums1", pageNums1);
		if (list != null) {
			map.put("list", list);
		} else {
			map.put("list", "no");
		}
		return map;
	}

	// 删除&修改
	@ResponseBody
	@RequestMapping("/updateUserByID")
	public Map<String, Object> deleteUserByID(@Valid User user,BindingResult result) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<String> errorlist = new ArrayList<String>();
		if (result.hasErrors()) {
			map.put("error", "no");
			List<ObjectError> list = result.getAllErrors();
			for (ObjectError objectError : list) {
				errorlist.add("\n" + objectError.getDefaultMessage() + "\n");
			}
			map.put("updatelist", "no");
			map.put("errorlist", errorlist);
			return map;
		} else {
			if (sService.updateUser(user) > 0) {
				map.put("updatelist", "ok");
			} else {
				map.put("updatelist", "no");
			}
		}
		return map;

	}
}
