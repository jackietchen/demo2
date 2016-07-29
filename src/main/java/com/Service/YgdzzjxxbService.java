package com.Service;

import java.util.List;

import com.Pojo.Ygdzzjxxb;

public interface YgdzzjxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Ygdzzjxxb record);

    int insertSelective(Ygdzzjxxb record);

    Ygdzzjxxb selectByPrimaryKey(Long lsh);

    List<Ygdzzjxxb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Ygdzzjxxb record);

    int updateByPrimaryKey(Ygdzzjxxb record);
}