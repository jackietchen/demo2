package com.Dao;

import java.util.List;

import com.Pojo.Yhdljlb;

public interface YhdljlbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Yhdljlb record);

    int insertSelective(Yhdljlb record);

    Yhdljlb selectByPrimaryKey(Long lsh);

    List<Yhdljlb> selectBySzdw(String szdw);
    
    int updateByPrimaryKeySelective(Yhdljlb record);

    int updateByPrimaryKey(Yhdljlb record);
}