package com.Service;

import com.Pojo.Dyxxb;

public interface DyxxbService {
    int deleteByPrimaryKey(Integer id);

    int insert(Dyxxb record);

    int insertSelective(Dyxxb record);

    Dyxxb selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Dyxxb record);

    int updateByPrimaryKey(Dyxxb record);
}