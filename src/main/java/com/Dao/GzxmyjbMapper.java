package com.Dao;

import java.util.List;

import com.Pojo.Gzxmyjb;

public interface GzxmyjbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Gzxmyjb record);

    int insertSelective(Gzxmyjb record);

    Gzxmyjb selectByPrimaryKey(Long lsh);

    List<Gzxmyjb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Gzxmyjb record);

    int updateByPrimaryKey(Gzxmyjb record);
}