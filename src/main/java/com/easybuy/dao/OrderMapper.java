package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.Order;

/**
 * 订单Dao
 * @author ?
 */
public interface OrderMapper {
	/**
	 * 新增订单信息
	 */
	int insertOrder(Order order);
	
	/**
	 * 查询订单信息
	 */
	
	List<Order> selectOrderByPage();
	
	
}
