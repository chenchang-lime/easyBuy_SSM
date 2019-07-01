package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.MyCart;

public interface MyCartService {
	int addMyCart(String loginName,Integer proID,Integer num);
	
	MyCart hasRepeatPro(String loginName,Integer proID);
	
	int updateRepeatPro(Integer id,Integer num);
	
	List<MyCart> selectMyCart(String loginName);
	
	int delProFromMyCart(Integer id);
}
