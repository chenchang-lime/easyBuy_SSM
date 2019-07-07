package com.easybuy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.easybuy.entity.Detail;
import com.easybuy.entity.Product;

/**
 * 订单详情Dao
 * @author ?
 */
public interface DetailMapper {
	/**
	 * 新增订单详情
	 */
	int insertDetail(Detail detail);
	
	/**
	 * 根据订单编号 查询订单详情列表
	 */
	List<Detail> selectDetailsByOrderID(int orderID);
	
	/**
	 * 根据订单编号  合并订单  并修改orderID
	 */
	int updataOrderID(@Param("firstId")int firstId,@Param("secondId")int secondId);
	
	/**
	 * 根据productId查询productName
	 */
	Product selectProductByid(int productId);
	
}
