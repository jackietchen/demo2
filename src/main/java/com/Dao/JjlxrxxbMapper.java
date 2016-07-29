package com.Dao;

import java.util.List;

import com.Pojo.Jjlxrxxb;

public interface JjlxrxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Jjlxrxxb record);

    int insertSelective(Jjlxrxxb record);

    Jjlxrxxb selectByPrimaryKey(Long lsh);

    List<Jjlxrxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Jjlxrxxb record);

    int updateByPrimaryKey(Jjlxrxxb record);
}