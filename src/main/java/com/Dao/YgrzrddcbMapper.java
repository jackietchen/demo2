package com.Dao;

import com.Pojo.Ygrzrddcb;

public interface YgrzrddcbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Ygrzrddcb record);

    int insertSelective(Ygrzrddcb record);

    Ygrzrddcb selectByPrimaryKey(Long lsh);

    int updateByPrimaryKeySelective(Ygrzrddcb record);

    int updateByPrimaryKey(Ygrzrddcb record);
}