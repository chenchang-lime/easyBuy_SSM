package com.easybuy.entity;

public class MyCart {
	private Integer id;
	private String loginName;
	private Integer proID;
	private String name;
	private Double price;
	private String proType;
	private String fileName;
	private Integer num;

	public MyCart() {
		super();
	}

	public MyCart(Integer id, String loginName, Integer proID, String name, Double price, String proType,
			String fileName, Integer num) {
		super();
		this.id = id;
		this.loginName = loginName;
		this.proID = proID;
		this.name = name;
		this.price = price;
		this.proType = proType;
		this.fileName = fileName;
		this.num = num;
	}

	@Override
	public String toString() {
		return "MyCart [id=" + id + ", loginName=" + loginName + ", proID=" + proID + ", name=" + name + ", price="
				+ price + ", fileName=" + fileName + ", num=" + num + "]";
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

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getProType() {
		return proType;
	}

	public void setProType(String proType) {
		this.proType = proType;
	}

}
