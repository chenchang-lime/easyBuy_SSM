package com.easybuy.web;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/alipay")
public class AliPayController {
	
	@RequestMapping("/res")
	public String getResult(@RequestParam Map<String,Object> map) {
		System.out.println(map);
		return "1";
	}
}
