package com.Dao;

import com.Pojo.Jzzxxb;

public interface JzzxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Jzzxxb record);
    
    
    int insertSelective(Jzzxxb record);

    Jzzxxb selectByPrimaryKey(Long lsh);

    Jzzxxb selectByYgbh(String yg);
    
    int updateByPrimaryKeySelective(Jzzxxb record);

    int updateByPrimaryKey(Jzzxxb record);
}