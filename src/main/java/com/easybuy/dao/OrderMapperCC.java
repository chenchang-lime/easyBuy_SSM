package com.easybuy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.easybuy.entity.Order;

/**
 * 订单Dao
 * @author ?
 */
public interface OrderMapperCC {
	/**
	 * 新增订单信息
	 */
	int insertOrder(Order order);
	
	Order selectOrderBySetSerialNumber(String serialNumber);
	
	Order selectOrderByID(Integer orderID);
	
	int updateOrderStatus(@Param("status")Integer status,@Param("serialNumber")String serialNumber);
	
	int payOrder(@Param("status")Integer status,@Param("id")Integer id,@Param("paymentMethod")Integer paymentMethod);
	/**
	 * 查询订单信息
	 */
	List<Order> selectOrderByPage(String loginName);
	
	int countMyOrder(String loginName);
	
}
