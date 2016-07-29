package com.Service;

import java.util.List;

import com.Pojo.Ygxgryb;

public interface YgxgrybService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Ygxgryb record);

    int insertSelective(Ygxgryb record);

    Ygxgryb selectByPrimaryKey(Long lsh);

    List<Ygxgryb> selectByYg(String yg);
    
    List<Ygxgryb> selectByRy(Long ry);
    
    int updateByPrimaryKeySelective(Ygxgryb record);

    int updateByPrimaryKey(Ygxgryb record);
}