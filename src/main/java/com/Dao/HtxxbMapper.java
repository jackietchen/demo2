package com.Dao;

import com.Pojo.Htxxb;

public interface HtxxbMapper {
    int deleteByPrimaryKey(Integer htzblsh);

    int insert(Htxxb record);

    int insertSelective(Htxxb record);

    Htxxb selectByPrimaryKey(Integer htzblsh);

    int updateByPrimaryKeySelective(Htxxb record);

    int updateByPrimaryKey(Htxxb record);
}