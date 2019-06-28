package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.ProType;
import com.easybuy.entity.Product;

public interface ProductService {
	/**
	  @查询所有商品
	 */
	List<Product> selectAll(int currPage,int pageSize); 
	
	/**
	  @查询所有商品的数量
	 */
	int selectCount();
	
	/**
	 * 查询所有分类
	 */
	List<ProType> selectAllProType();

	/**
	  @查询所有类别的数量
	 */
	int selectTypeCount();
	
	/**
	  @删除类别
	 */
	int deleteProType(int id);
	
	/**
	  @删除商品
	 */
	int deletePro(int id);
}
