package com.Service;

import java.util.List;

import com.Pojo.Unit;

public interface UnitService {
	int deleteByPrimaryKey(String no);

    int insert(Unit record);

    int insertSelective(Unit record);

    Unit selectByPrimaryKey(String no);
    
    List<Unit> selectAll();
    
    int updateByPrimaryKeySelective(Unit record);

    int updateByPrimaryKey(Unit record);
}
