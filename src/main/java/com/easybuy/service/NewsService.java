package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.News;
/**
 * 新闻服务Service
 * @author ?
 */
public interface NewsService {
	/**
	 * 分页查询新闻
	 */
	List<News> selectNewsByPage(Integer pageNum,Integer pageSize);
	
	/**
	 * 根据ID查新闻详情
	 */
	News selectNewsByID(int id);
}
