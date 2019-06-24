package com.easybuy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page")
public class PageController {
	
	@RequestMapping("/{url}")
	public String toRegist(@PathVariable String url) {
		System.out.println("当前访问：       /page/"+url);
		return url;
	}
}
