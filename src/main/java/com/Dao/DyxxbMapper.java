package com.Dao;

import java.util.List;

import com.Pojo.Dyxxb;

public interface DyxxbMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Dyxxb record);

    int insertSelective(Dyxxb record);

    Dyxxb selectByPrimaryKey(Integer id);
    
    int updateByPrimaryKeySelective(Dyxxb record);

    int updateByPrimaryKey(Dyxxb record);
}