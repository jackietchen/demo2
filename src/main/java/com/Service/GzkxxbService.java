package com.Service;

import java.util.List;

import com.Pojo.Gzkxxb;

public interface GzkxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Gzkxxb record);

    int insertSelective(Gzkxxb record);

    Gzkxxb selectByPrimaryKey(Long lsh);

    List<Gzkxxb> selectByYg(String yg);
    
    List<Gzkxxb> selectByKhyh(Long khyh);
    
    int updateByPrimaryKeySelective(Gzkxxb record);

    int updateByPrimaryKey(Gzkxxb record);
}