package com.easybuy.entity;
/**
 * 表名:easybuy_order_detail
 * 订单详情表
 * @author 陈昌
 */
public class Detail {
	/**
	 * 订单详情表ID-主键
	 */
	private Integer id;
	/**
	 * 订单ID-引用表easybuy_order的id
	 */
	private Integer orderId;
	/**
	 * 商品ID-引用自表easybuy_product的id
	 */
	private Integer productId;
	/**
	 * 购买数量
	 */
	private Integer quantity;
	/**
	 * 单项小计金额，即：商品单价*quantity
	 */
	private Double cost;
	
	/**
	 * 无参构造函数
	 */
	public Detail() {
		super();
	}
	/**
	 * @param id  订单详情表ID-主键
	 * @param orderId  订单ID-引用表easybuy_order的id
	 * @param productId  商品ID-引用自表easybuy_product的id
	 * @param quantity  购买数量
	 * @param cost  单项小计金额，即：商品单价*quantity
	 */
	public Detail(Integer id, Integer orderId, Integer productId, Integer quantity, Double cost) {
		super();
		this.id = id;
		this.orderId = orderId;
		this.productId = productId;
		this.quantity = quantity;
		this.cost = cost;
	}
	/**
	 * 订单详情表ID-主键
	 */
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 订单ID-引用表easybuy_order的id
	 */
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	/**
	 * 商品ID-引用自表easybuy_product的id
	 */
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	/**
	 * 购买数量
	 */
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	/**
	 * 单项小计金额，即：商品单价*quantity
	 */
	public Double getCost() {
		return cost;
	}
	public void setCost(Double cost) {
		this.cost = cost;
	}
	
}
