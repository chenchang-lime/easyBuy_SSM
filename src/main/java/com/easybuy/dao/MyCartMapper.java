package com.easybuy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.easybuy.entity.MyCart;

public interface MyCartMapper {
	
	int addMyCart(@Param("loginName")String loginName,@Param("proID")Integer proID,@Param("num")Integer num);
	
	MyCart hasRepeatPro(@Param("loginName")String loginName,@Param("proID")Integer proID);
	
	int updateRepeatPro(@Param("id")Integer id,@Param("num")Integer num);
	
	List<MyCart> selectMyCart(String loginName);
	
	int delProFromMyCart(Integer id);
	
	int delMyCart(String loginName);
}
