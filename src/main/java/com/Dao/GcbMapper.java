package com.Dao;

import java.util.List;

import com.Pojo.Gcb;

public interface GcbMapper {
    int deleteByPrimaryKey(Integer gcbid);

    int insert(Gcb record);

    int insertSelective(Gcb record);

    Gcb selectByPrimaryKey(Integer gcbid);

    List<Gcb> selectByDepNo(String depNo);
    
    List<Gcb> selectByXmfzr(String xmfzr);
    
    List<Gcb> selectByLike(Gcb record);
    
    List<Gcb> selectByLikes(Gcb record);
    
    int updateByPrimaryKeySelective(Gcb record);

    int updateByPrimaryKey(Gcb record);
}