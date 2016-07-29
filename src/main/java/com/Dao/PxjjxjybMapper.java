package com.Dao;

import java.util.List;

import com.Pojo.Pxjjxjyb;

public interface PxjjxjybMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Pxjjxjyb record);

    int insertSelective(Pxjjxjyb record);

    Pxjjxjyb selectByPrimaryKey(Long lsh);

    List<Pxjjxjyb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Pxjjxjyb record);

    int updateByPrimaryKey(Pxjjxjyb record);
}