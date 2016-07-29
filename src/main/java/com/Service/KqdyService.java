package com.Service;

import java.util.List;

import com.Pojo.Kqdy;

public interface KqdyService {
    int deleteByPrimaryKey(Integer id);

    int insert(Kqdy record);

    int insertSelective(Kqdy record);

    Kqdy selectByPrimaryKey(Integer id);

    List<Kqdy> selectByDeptno(String deptno);
    
    int updateByPrimaryKeySelective(Kqdy record);

    int updateByPrimaryKey(Kqdy record);
}