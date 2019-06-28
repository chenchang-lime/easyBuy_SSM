package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.ProType;
import com.easybuy.entity.Product;

public interface ProductMapper {
	/**
	 * 查询所有商品
	 */
	List<Product> selectAll();
	/**
	 * 查询所有商品的数量
	 */
	int selectCount();
	/**
	 * 查询所有分类
	 */
	List<ProType> selectAllProType();
	/**
	 * 查询所有种类的数量
	 */
	int selectTypeCount();
	
	/**
	 * 删除类别
	 */
	int deleteProType(int id);
	
	/**
	 * 删除商品
	 */
	int deletePro(int id);
}
