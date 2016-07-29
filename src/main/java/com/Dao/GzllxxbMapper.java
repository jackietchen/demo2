package com.Dao;

import java.util.List;

import com.Pojo.Gzllxxb;

public interface GzllxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Gzllxxb record);

    int insertSelective(Gzllxxb record);

    Gzllxxb selectByPrimaryKey(Long lsh);
    
    List<Gzllxxb> selectByYg(String yg);

    int updateByPrimaryKeySelective(Gzllxxb record);

    int updateByPrimaryKey(Gzllxxb record);
}