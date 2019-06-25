package com.easybuy.entity;

import javax.validation.constraints.Pattern;

/**
 * 表名：easybuy_user
 * 用户表
 * @author 陈昌
 */
public class User {
	/**
	 * 用户编号——主键
	 */
	private Integer id;
	/**
	 * 用户名（仅登录用，非中文）,非空
	 */
	@Pattern(regexp="^[A-Za-z0-9]+$",message="用户名：仅登录用，非中文")
	private String loginName;
	/**
	 * 姓名(真实姓名，网名),非空
	 */
	@Pattern(regexp="^[\\u4e00-\\u9fa5]+$",message="姓名：真实姓名,网名")
	private String userName;
	/**
	 * 登录密码,非空
	 */
	private String password;
	/**
	 * 性别（1男 2女 3人妖^_^）,非空
	 */
	private Integer sex;
	/**
	 * 身份证号
	 */
@Pattern(regexp="^\\d{15}|\\d{18}$",message="身份证号(15位、18位数字)")
	private String identityCode;
	/**
	 * 邮箱
	 */
	@Pattern(regexp = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",message="邮箱：请输入正确邮箱格式***@***.com(cn)")
	private String email;
	/**
	 * 手机号
	 */
	@Pattern(regexp="^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$",
			message="手机号：请输入正确手机号码")
	private String mobile;
	/**
	 * 用户类型（0.普通用户，买家； 1.管理员，店主 ）
	 */
	private Integer type;
	/**
	 * 账户余额
	 */
	private Double money;
	
	/**
	 * 无参构造函数
	 */
	public User() {
		super();
	}

	/**
	 * @param id   用户编号——主键
	 * @param loginName  用户名（仅登录用，非中文）,非空
	 * @param userName  姓名(真实姓名，网名),非空
	 * @param password  登录密码,非空
	 * @param sex  性别（1男 2女 3人妖^_^）,非空
	 * @param identityCode  身份证号
	 * @param email  邮箱
	 * @param mobile  手机号
	 * @param type  用户类型（0.普通用户，买家； 1.管理员，店主 ）
	 * @param money  用户余额
	 */
	public User(Integer id, String loginName, String userName, String password, Integer sex, String identityCode,
			String email, String mobile, Integer type, Double money) {
		super();
		this.id = id;
		this.loginName = loginName;
		this.userName = userName;
		this.password = password;
		this.sex = sex;
		this.identityCode = identityCode;
		this.email = email;
		this.mobile = mobile;
		this.type = type;
		this.money = money;
	}

	/**
	 * 用户编号——主键
	 */
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * 用户名（仅登录用，非中文）,非空
	 */
	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	/**
	 * 姓名(真实姓名，网名),非空
	 */
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * 密码,非空
	 */
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * 性别（1男 2女 3人妖^_^）,非空
	 */
	public Integer getSex() {
		return sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	/**
	 * 身份证号
	 */
	public String getIdentityCode() {
		return identityCode;
	}

	public void setIdentityCode(String identityCode) {
		this.identityCode = identityCode;
	}

	/**
	 * 邮箱
	 */
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * 手机号
	 */
	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	/**
	 * 用户类型（0.普通用户，买家； 1.管理员，店主 ）
	 */
	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}
	/**
	 * 账户余额
	 */
	public Double getMoney() {
		return money;
	}

	public void setMoney(Double money) {
		this.money = money;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", loginName=" + loginName + ", userName=" + userName + ", password=" + password
				+ ", sex=" + sex + ", identityCode=" + identityCode + ", email=" + email + ", mobile=" + mobile
				+ ", type=" + type + ", money=" + money + "]";
	}
	
}
