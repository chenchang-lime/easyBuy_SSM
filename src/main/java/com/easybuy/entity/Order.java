package com.easybuy.entity;

import java.util.Date;

/**
 * 表名：easybuy_order
 * 订单表
 * @author 陈昌
 */
public class Order {
	/**
	 * 订单编号-主键
	 */
	private Integer id;
	/**
	 * 用户ID-引用自表easybuy_user的id
	 */
	private Integer userId;
	/**
	 * 用户登录名-引用自表easybuy_user的loginName
	 */
	private String  loginName;
	/**
	 * 收货地址-引用自表easybuy_user_address的address
	 */
	private String userAddress; //地址为String类型
	/**
	 * 订单创建时间-默认为系统当前时间
	 */
	private Date createTime;  //时间为date类型
	/**
	 * 订单总金额
	 */
	private Double cost;
	/**
	 * 订单唯一标识码-序列号
	 */
	private String serialNumber;
	
	/**
	 * 订单状态
	 */
	private Integer status ;
	
	/**
	 * 无参构造函数
	 */
	public Order() {
		super();
	}
	/**
	 * @param id  订单编号-主键
	 * @param userId  用户ID-引用自表easybuy_user的id
	 * @param loginName  用户登录名-引用自表easybuy_user的loginName
	 * @param userAddress  收货地址-引用自表easybuy_user_address的address
	 * @param createTime  订单创建时间-默认为系统当前时间
	 * @param cost  订单总金额
	 * @param serialNumber  订单唯一标识码-序列号
	 */

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Order [id=" + id + ", userId=" + userId + ", loginName=" + loginName + ", userAddress=" + userAddress
				+ ", createTime=" + createTime + ", cost=" + cost + ", serialNumber=" + serialNumber + ", status="
				+ status + "]";
	}
	public Order(Integer id, Integer userId, String loginName, String userAddress, Date createTime, Double cost,
			String serialNumber, Integer status) {
		super();
		this.id = id;
		this.userId = userId;
		this.loginName = loginName;
		this.userAddress = userAddress;
		this.createTime = createTime;
		this.cost = cost;
		this.serialNumber = serialNumber;
		this.status = status;
	}
	
}
