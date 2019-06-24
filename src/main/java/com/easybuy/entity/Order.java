package com.easybuy.entity;
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
	private Integer loginName;
	/**
	 * 收货地址-引用自表easybuy_user_address的address
	 */
	private Integer userAddress;
	/**
	 * 订单创建时间-默认为系统当前时间
	 */
	private Integer createTime;
	/**
	 * 订单总金额
	 */
	private Double cost;
	/**
	 * 订单唯一标识码-序列号
	 */
	private Integer serialNumber;
	
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
	public Order(Integer id, Integer userId, Integer loginName, Integer userAddress, Integer createTime, Double cost,
			Integer serialNumber) {
		super();
		this.id = id;
		this.userId = userId;
		this.loginName = loginName;
		this.userAddress = userAddress;
		this.createTime = createTime;
		this.cost = cost;
		this.serialNumber = serialNumber;
	}
	/**
	 * 订单编号-主键
	 */
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 用户ID-引用自表easybuy_user的id
	 */
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	/**
	 * 用户登录名-引用自表easybuy_user的loginName
	 */
	public Integer getLoginName() {
		return loginName;
	}
	public void setLoginName(Integer loginName) {
		this.loginName = loginName;
	}
	/**
	 * 收货地址-引用自表easybuy_user_address的address
	 */
	public Integer getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(Integer userAddress) {
		this.userAddress = userAddress;
	}
	/**
	 * 订单创建时间-默认为系统当前时间
	 */
	public Integer getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Integer createTime) {
		this.createTime = createTime;
	}
	/**
	 * 订单总金额
	 */
	public Double getCost() {
		return cost;
	}
	public void setCost(Double cost) {
		this.cost = cost;
	}
	/**
	 * 订单唯一标识码-序列号
	 */
	public Integer getSerialNumber() {
		return serialNumber;
	}
	public void setSerialNumber(Integer serialNumber) {
		this.serialNumber = serialNumber;
	}
	
}
