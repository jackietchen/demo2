package com.Service;

import java.util.List;

import com.Pojo.Fmqkxxb;

public interface FmqkxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Fmqkxxb record);

    int insertSelective(Fmqkxxb record);

    Fmqkxxb selectByPrimaryKey(Long lsh);

    List<Fmqkxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Fmqkxxb record);

    int updateByPrimaryKey(Fmqkxxb record);
}