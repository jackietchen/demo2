package com.Dao;

import java.util.List;

import com.Pojo.Drwbzjjlb;

public interface DrwbzjjlbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Drwbzjjlb record);

    int insertSelective(Drwbzjjlb record);

    Drwbzjjlb selectByPrimaryKey(Long lsh);

    List<Drwbzjjlb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Drwbzjjlb record);

    int updateByPrimaryKey(Drwbzjjlb record);
}