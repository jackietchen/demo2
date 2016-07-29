package com.Service;

import java.util.List;

import com.Pojo.Yyjpcnlb;

public interface YyjpcnlbService {
    int deleteByPrimaryKey(Long lsh);

    int insert(Yyjpcnlb record);

    int insertSelective(Yyjpcnlb record);

    Yyjpcnlb selectByPrimaryKey(Long lsh);

    List<Yyjpcnlb> selectByYg(String yg);
    
    int updateByPrimaryKeySelective(Yyjpcnlb record);

    int updateByPrimaryKey(Yyjpcnlb record);
}