package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.easybuy.dao.NewsMapper;
import com.easybuy.entity.News;
import com.easybuy.service.NewsService;
import com.github.pagehelper.PageHelper;

@Service
public class NewsServiceImpl implements NewsService {

	@Autowired
	private NewsMapper mapper;
	
	public List<News> selectNewsByPage(Integer currPage, Integer pageSize) {
		PageHelper.startPage(currPage, pageSize);
		return mapper.selectAllNews();
	}

	public News selectNewsByID(int id) {
		
		return mapper.selectNewsByID(id);
	}

	public int selectCount() {
		
		return mapper.countNews();
	}

	public int insertNews(News news) {
	
		return mapper.insertNews(news);
	}

}
