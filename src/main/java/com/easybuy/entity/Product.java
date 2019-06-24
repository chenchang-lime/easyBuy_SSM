package com.easybuy.entity;
/**
 * 表名：easybuy_product
 * 商品表
 * @author 陈昌
 */
public class Product {
	/**
	 * 商品编号-主键
	 */
	private Integer id;
	/**
	 * 商品名称,非空
	 */
	private String name;
	/**
	 * 商品描述
	 */
	private String description;
	/**
	 * 商品单价,非空
	 */
	private Double price;
	/**
	 * 商品库存,非空
	 */
	private Integer stock;
	/**
	 * 所属商品（大分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为1，ProType.type=1
	 */
	private Integer categoryLevel1Id;
	/**
	 * 所属商品（次分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为2，ProType.type=2
	 */
	private Integer categoryLevel2Id;
	/**
	 * 所属商品（小分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为3，ProType.type=3
	 */
	private Integer categoryLevel3Id;
	/**
	 * 商品图片名称
	 */
	private String fileName;
	/**
	 * 是否删除（是否上架，0：已上架，未删除【默认为0】 1：已下架，已删除 ）
	 */
	private Integer isDelete;
	
	public Product() {
		super();
	}
	/**
	 * @param id  商品编号-主键
	 * @param name  商品名称,非空
	 * @param description  商品描述
	 * @param price  商品单价,非空
	 * @param stock  商品库存,非空
	 * @param categoryLevel1Id  所属商品（大分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为1，ProType.type=1
	 * @param categoryLevel2Id  所属商品（次分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为2，ProType.type=2
	 * @param categoryLevel3Id  所属商品（小分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为3，ProType.type=3
	 * @param fileName  商品图片名称
	 * @param isDelete  是否删除（是否上架，0：已上架，未删除【默认为0】 1：已下架，已删除 ）
	 */
	public Product(Integer id, String name, String description, Double price, Integer stock, Integer categoryLevel1Id,
			Integer categoryLevel2Id, Integer categoryLevel3Id, String fileName, Integer isDelete) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.stock = stock;
		this.categoryLevel1Id = categoryLevel1Id;
		this.categoryLevel2Id = categoryLevel2Id;
		this.categoryLevel3Id = categoryLevel3Id;
		this.fileName = fileName;
		this.isDelete = isDelete;
	}
	/**
	 * 商品编号-主键
	 */
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 商品名称,非空
	 */
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * 商品描述
	 */
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	/**
	 * 商品单价,非空
	 */
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	/**
	 * 商品库存,非空
	 */
	public Integer getStock() {
		return stock;
	}
	public void setStock(Integer stock) {
		this.stock = stock;
	}
	/**
	 * 所属商品（大分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为1，ProType.type=1
	 */
	public Integer getCategoryLevel1Id() {
		return categoryLevel1Id;
	}
	public void setCategoryLevel1Id(Integer categoryLevel1Id) {
		this.categoryLevel1Id = categoryLevel1Id;
	}
	/**
	 * 所属商品（次分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为2，ProType.type=2
	 */
	public Integer getCategoryLevel2Id() {
		return categoryLevel2Id;
	}
	public void setCategoryLevel2Id(Integer categoryLevel2Id) {
		this.categoryLevel2Id = categoryLevel2Id;
	}
	/**
	 * 所属商品（小分类）的ID，引用自表easybuy_product_category的ID，即：类别等级为3，ProType.type=3
	 */
	public Integer getCategoryLevel3Id() {
		return categoryLevel3Id;
	}
	public void setCategoryLevel3Id(Integer categoryLevel3Id) {
		this.categoryLevel3Id = categoryLevel3Id;
	}
	/**
	 * 商品图片名称
	 */
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	/**
	 * 是否删除（是否上架，0：已上架，未删除【默认为0】 1：已下架，已删除 ）
	 */
	public Integer getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(Integer isDelete) {
		this.isDelete = isDelete;
	}
	
}
