package com.easybuy.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import com.easybuy.entity.MyLove;

public interface MyLoveMapper {
	int addMyLove(MyLove myLove);
	
	int delMyLoveByProID(@Param("proID")Integer proID,@Param("loginName")String loginName);
	
	List<MyLove> selectMyLove(String loginName);
	
	int countMyLove(String loginName);
}
