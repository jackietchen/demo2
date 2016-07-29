package com.Service;

import java.util.List;

import com.Pojo.Zczsb;

public interface ZczsbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Zczsb record);

    int insertSelective(Zczsb record);

    Zczsb selectByPrimaryKey(Long lsh);

    List<Zczsb> selectBySsyg(String ssyg);
    
    int updateByPrimaryKeySelective(Zczsb record);

    int updateByPrimaryKey(Zczsb record);
}