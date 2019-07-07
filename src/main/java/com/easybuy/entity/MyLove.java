package com.easybuy.entity;

import java.util.Date;

public class MyLove {
	private Integer id;
	private Integer myLoveProID;
	private Double oldPri;
	private Date loveTime;
	private String loginName;

	public MyLove() {
		super();
	}

	public MyLove(Integer myLoveProID, Double oldPri, Date loveTime, String loginName) {
		this.myLoveProID = myLoveProID;
		this.oldPri = oldPri;
		this.loveTime = loveTime;
		this.loginName = loginName;
	}

	public MyLove(Integer id, Integer myLoveProID, Double oldPri, Date loveTime, String loginName) {
		this.id = id;
		this.myLoveProID = myLoveProID;
		this.oldPri = oldPri;
		this.loveTime = loveTime;
		this.loginName = loginName;
	}

	@Override
	public String toString() {
		return "MyLove [id=" + id + ", myLoveProID=" + myLoveProID + ", oldPri=" + oldPri + ", loveTime=" + loveTime
				+ ", loginName=" + loginName + "]";
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getMyLoveProID() {
		return myLoveProID;
	}

	public void setMyLoveProID(Integer myLoveProID) {
		this.myLoveProID = myLoveProID;
	}

	public Double getOldPri() {
		return oldPri;
	}

	public void setOldPri(Double oldPri) {
		this.oldPri = oldPri;
	}

	public Date getLoveTime() {
		return loveTime;
	}

	public void setLoveTime(Date loveTime) {
		this.loveTime = loveTime;
	}

}
