package com.Dao;

import com.Pojo.Xmxxb;

public interface XmxxbMapper {
    int deleteByPrimaryKey(Integer gcbid);

    int insert(Xmxxb record);

    int insertSelective(Xmxxb record);

    Xmxxb selectByPrimaryKey(Integer gcbid);

    int updateByPrimaryKeySelective(Xmxxb record);

    int updateByPrimaryKey(Xmxxb record);
}