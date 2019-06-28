package com.easybuy.dao;

public interface ProductMapper {
	/**
	 * 查询所有商品的数量
	 */
	int selectCount();
	
	/**
	 * 查询所有种类的数量
	 */
	int selectTypeCount();
	
	/**
	 * 删除类别
	 */
	int deleteProType(int id);
}
