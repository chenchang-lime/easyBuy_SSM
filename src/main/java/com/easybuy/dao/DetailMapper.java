package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.Detail;

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
}
