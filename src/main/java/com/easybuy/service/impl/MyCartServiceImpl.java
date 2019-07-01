package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.MyCartMapper;
import com.easybuy.entity.MyCart;
import com.easybuy.service.MyCartService;

@Service
public class MyCartServiceImpl implements MyCartService {
	
	@Autowired
	private MyCartMapper mapper;

	public int addMyCart(String loginName, Integer proID, Integer num) {
		return mapper.addMyCart(loginName, proID, num);
	}

	public MyCart hasRepeatPro(String loginName, Integer proID) {
		return mapper.hasRepeatPro(loginName, proID);
	}

	public int updateRepeatPro(Integer id, Integer num) {
		return mapper.updateRepeatPro(id, num);
	}

	public List<MyCart> selectMyCart(String loginName) {
		return mapper.selectMyCart(loginName);
	}

	public int delProFromMyCart(Integer id) {
		return mapper.delProFromMyCart(id);
	}
	

}
