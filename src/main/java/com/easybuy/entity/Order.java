package com.easybuy.entity;

import java.util.Date;

/**
 * 表名：easybuy_order 订单表
 * 
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
	private String loginName;
	/**
	 * 收货地址-引用自表easybuy_user_address的address
	 */
	private String userAddress;
	/**
	 * 订单创建时间-默认为系统当前时间
	 */
	// @JSONField(format="yyyy-MM-dd")
	private Date createTime;
	/**
	 * 订单总金额
	 */
	private Double cost;
	/**
	 * 订单唯一标识码-序列号
	 */
	private String serialNumber;
	/**
	 * 快递1.顺丰20元；2.申通10元（默认）；3.邮政8元
	 */
	private Integer express;
	/**
	 * 包装0.无包装（默认）1.精包装15元
	 */
	private Integer packing;
	/**
	 * 备注
	 */
	private String remarks;
	/**
	 * 缺货处理方式1.等待所有商品备齐后再发（默认）；2.取消订单；3与店主协商
	 */
	private Integer shortage;
	/**
	 * 快递单号
	 */
	private String courierNumber;
	/**
	 * 支付方式1：余额；2支付宝3花呗；4储蓄卡5信用卡6货到付款
	 */
	private Integer paymentMethod;
	/**
	 * 状态
	 * 0 已取消
	 * 1 已下单，未付款
	 * 2 已付款，未发货
	 * 3 已发货，未收货
	 * 4 已收货
	 */
	private Integer status;

	/**
	 * 无参构造函数
	 */
	public Order() {
		super();
	}

	/**
	 * @param id
	 *            订单编号-主键
	 * @param userId
	 *            用户ID-引用自表easybuy_user的id
	 * @param loginName
	 *            用户登录名-引用自表easybuy_user的loginName
	 * @param userAddress
	 *            收货地址-引用自表easybuy_user_address的address
	 * @param createTime
	 *            订单创建时间-默认为系统当前时间
	 * @param cost
	 *            订单总金额
	 * @param serialNumber
	 *            订单唯一标识码-序列号
	 */
	public Order(Integer id, Integer userId, String loginName, String userAddress, Date createTime, Double cost,
			String serialNumber, Integer express, Integer packing, String remarks, Integer shortage,
			String courierNumber, Integer paymentMethod, Integer status) {
		super();
		this.id = id;
		this.userId = userId;
		this.loginName = loginName;
		this.userAddress = userAddress;
		this.createTime = createTime;
		this.cost = cost;
		this.serialNumber = serialNumber;
		this.express = express;
		this.packing = packing;
		this.remarks = remarks;
		this.shortage = shortage;
		this.courierNumber = courierNumber;
		this.paymentMethod = paymentMethod;
		this.status = status;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", userId=" + userId + ", loginName=" + loginName + ", userAddress=" + userAddress
				+ ", createTime=" + createTime + ", cost=" + cost + ", serialNumber=" + serialNumber + ", express="
				+ express + ", packing=" + packing + ", remarks=" + remarks + ", shortage=" + shortage
				+ ", courierNumber=" + courierNumber + ", paymentMethod=" + paymentMethod + ", status=" + status + "]";
	}

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

	public Integer getExpress() {
		return express;
	}

	public void setExpress(Integer express) {
		this.express = express;
	}

	public Integer getPacking() {
		return packing;
	}

	public void setPacking(Integer packing) {
		this.packing = packing;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Integer getShortage() {
		return shortage;
	}

	public void setShortage(Integer shortage) {
		this.shortage = shortage;
	}

	public String getCourierNumber() {
		return courierNumber;
	}

	public void setCourierNumber(String courierNumber) {
		this.courierNumber = courierNumber;
	}

	public Integer getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(Integer paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

}
