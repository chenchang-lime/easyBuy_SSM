package com.easybuy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.DetailMapper;
import com.easybuy.dao.OrderMapper;
import com.easybuy.entity.Detail;
import com.easybuy.entity.Order;
import com.easybuy.entity.Product;
import com.easybuy.service.OrderService;
import com.github.pagehelper.PageHelper;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderMapper orderMapper;
	
	@Autowired
	private DetailMapper detailMapper;
	
	public int insertOrder(Order order) {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<Order> selectOrderByPage(Integer currPage,Integer pageSize) {
		// TODO Auto-generated method stub
		PageHelper.startPage(currPage, pageSize);
		List<Order> list = orderMapper.selectOrderByPage();
		return list;
	}

	public int insertDetail(Detail detail) {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<Detail> selectDetailsByOrderID(int orderID) {
		// TODO Auto-generated method stub
		List<Detail> selectDetailsByOrderID = detailMapper.selectDetailsByOrderID(orderID);
		return selectDetailsByOrderID;
	}

	
	public int selectAll() {
		// TODO Auto-generated method stub
		return orderMapper.selectAll();
	}

	
	public int update(int id) {
		// TODO Auto-generated method stub
		return orderMapper.update(id);
	}

	public List<Order> selectOrder() {
		// TODO Auto-generated method stub
		List<Order> list = orderMapper.selectOrderByPage();
		List<Order> byStatus = new ArrayList<Order>();
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getStatus()==2) {
				byStatus.add(list.get(i));
			}
		}
		return byStatus;
	}

	
	public Order selectById(int id) {
		// TODO Auto-generated method stub
		return orderMapper.selectById(id);
	}

	
	public int updateCost(double cost ,int firstId) {
		// TODO Auto-generated method stub
		return orderMapper.updateCost(cost,firstId);
	}

	
	public int updataOrderID(int firstId, int secondId) {
		// TODO Auto-generated method stub
		System.out.println("ss");
		int aa= detailMapper.updataOrderID(firstId, secondId);
		System.out.println(aa);
		return aa;
	}

	public int updateCombine(int secondId) {
		// TODO Auto-generated method stub
		return orderMapper.updateCombine(secondId);
	}

	public int deliver(String courierNumber,int id) {
		// TODO Auto-generated method stub
		System.out.println("aa");
		int count =orderMapper.deliver(courierNumber,id);
		System.out.println(count);
		return count;
	}

	public Product selectProductByid(int productId) {
		// TODO Auto-generated method stub
		return detailMapper.selectProductByid(productId);
	}

	public int deleteByid(int id) {
		// TODO Auto-generated method stub
		
		return orderMapper.deleteByid(id);
	}

}
