package com.easybuy.entity;

import java.util.Date;

/**
 * 表名：easybuy_news
 * 新闻表
 * @author 陈昌
 */
public class News {
	/**
	 * 新闻ID
	 */
	private Integer id;
	/**
	 * 新闻标题
	 */
	private String title;
	/**
	 * 新闻内容
	 */
	private String content;
	/**
	 * 创建时间，默认为系统当前时间
	 */
	private Date createTime;
	
	public News() {
		super();
	}

	public News(Integer id, String title, String content, Date createTime) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.createTime = createTime;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
}
