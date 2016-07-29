package com.Service;

import java.util.List;

import com.Pojo.Ryjbxxb;

public interface RyjbxxbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Ryjbxxb record);

    int insertSelective(Ryjbxxb record);

    Ryjbxxb selectByPrimaryKey(Long lsh);

    List<Ryjbxxb> selectByJg(String jg);
    
    int updateByPrimaryKeySelective(Ryjbxxb record);

    int updateByPrimaryKey(Ryjbxxb record);
}