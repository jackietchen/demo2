<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>上海宏波工程咨询管理有限公司</title>
	<!--中间的样式 -->
	<link href="css/admin-login.css" rel="stylesheet" type="text/css" />
	<!--表单验证提示的样式 -->
	<link href="css/ValidformStyle.css" rel="stylesheet" type="text/css" media="all" />
    <!--最上面的样式 -->
	<link href="css/common.css" rel="stylesheet" type="text/css"  />
    <!--按钮之类的样式 -->
	<link href="css/main.css" rel="stylesheet" type="text/css"  />
    <!--底部的样式 -->
	<link href="css/login.css" rel="stylesheet" type="text/css"  />
	
	
	<script src="js/jquery-3.1.0.min.js" type="text/javascript"></script>
	<script src="js/login.js" type="text/javascript" ></script>
	<script src="js/Validform_v5.3.2_min.js" type="text/javascript" ></script>

	
</head>
<body>

	<div class="topbar-wrap white" style="height:80px">
        <div class="topbar-inner clearfix">
            <div class="topbar-logo-wrap clearfix">
                <h1 class="topbar-logo none"><a href="index.html" class="navbar-brand">后台管理</a></h1>
                <ul class="navbar-list clearfix">
                    <li style=" height:100px"><a href="index.html"><img src="images/LOGO2.png" /></a></li>
                    <li style="margin-top:10px; font-size:16px"><h2>宏波集团信息门户系统登录</h2></li>
                </ul>
            </div>
            <div class="top-info-wrap" style="margin-top:10px">

                <ul class="top-info-list clearfix">
                    <li><a href="#">官网首页</a></li>
                    <li><a href="#">登录说明</a></li>

                </ul>
            </div>
        </div>
    </div>


   <div class="admin_login_wrap clearfix">
        <div class="admin_login_w">
         	<img src="images/cube.png" />
        </div>

        <div class="admin_login_yuliu" style="margin-left:50px">
            <div class="adming_login_border">
                <div class="admin_input">
                    <form id="login" class="registerform" action="" method="post">
                        <ul class="admin_items">
                            <li>
                                <label>姓名：</label>
                                <input class="admin_input_style" type="text" name="username" id="username" datatype="*2-6" nullmsg="请填写姓名！" placeholder="请填写姓名..." errormsg="格式不正确！" style="width:200px" />
                            </li>
                            <li>
                                <label>身份证号：</label>
                                <input class="admin_input_style" type="text" name="usercode" datatype="*16-18" id="usercode" placeholder="请填写身份证号..." maxlength="18" nullmsg="请填写身份证号！" errormsg="格式不正确！" style="width:200px" />
                            </li>
                            <li>
                                <label>所在单位：</label>
                                <select class="admin_input_style" name="usertype" nullmsg="请选择所在单位！" id="usertype" style="width:200px">
                                    <option value="">请选择所在单位!</option>
                                </select>
                            </li>
                            <li>
                                <label>手机号码：</label>
                                <input class="admin_input_style" type="text" name="userphone" datatype="m" placeholder="请填写手机号码..." nullmsg="请填写手机号码！" maxlength="11" id="userphone" errormsg="格式不正确！" style="width:200px" />
                            </li>
                            <li>
                                <label>登录密码：</label>
                                <input class="admin_input_style" type="password" name="password" id="password" placeholder="请填写登录密码..." datatype="s6-18" nullmsg="请填写登录密码！" errormsg="格式不正确！" style="width:200px" />
                            </li>
                            <li class="admin_verification_item">
                                <label>验证码：</label>
                                <input class="admin_input_style" type="text" name="input1" id="input1" style="width:200px" />
                                <input type="button" id="checkCode" class="code" style="width:60px" onclick="createCode()" />
                            </li>
                            <li class="admin_submit_item clearfix">

                                <input type="button" value="登录" class="btn btn-primary pull-left" id="submit"/>
                                <input type="button" value="重置" class="btn pull-right" id="reset" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <div class="bottom">
          	版权所有© 2016 上海宏波工程咨询管理有限公司&nbsp;技术支持：021-60150108&nbsp;QQ：853149816
    </div>
</body>
</html>