package com.Dao;

import com.Pojo.Jzzgxb;

public interface JzzgxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Jzzgxb record);

    int insertSelective(Jzzgxb record);

    Jzzgxb selectByPrimaryKey(Long lsh);

    int updateByPrimaryKeySelective(Jzzgxb record);

    int updateByPrimaryKey(Jzzgxb record);
}