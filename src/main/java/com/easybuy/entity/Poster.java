package com.easybuy.entity;

public class Poster {
	private Integer id;
	private Integer proID;
	// 0热门 -1特卖 1进口生鲜 2视频饮料 3个人美妆 4母婴玩具 5家具生活 6数码家电
	private Integer type;

	public Poster() {
		super();
	}

	public Poster(Integer id, Integer proID, Integer type) {
		super();
		this.id = id;
		this.proID = proID;
		this.type = type;
	}

	@Override
	public String toString() {
		return "Poster [id=" + id + ", proID=" + proID + ", type=" + type + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getProID() {
		return proID;
	}

	public void setProID(Integer proID) {
		this.proID = proID;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

}
