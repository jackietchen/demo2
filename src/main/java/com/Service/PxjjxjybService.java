package com.Service;

import java.util.List;

import com.Pojo.Pxjjxjyb;

public interface PxjjxjybService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Pxjjxjyb record);

    int insertSelective(Pxjjxjyb record);

    Pxjjxjyb selectByPrimaryKey(Long lsh);

    List<Pxjjxjyb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Pxjjxjyb record);

    int updateByPrimaryKey(Pxjjxjyb record);
}