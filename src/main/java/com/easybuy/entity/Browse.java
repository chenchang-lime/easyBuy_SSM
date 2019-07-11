package com.easybuy.entity;

import java.util.Date;

public class Browse {
	private Integer id;
	private String loginName;
	private Integer proID;
	private Date browseTime;

	public Browse() {
		super();
	}

	public Browse(Integer id, String loginName, Integer proID, Date browseTime) {
		super();
		this.id = id;
		this.loginName = loginName;
		this.proID = proID;
		this.browseTime = browseTime;
	}

	public Browse(String loginName, Integer proID, Date browseTime) {
		super();
		this.loginName = loginName;
		this.proID = proID;
		this.browseTime = browseTime;
	}

	@Override
	public String toString() {
		return "Browse [id=" + id + ", loginName=" + loginName + ", proID=" + proID + ", browseTime=" + browseTime
				+ "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public Integer getProID() {
		return proID;
	}

	public void setProID(Integer proID) {
		this.proID = proID;
	}

	public Date getBrowseTime() {
		return browseTime;
	}

	public void setBrowseTime(Date browseTime) {
		this.browseTime = browseTime;
	}

}
