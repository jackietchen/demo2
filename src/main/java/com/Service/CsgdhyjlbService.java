package com.Service;

import java.util.List;

import com.Pojo.Csgdhyjlb;

public interface CsgdhyjlbService {
    int deleteByPrimaryKey(Long lsh);

    int deleteByYg(String yg);
    
    int insert(Csgdhyjlb record);

    int insertSelective(Csgdhyjlb record);

    Csgdhyjlb selectByPrimaryKey(Long lsh);

    List<Csgdhyjlb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Csgdhyjlb record);

    int updateByPrimaryKey(Csgdhyjlb record);
}