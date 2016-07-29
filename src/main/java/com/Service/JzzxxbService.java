package com.Service;

import com.Pojo.Jzzxxb;

public interface JzzxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Jzzxxb record);

    int insertSelective(Jzzxxb record);

    Jzzxxb selectByPrimaryKey(Long lsh);

    Jzzxxb selectByYgbh(String yg);
    
    int updateByPrimaryKeySelective(Jzzxxb record);

    int updateByPrimaryKey(Jzzxxb record);
}