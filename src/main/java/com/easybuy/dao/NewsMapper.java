package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.News;

/**
 * 新闻Dao
 * @author 鲁鑫
 */
public interface NewsMapper {
	/**
	 * 查询新闻
	 */
	List<News> selectAllNews();
	
	/**
	 * 查询新闻总条数
	 */
	int countNews();
	
	/**
	 * 根据ID查新闻详情
	 */
	News selectNewsByID(int id);
}
