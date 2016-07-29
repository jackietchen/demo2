package com.Service;

import java.util.List;

import com.Pojo.Znqkxxb;

public interface ZnqkxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Znqkxxb record);

    int insertSelective(Znqkxxb record);

    Znqkxxb selectByPrimaryKey(Long lsh);

    List<Znqkxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Znqkxxb record);

    int updateByPrimaryKey(Znqkxxb record);
}