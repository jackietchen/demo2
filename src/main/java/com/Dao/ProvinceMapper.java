package com.Dao;

import java.util.List;

import com.Pojo.Province;

public interface ProvinceMapper {
    int deleteByPrimaryKey(Integer no);

    int insert(Province record);

    int insertSelective(Province record);

    List<Province> selectAll();
    
    Province selectByPrimaryKey(Integer no);

    int updateByPrimaryKeySelective(Province record);

    int updateByPrimaryKey(Province record);
}