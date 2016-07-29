package com.Pojo;

public class Kqdy {
    private Integer id;

    private String name;

    private String dyjc;

    private Integer type;

    private Integer dyxmlx;

    private String fzr;

    private Integer cpbs;

    private Integer qybz;

    private String discrib;

    private String deptno;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getDyjc() {
        return dyjc;
    }

    public void setDyjc(String dyjc) {
        this.dyjc = dyjc == null ? null : dyjc.trim();
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getDyxmlx() {
        return dyxmlx;
    }

    public void setDyxmlx(Integer dyxmlx) {
        this.dyxmlx = dyxmlx;
    }

    public String getFzr() {
        return fzr;
    }

    public void setFzr(String fzr) {
        this.fzr = fzr == null ? null : fzr.trim();
    }

    public Integer getCpbs() {
        return cpbs;
    }

    public void setCpbs(Integer cpbs) {
        this.cpbs = cpbs;
    }

    public Integer getQybz() {
        return qybz;
    }

    public void setQybz(Integer qybz) {
        this.qybz = qybz;
    }

    public String getDiscrib() {
        return discrib;
    }

    public void setDiscrib(String discrib) {
        this.discrib = discrib == null ? null : discrib.trim();
    }

    public String getDeptno() {
        return deptno;
    }

    public void setDeptno(String deptno) {
        this.deptno = deptno == null ? null : deptno.trim();
    }
}