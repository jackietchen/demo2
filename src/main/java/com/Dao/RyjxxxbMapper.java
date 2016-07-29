package com.Dao;

import java.util.List;

import com.Pojo.Ryjxxxb;

public interface RyjxxxbMapper {
    int deleteByPrimaryKey(Long lsh);

    int insert(Ryjxxxb record);

    int insertSelective(Ryjxxxb record);

    Ryjxxxb selectByPrimaryKey(Long lsh);

    List<Ryjxxxb> selectByYg(String yg);
    
    List<Ryjxxxb> selectByGc(Long gc);
    
    List<Ryjxxxb> selectByRyjb(Long ryjb);
    
    List<Ryjxxxb> selectBySsbm(String ssbm);
    
    List<Ryjxxxb> selectByJg(String jg);
    
    List<Ryjxxxb> selectByLike(Ryjxxxb record);
    
    int updateByPrimaryKeySelective(Ryjxxxb record);

    int updateByPrimaryKey(Ryjxxxb record);
}