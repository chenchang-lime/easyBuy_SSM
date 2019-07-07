package com.easybuy.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.User;
import com.easybuy.entity.UserAddress;
import com.easybuy.service.UserAddressService;

@Controller
@RequestMapping("/userAddress")
public class UserAddressController {
	
	@Autowired
	private UserAddressService service;
	
	@ResponseBody
	@RequestMapping("/selectMyDefaultAddress")
	public Map<String,Object> selectMyDefaultAddress(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			UserAddress defaultAddress = service.selectMyDefaultAddress(user.getId());
			map.put("result", "ok");
			map.put("defaultAddress", defaultAddress);
			map.put("account", user);
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
}
