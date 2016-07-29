package com.Dao;

import java.util.List;

import com.Pojo.Jdzzxxb;

public interface JdzzxxbMapper {
    int deleteByPrimaryKey(Integer lsh);

    int insert(Jdzzxxb record);

    int insertSelective(Jdzzxxb record);

    Jdzzxxb selectByPrimaryKey(Integer lsh);

    List<Jdzzxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Jdzzxxb record);

    int updateByPrimaryKey(Jdzzxxb record);
}