package com.Dao;

import java.util.List;

import com.Pojo.Xlzsb;

public interface XlzsbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Xlzsb record);

    int insertSelective(Xlzsb record);

    Xlzsb selectByPrimaryKey(Long lsh);

    List<Xlzsb> selectBySsyg(String ssyg);
    
    int updateByPrimaryKeySelective(Xlzsb record);

    int updateByPrimaryKey(Xlzsb record);
}