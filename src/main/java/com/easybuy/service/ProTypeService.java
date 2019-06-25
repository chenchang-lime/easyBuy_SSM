package com.easybuy.service;

import java.util.List;

import com.easybuy.dao.ProTypeMapper;
import com.easybuy.entity.ProType;
/**
 * 购物(类别)ProTypeService
 * @author 陈昌
 */
public interface ProTypeService {
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
}
