package com.Service;

import com.Pojo.Bmxxb;

public interface BmxxbService {
    int deleteByPrimaryKey(String no);

    int insert(Bmxxb record);

    int insertSelective(Bmxxb record);

    Bmxxb selectByPrimaryKey(String no);

    int updateByPrimaryKeySelective(Bmxxb record);

    int updateByPrimaryKey(Bmxxb record);
}