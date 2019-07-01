package com.easybuy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.DetailMapper;
import com.easybuy.dao.OrderMapper;
import com.easybuy.entity.Detail;
import com.easybuy.entity.Order;
import com.easybuy.service.OrderService;
import com.github.pagehelper.PageHelper;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderMapper orderMapper;
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
		return null;
	}

	@Override
	public int selectAll() {
		// TODO Auto-generated method stub
		return orderMapper.selectAll();
	}

	@Override
	public int update(int id) {
		// TODO Auto-generated method stub
		return orderMapper.update(id);
	}

	@Override
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

	@Override
	public Order selectById(int id) {
		// TODO Auto-generated method stub
		return orderMapper.selectById(id);
	}

	@Override
	public int updateCost(double cost ,int firstId) {
		// TODO Auto-generated method stub
		return orderMapper.updateCost(cost,firstId);
	}

	@Override
	public int updataOrderID(int firstId, int secondId) {
		// TODO Auto-generated method stub
		return detailMapper.updataOrderID(firstId, secondId);
	}

}
