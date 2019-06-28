package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.ProType;

/**
 * 商品类别Dao
 * @author ?
 */
public interface ProTypeMapper {
	/**
	 * 添加分类
	 */
	int insertProType(ProTypeMapper proType);
	
	/**
	 * 删除分类
	 */
	int deleteProType(int id);
	
	/**
	 * 查询所有分类
	 */
	List<ProType> selectAllProType();
	
	/**
	 * 根据ID查询分类
	 */
	ProType selectTypeByID(Integer id);
}
