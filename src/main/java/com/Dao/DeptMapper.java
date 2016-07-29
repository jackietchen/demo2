package com.Dao;

import java.util.List;

import com.Pojo.Dept;

public interface DeptMapper {
    int deleteByPrimaryKey(String no);

    int insert(Dept record);

    int insertSelective(Dept record);

    Dept selectByPrimaryKey(String no);

    List<Dept> selectByUnitno(String unitno);
    
    int updateByPrimaryKeySelective(Dept record);

    int updateByPrimaryKey(Dept record);
}