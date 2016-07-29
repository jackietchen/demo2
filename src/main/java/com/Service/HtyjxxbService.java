package com.Service;

import java.util.List;

import com.Pojo.Htyjxxb;

public interface HtyjxxbService
 {
    int deleteByPrimaryKey(Long lsh);

    int insert(Htyjxxb record);

    int insertSelective(Htyjxxb record);

    Htyjxxb selectByPrimaryKey(Long lsh);

    List<Htyjxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Htyjxxb record);

    int updateByPrimaryKey(Htyjxxb record);
}