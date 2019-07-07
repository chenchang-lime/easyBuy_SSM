package com.easybuy.service;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.easybuy.entity.News;
/**
 * 新闻服务Service
 * @author ?
 */


public interface NewsService {
	/**
	 * 分页查询新闻
	 */
	List<News> selectNewsByPage(Integer currPage,Integer pageSize);
	
	List<News> selectNewsTop5();
	
	/**
	 * 根据ID查新闻详情
	 */
	News selectNewsByID(int id);
	/**
	 * 查询新闻总数量
	 */
	int selectCount();
	/**
	 * 新增新闻
	 * 
	 */
	int insertNews(News news);
	/**
	 * 删除新闻
	 */
	int deleteNews(int id);
	/**
	 * 修改新闻
	 */
	int updataNews(News news);
	
	

}
