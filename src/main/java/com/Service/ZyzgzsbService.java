package com.Service;

import java.util.List;

import com.Pojo.Zyzgzsb;

public interface ZyzgzsbService {
    int deleteByPrimaryKey(Integer id);

    int insert(Zyzgzsb record);

    int insertSelective(Zyzgzsb record);

    Zyzgzsb selectByPrimaryKey(Integer id);

    List<Zyzgzsb> selectBySsyg(String ssyg);
    
    List<Zyzgzsb> selectByZslb(Integer zslb);
    
    List<Zyzgzsb> selectByBgbm(String bgbm);
    
    int updateByPrimaryKeySelective(Zyzgzsb record);

    int updateByPrimaryKey(Zyzgzsb record);
}