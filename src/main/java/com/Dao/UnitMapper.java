package com.Dao;

import java.util.List;

import com.Pojo.Unit;

public interface UnitMapper {
    int deleteByPrimaryKey(String no);

    int insert(Unit record);
    
    int insertSelective(Unit record);

    Unit selectByPrimaryKey(String no);
    
    List<Unit> selectAll();

    int updateByPrimaryKeySelective(Unit record);

    int updateByPrimaryKey(Unit record);
}