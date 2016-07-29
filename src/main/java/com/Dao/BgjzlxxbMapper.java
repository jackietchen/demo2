package com.Dao;

import java.util.List;

import com.Pojo.Bgjzlxxb;

public interface BgjzlxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Bgjzlxxb record);

    int insertSelective(Bgjzlxxb record);

    Bgjzlxxb selectByPrimaryKey(Long lsh);

    List<Bgjzlxxb> selectByWjm(String wjm);
    
    int updateByPrimaryKeySelective(Bgjzlxxb record);

    int updateByPrimaryKey(Bgjzlxxb record);
}