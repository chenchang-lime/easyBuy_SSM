package com.easybuy.service.impl;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.easybuy.dao.DetailMapperCC;
import com.easybuy.dao.MyCartMapper;
import com.easybuy.dao.OrderMapperCC;
import com.easybuy.dao.ProMapper;
import com.easybuy.dao.UserMapperCC;
import com.easybuy.entity.Detail;
import com.easybuy.entity.MyCart;
import com.easybuy.entity.Order;
import com.easybuy.entity.User;
import com.easybuy.service.OrderServiceCC;
import com.easybuy.util.MD5TOOL;
import com.github.pagehelper.PageHelper;

@Service
public class OrderServiceCCImpl implements OrderServiceCC {

	@Autowired
	private OrderMapperCC oMapper;
	@Autowired
	private MyCartMapper cMapper;
	@Autowired
	private DetailMapperCC dMapper;
	@Autowired
	private ProMapper pMapper;
	@Autowired
	private UserMapperCC uMapper;
	
	@Transactional
	public Order addOrder(User user, Order order) {
		Order finallyOrder = null;
		order.setCreateTime(new Date());
		order.setUserId(user.getId());
		order.setLoginName(user.getLoginName());
		String serialNumber = UUID.randomUUID()+"";
		order.setSerialNumber(serialNumber);
		System.out.println("Service-->"+order);
		if(oMapper.insertOrder(order)>0) {//生成订单
			System.out.println("订单生成完毕！");
			//根据序列号UUID查到刚才生成的订单
			finallyOrder = oMapper.selectOrderBySetSerialNumber(serialNumber);
			Integer orderId = finallyOrder.getId();
			System.out.println("newOrderID-->"+orderId);
			//查询我的购物车中的所有商品
			List<MyCart> list = cMapper.selectMyCart(user.getLoginName());
			System.out.println("我的购物车里有-->"+list.size());
			int isOk = 0;
			for (MyCart myCart : list) {
				//将每种商品生成购买记录，订单详情
				if(dMapper.insertDetail(new Detail(orderId,myCart.getProID(),myCart.getNum(),myCart.getPrice()))>0) {
					System.out.println("订单详情-->+"+isOk);
					//减少商品库存,增加销量
					System.out.println("myCart.getNum()-->"+myCart.getNum());
					if(pMapper.updateStockAndSales(myCart.getNum(),myCart.getProID())>0) {
						System.out.println("库存销量变更OK");
						isOk++;
					}
				}
			}
			if(isOk==list.size()) {
				System.out.println("ALL订单详情,库存销量变更,OK");
				//清空购物车
				if(cMapper.delMyCart(user.getLoginName())==list.size()) {
					System.out.println("清空购物车！");
					//给订单详情加一个快递（商品）
					Double ePrice = 10.0;
					if(order.getExpress()==1) {
						ePrice = 20.0;
					}else if(order.getExpress()==3) {
						ePrice = 8.0;
					}
					if(dMapper.insertDetail(new Detail(orderId,order.getExpress(),1,ePrice))>0) {
						System.out.println("快递选择ok");
						if(order.getPacking()==1) {
							if(dMapper.insertDetail(new Detail(orderId,4,1,15.0))>0) {
								System.out.println("精品包装ok");
								System.out.println("finallyOrder-->"+finallyOrder);
								return finallyOrder;
							}else {
								System.out.println("精品包装系统错误");
								return null;
							}
						}else {
							System.out.println("无包装ok");
							System.out.println("finallyOrder-->"+finallyOrder);
							return finallyOrder;
						}
					}else {
						System.out.println("快递选择，系统错误1！");
						return null;
					}
				}else {
					System.out.println("购物车，系统错误2！");
				}
			}else {
				System.out.println("ALL订单详情,库存销量变更,系统错误");
			}
		} else {
			System.out.println("生成订单，系统错误！");
		}
		System.out.println("系统错误2！");
		return null;
	}

	public Order selectOrderBySetSerialNumber(String serialNumber) {
		return oMapper.selectOrderBySetSerialNumber(serialNumber);
	}

	@Transactional
	public String payOrder(Integer paymentMethod,Integer orderID, String loginName, String payPwd,HttpSession session) {
		System.out.println("paymentMethod-->"+paymentMethod+"payOrder-->"+orderID+",loginName-->"+loginName+",payPwd-->"+payPwd);
		User user = uMapper.isPayPwd(loginName,new MD5TOOL().getMD5tring(payPwd));
		if(user!=null) {
			Order order = oMapper.selectOrderByID(orderID);
			if(order.getStatus()==2) {
				System.out.println("已支付");
				return "yizhifu";
			}
			//6为货到付款
			if(paymentMethod==6) {
				System.out.println("-->为货到付款");
				if(oMapper.payOrder(2, orderID,paymentMethod)>0) {
					System.out.println("订单状态更新-->已付款，待发货");
					return "ok";
				} else {
					System.out.println("订单状态更新失败！");
					return "sysError";
				}
			} else {
				if(user.getMoney()<order.getCost()) {
					System.out.println("noMoney");
					return "noMoney";
				}else {
					if(uMapper.updateMoney(order.getCost(),user.getId())>0) {
						System.out.println("扣款成功");
						user.setMoney(user.getMoney()-order.getCost());
						session.removeAttribute("account");
						session.setAttribute("account", user);
						if(oMapper.payOrder(2, orderID,paymentMethod)>0) {
							System.out.println("订单状态更新-->已付款，待发货");
							return "ok";
						} else {
							System.out.println("订单状态更新失败！");
							return "sysError";
						}
					}else {
						System.out.println("扣款失败！");
						return "sysError";
					}
				}
			}
		}else {
			return "pwdError";
		}
	}

	public List<Order> selectOrderByPage(Integer pageNum,Integer pageSize,String loginName) {
		PageHelper.startPage(pageNum, pageSize);
		return oMapper.selectOrderByPage(loginName);
	}

	public int countMyOrder(String loginName) {
		return oMapper.countMyOrder(loginName);
	}

	public Order selectOrderByID(Integer orderID) {
		return oMapper.selectOrderByID(orderID);
	}

	public int updateOrderStatus(Integer status, String serialNumber) {
		return oMapper.updateOrderStatus(status, serialNumber);
	}

}
