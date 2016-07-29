package com.Dao;

import java.util.List;

import com.Pojo.Khyhxxb;

public interface KhyhxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Khyhxxb record);

    int insertSelective(Khyhxxb record);

    Khyhxxb selectByPrimaryKey(Long lsh);

    Khyhxxb selectByYhbh(String yhbh);
    
    List<Khyhxxb> selectAll();
    
    int updateByPrimaryKeySelective(Khyhxxb record);

    int updateByPrimaryKey(Khyhxxb record);
}