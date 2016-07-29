package com.Dao;


import com.Pojo.Ygda;

public interface YgdaMapper {
    int deleteByPrimaryKey(String ygbh);

    int insert(Ygda record);

    int insertSelective(Ygda record);

    Ygda selectByPrimaryKey(String ygbh);
    
    Ygda selectByLogin(Ygda record);

    int updateByPrimaryKeySelective(Ygda record);

    int updateByPrimaryKey(Ygda record);
}