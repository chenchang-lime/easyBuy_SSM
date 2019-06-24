package com.easybuy.dao;

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
}
