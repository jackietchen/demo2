package com.Dao;

import java.util.List;

import com.Pojo.Zbtzsxxb;

public interface ZbtzsxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Zbtzsxxb record);

    int insertSelective(Zbtzsxxb record);

    Zbtzsxxb selectByPrimaryKey(Long lsh);

    List<Zbtzsxxb> selectByZbfzr(String zbfzr);
    
    int updateByPrimaryKeySelective(Zbtzsxxb record);

    int updateByPrimaryKey(Zbtzsxxb record);
}