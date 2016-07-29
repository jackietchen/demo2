package com.Dao;

import com.Pojo.Zyzsb;

public interface ZyzsbMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Zyzsb record);

    int insertSelective(Zyzsb record);

    Zyzsb selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Zyzsb record);

    int updateByPrimaryKey(Zyzsb record);
}