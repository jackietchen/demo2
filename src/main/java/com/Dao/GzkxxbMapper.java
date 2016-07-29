package com.Dao;

import java.util.List;

import com.Pojo.Gzkxxb;

public interface GzkxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Gzkxxb record);

    int insertSelective(Gzkxxb record);

    Gzkxxb selectByPrimaryKey(Long lsh);

    List<Gzkxxb> selectByYg(String yg);
    
    List<Gzkxxb> selectByKhyh(Long khyh);
    
    int updateByPrimaryKeySelective(Gzkxxb record);

    int updateByPrimaryKey(Gzkxxb record);
}