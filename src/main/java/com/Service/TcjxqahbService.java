package com.Service;

import java.util.List;

import com.Pojo.Tcjxqahb;

public interface TcjxqahbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Tcjxqahb record);

    int insertSelective(Tcjxqahb record);

    Tcjxqahb selectByPrimaryKey(Long lsh);

    List<Tcjxqahb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Tcjxqahb record);

    int updateByPrimaryKey(Tcjxqahb record);
}