package com.Dao;

import com.Pojo.Mhxtdlmmb;

public interface MhxtdlmmbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Mhxtdlmmb record);

    int insertSelective(Mhxtdlmmb record);

    Mhxtdlmmb selectByPrimaryKey(Long lsh);
    Mhxtdlmmb selectAll();

    int updateByPrimaryKeySelective(Mhxtdlmmb record);

    int updateByPrimaryKey(Mhxtdlmmb record);
}