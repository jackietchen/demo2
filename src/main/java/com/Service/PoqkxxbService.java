package com.Service;

import java.util.List;

import com.Pojo.Poqkxxb;

public interface PoqkxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Poqkxxb record);

    int insertSelective(Poqkxxb record);

    Poqkxxb selectByPrimaryKey(Long lsh);

    List<Poqkxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Poqkxxb record);

    int updateByPrimaryKey(Poqkxxb record);
}