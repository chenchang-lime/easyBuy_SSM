package com.easybuy.entity;
/**
 * 表名：easybuy_product_category
 * 商品类型表
 * @author 陈昌
 */
public class ProType {
	/**
	 * 类型ID-主键
	 */
	private Integer id;
	/**
	 * 类型名称
	 */
	private String name;
	/**
	 * 商品类型父类ID（例如:人类父类>动物，动物父类>生物）引用easybuy_product_category表（自己）的类型ID
	 */
	private Integer parentId;
	/**
	 * 商品类型等级（1.大类 2.次类  3.小类）（例如：1.生物  2.动物，植物  3.人类，宠物，树，草）
	 */
	private Integer type;
	/**
	 * 类型图标（图片名称）
	 */
	private String iconClass;
	
	/**
	 * 无参构造函数
	 */
	public ProType() {
		super();
	}
	/**
	 * @param id  类型ID-主键
	 * @param name  类型名称
	 * @param parentId  商品类型父类ID（例如:人类父类>动物，动物父类>生物）引用easybuy_product_category表（自己）的类型ID
	 * @param type  商品类型等级（1.大类 2.次类  3.小类）（例如：1.生物  2.动物，植物  3.人类，宠物，树，草）
	 * @param iconClass  类型图标（图片名称）
	 */
	public ProType(Integer id, String name, Integer parentId, Integer type, String iconClass) {
		super();
		this.id = id;
		this.name = name;
		this.parentId = parentId;
		this.type = type;
		this.iconClass = iconClass;
	}
	/**
	 * 类型ID-主键
	 */
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 类型名称
	 */
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * 商品类型父类ID（例如:人类父类>动物，动物父类>生物）引用easybuy_product_category表（自己）的类型ID
	 */
	public Integer getParentId() {
		return parentId;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	/**
	 * 商品类型等级（1.大类 2.次类  3.小类）（例如：1.生物  2.动物，植物  3.人类，宠物，树，草）
	 */
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	/**
	 * 类型图标（图片名称）
	 */
	public String getIconClass() {
		return iconClass;
	}
	public void setIconClass(String iconClass) {
		this.iconClass = iconClass;
	}
	
	@Override
	public String toString() {
		return "ProType [id=" + id + ", name=" + name + ", parentId=" + parentId + ", type=" + type + ", iconClass="
				+ iconClass + "]";
	}
	
}
