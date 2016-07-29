<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>上海宏波工程咨询管理有限公司</title>



<link rel="stylesheet" type="text/css" href="css/common.css"/>
<link rel="stylesheet" type="text/css" href="css/main.css"/>

<script src="js/jquery-3.1.0.min.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
</head>
<body style=" background-color:#e4e9f1;">

<script type="text/javascript">


</script>



    <div class="topbar-wrap white" style="height:80px">
        <div class="topbar-inner clearfix">
            <div class="topbar-logo-wrap clearfix">
                <ul class="navbar-list clearfix">
                    <li style=" height:100px"><a href="index.html"><img src="images/LOGO2.png" /></a></li>
                    <li style="margin-top:10px; font-size:16px"><h2>宏波集团信息门户系统</h2></li>
                </ul>
            </div>
            <div class="top-info-wrap" >
                <ul class="top-info-list clearfix" >
                    <li><a href="main.jsp">主页</a></li>
                    <li><a onclick="jsz();" style="cursor:pointer; color:white">在线帮助</a></li>
                    <li><a onclick="jsz();" style="cursor:pointer; color:white">通知公告</a></li>
                    <li><a onclick="remove_click();" style="cursor:pointer; color:white">登录注销</a></li>
                </ul>
                <br />
                <div class="top-info-gb" style="margin-top: -15px;"><i class="icon-font">&#xe06b;</i><span>&nbsp;当前用户：<span id="usasder_name"></span> &nbsp;&nbsp; 所在单位：<span id="dan_wei"></span>&nbsp;&nbsp;&nbsp;所在部门：<span id="szbm_id"></span> &nbsp;&nbsp; 信息采集标识：<span id="xxjc_bs"></span> &nbsp;&nbsp; <span id="new_date"></span></span></div>
            </div>

        </div>
    </div>
    <div class="container clearfix">
        <div class="main-wrap">
            <div class="result-wrap right-wrap">
                <div class="result-title">
                    <h1>系统功能区</h1>
                </div>
                <div class="result-content clearfix">
                    <div class="short-wrap">
                        <a  onclick="ygxxcx();" href="ygxxdjym.jsp" style="cursor:pointer; background-image:url(images/a.png)"></a>
                        <a onclick="prints();" style="cursor:pointer; background-image:url(images/b.png)"></a>
                        <a href="dzzsscxz.html" style="cursor:pointer; background-image:url(images/c.png)"></a>
                        <a href="rlzybgxz.html" style="cursor:pointer; background-image:url(images/d.png)"></a>
                    </div>
                </div>
            </div>

        </div>
        <!--/main-->
        <div class="scrollToTop"></div>
    </div>
    <p class="copyright">版权所有© 2016 上海宏波工程咨询管理有限公司</p>

</body>
</html>