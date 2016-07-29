package com.Service;

import java.util.List;

import com.Pojo.Xwzsb;

public interface XwzsbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Xwzsb record);

    int insertSelective(Xwzsb record);

    Xwzsb selectByPrimaryKey(Long lsh);

    List<Xwzsb> selectBySsyg(String ssyg);
    
    int updateByPrimaryKeySelective(Xwzsb record);

    int updateByPrimaryKey(Xwzsb record);
}