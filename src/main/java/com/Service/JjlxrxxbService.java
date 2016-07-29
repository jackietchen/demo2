package com.Service;

import java.util.List;

import com.Pojo.Jjlxrxxb;

public interface JjlxrxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Jjlxrxxb record);

    int insertSelective(Jjlxrxxb record);

    Jjlxrxxb selectByPrimaryKey(Long lsh);

    List<Jjlxrxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Jjlxrxxb record);

    int updateByPrimaryKey(Jjlxrxxb record);
}