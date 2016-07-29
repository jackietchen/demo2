package com.Dao;

import java.util.List;

import com.Pojo.Zyzslbb;

public interface ZyzslbbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Zyzslbb record);

    int insertSelective(Zyzslbb record);

    Zyzslbb selectByPrimaryKey(Long lsh);

    List<Zyzslbb> selectAll();
    
    List<Zyzslbb> selectByJg(String jg);
    
    int updateByPrimaryKeySelective(Zyzslbb record);

    int updateByPrimaryKey(Zyzslbb record);
}