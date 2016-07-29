package com.Service;

import java.util.List;

import com.Pojo.Jkzkb;

public interface JkzkbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Jkzkb record);

    int insertSelective(Jkzkb record);

    Jkzkb selectByPrimaryKey(Long lsh);

    List<Jkzkb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Jkzkb record);

    int updateByPrimaryKey(Jkzkb record);
}