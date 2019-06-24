package com.easybuy.entity;

import java.util.Date;

/**
 * 表名：easybuy_user_address
 * 收货地址表
 * @author 陈昌
 */
public class UserAddress {
	/**
	 * 收货地址ID，主键
	 */
	private Integer id;
	/**
	 * 用户ID，引用easybuy_user的id
	 */
	private Integer userId;
	/**
	 * 收货地址
	 */
	private String address;
	/**
	 * 收货地址创建时间（默认为系统当前时间）
	 */
	private Date createTime;
	/**
	 * 是否是默认的收货地址（0不是默认地址 1是默认地址）（此属性默认为0）
	 */
	private Integer isDefault;
	/**
	 * 收货地址备注（例：家里，公司，女朋友家）
	 */
	private String remark;
	
	/**
	 * 无参构造函数
	 */
	public UserAddress() {
		super();
	}
	
	/**
	 * @param id  收货地址ID，主键
	 * @param userId  用户ID，引用easybuy_user的id
	 * @param address  收货地址
	 * @param createTime  收货地址创建时间（默认为系统当前时间）
	 * @param isDefault  是否是默认的收货地址（0不是默认地址 1是默认地址）（此属性默认为0）
	 * @param remark  收货地址备注（例：家里，公司，女朋友家）
	 */
	public UserAddress(Integer id, Integer userId, String address, Date createTime, Integer isDefault, String remark) {
		super();
		this.id = id;
		this.userId = userId;
		this.address = address;
		this.createTime = createTime;
		this.isDefault = isDefault;
		this.remark = remark;
	}

	/**
	 * 收货地址ID，主键
	 */
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 用户ID，引用easybuy_user的id
	 */
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	/**
	 * 收货地址
	 */
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	/**
	 * 收货地址创建时间（默认为系统当前时间）
	 */
	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	/**
	 * 是否是默认的收货地址（0不是默认地址 1是默认地址）（此属性默认为0）
	 */
	public Integer getIsDefault() {
		return isDefault;
	}

	public void setIsDefault(Integer isDefault) {
		this.isDefault = isDefault;
	}
	/**
	 * 收货地址备注（例：家里，公司，女朋友家）
	 */
	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
}
