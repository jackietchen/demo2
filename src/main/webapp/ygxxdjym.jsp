<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>上海宏波工程咨询管理有限公司</title>



<link rel="stylesheet" type="text/css" href="css/common.css"/>
<link rel="stylesheet" type="text/css" href="css/main.css"/>
<link rel="stylesheet" type="text/css" href="css/ui-dialog.css"/>

<script src="js/jquery-3.1.0.min.js" type="text/javascript"></script>
<script src="js/dialog-min.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
<script src="js/tableForm.js" type="text/javascript"></script>
<script src="js/My97DatePicker/WdatePicker.js" type="text/javascript"></script>
<script src="js/ygxxdj.js" type="text/javascript"></script>
<script src="js/jspdf.min.js" type="text/javascript"></script>

</head>
<body>
	 <div class="body-container">
 		<div class="topbar-wrap white" style="height:80px">
            <div class="topbar-inner clearfix">
                <div class="topbar-logo-wrap clearfix">
                    <h1 class="topbar-logo none"><a href="index.html" class="navbar-brand">后台管理</a></h1>
                    <ul class="navbar-list clearfix">
                        <li style=" height:100px"><a href="index.html"><img src="images/LOGO2.png" /></a></li>
                        <li style="margin-top:10px; font-size:16px"><h2>宏波集团信息门户系统</h2></li>
                    </ul>
                </div>
                <div class="top-info-wrap">

                    <ul class="top-info-list clearfix">
                        <li><a href="index.html">主页</a></li>
                        <li><a href="">在线帮助</a></li>
                        <li><a onclick="jsz();" style="cursor:pointer; color:white">通知公告</a></li>
                        <li><a onclick="remove_click();" style="cursor:pointer; color:white">注销</a></li>
                        <li><a href="login.html">退出系统</a></li>
                    </ul>
                    <br />
                    <div class="top-info-gb" style="margin-top: -15px;"><i class="icon-font">&#xe06b;</i><span>&nbsp;当前用户：<span id="usasder_name"></span> &nbsp;&nbsp; 所在单位：<span id="dan_wei"></span>&nbsp;&nbsp;&nbsp;所在部门：<span id="szbm_id"></span> &nbsp;&nbsp; 信息采集标识：<span id="xxjc_bs"></span> &nbsp;&nbsp; <span id="new_date"></span></span></div>
                </div>

            </div>
        </div>

        <div class="result-wrap">
    <form action="#" method="post" id="myform" name="myform">
        <div class="config-items">
            <div class="config-title">
                <h1><i class="icon-font">&#xe00a;</i>员工信息登记</h1>
            </div>
            <div class="result-content">
                <form action="" method="post">
                    <h1 class="form-title">员工信息登记表（平台版）（2016版）</h1>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="10" align="center">
                                    个人基本信息
                                    <a class="btn mr10 switchForm">-</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody style=" background-color:#e4e9f1;">
                            <tr>
                                <th width="70">姓名:</th>
                                <td width="170"><input type="text" id="usernames" readonly="readonly" style="background:#ccc; border:none; opacity:0.5;
 filter:alpha(opacity=50) "></td>
                                <th width="50">性别:</th>
                                <td width="150">
                                    <label class="radio">
                                        <input type="radio" name="sex1" value="1"> 男
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="sex1" value="2"> 女
                                    </label><span style="color:red">*(单选)</span>
                                </td>
                                <th width="70">民族:</th>
                                <td width="100"><input type="text" class="common-text btn100" style="width:60px" id="minzu">族<span style="color:red">*
</span></td>
                                <th width="80">手机号码:</th>
                                <td width="90" colspan="2"><input type="text" class="common-text btn100" id="mobile" style="width:240px" maxlength="11"
><span style="color:red">*(单选)</span></td>
                                <td width="120" rowspan="5">
                                    <div class="file-upload-container">
                                        <p><div id="localImag"><img id="preview" width="100px" height="100px" style="diplay:none; width:120px; height:
150px" /></div></p>
                                        
                                        <a class="upload" href="javascript:;">
                                            上传
                                            <input class="hide" type="file" name="doc" id="doc" width="100px;" height="100px" onchange="selectImage(
this);" />
                                        </a>
                                        <a class="delete" href="javascript:;" onclick="clear_img()">删除</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th width="80">身份证号:</th>
                                <td colspan="2"><input type="text" id="sfzh" readonly="readonly" style="background:#ccc; border:none; opacity:0.5; 
filter:alpha(opacity=50) " /></td>
                                <th width="80">所在部门:</th>
                                <td colspan="2"><input type="text" id="szbm" readonly="readonly" style="background:#ccc; border:none; opacity:0.5; 
filter:alpha(opacity=50) " /></td>
                                <th>出生日期:</th>
                                <td colspan="2"><input type="text" class="common-text btn100" style=" width:180px" id="csrq" onclick="WdatePicker()" />
<span style="color:red">*</span></td>
                            </tr>
                            <tr>
                                <th>婚姻状况:</th>
                                <td colspan="2" style="width:380px">
                                    <label class="radio">
                                        <input type="radio" name="marry" value="1"> 未婚
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="marry" value="2"> 已婚
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="marry" value="3"> 离异
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="marry" value="4"> 丧偶
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                                <th>政治面貌:</th>
                                <td colspan="5">
                                    <label class="radio">
                                        <input type="radio" name="political" value="1"> 中共党员（含预备）
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="political" value="2"> 民主党派
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="political" value="3"> 群众
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="political" value="4"> 共青团员
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>身高:</th>
                                <td style=""><input type="text" class="common-text btn2" id="shengao" /> Cm<span style=" color:red">*</span></td>
                                <th>体重:</th>
                                <td><input type="text" class="common-text btn2" id="tizhong" /> Kg<span style=" color:red">*</span></td>
                                <th>服装型号:</th>
                                <td colspan="4">
                                    <label class="radio">
                                        <input type="radio" name="size" value="5"> S（±155cm）
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="size" value="10"> M（±160cm）
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="size" value="15"> L（±165cm）
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="size" value="20"> XL（±168cm）
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="size" value="25"> XXL
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="size" value="30"> XXXL
                                    </label>
                                    <span style=" color:red">*(单选)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>籍贯:</th>
                                <td>
                                    <select class="common-text btn100" name="jiguan" style="width:120px" id="jiguan">
                                        <option value="0">选择</option>
                                    </select><span style=" color:red">*(单选)</span>
                                </td>
                                <th>户籍性质:</th>
                                <td colspan="4">
                                    <label class="radio">
                                        <input type="radio" name="residence" value="5"> 农业
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="residence" value="10"> 非农业（含家庭户）
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="residence" value="15"> 集体户口
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                                <th>员工类别:</th>
                                <td colspan="1">
                                    <label class="radio">
                                        <input type="radio" name="sort" value="5"> 实习生
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="sort" value="10"> 正式职工
                                    </label><span style=" color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th>户籍地址:</th>
                                <td colspan="4">
                                    <input type="text" class="common-text btn100" style="width:90%" id="hjdz" /><span style=" color:red">*</span>
                                </td>
                                <th>现居住地:</th>
                                <td colspan="5">
                                    <input type="text" class="common-text btn100" style="width:90%" id="xjzd" /><span style=" color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th>当前职称:</th>
                                <td colspan="9">
                                    <label class="radio">
                                        <input type="radio" name="post" value="5"> 教授级高工
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="10"> 高级工程师（非农委）
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="15"> 农委高工
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="20"> 工程师(非农委)
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="22"> 农委工程师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="25"> 助理工程师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="30"> 高级经济师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="35"> 经济师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="36"> 助理经济师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="37"> 高级会计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="38"> 会计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="39"> 助理会计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="40"> 高级政工师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="41"> 政工师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="42"> 助理政工师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="43"> 高级统计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="44"> 统计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="45"> 助理统计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="46"> 高级审计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="47"> 审计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="48"> 助理审计师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="49"> 研究员
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="50"> 副研究员
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="51"> 助理研究员
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="52"> 高级实验师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="53"> 实验师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="54"> 助理实验师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="55"> 技师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="56"> 一级律师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="57"> 二级律师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="58"> 三级律师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="59"> 助理律师
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="60"> 高级编辑
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="61"> 主任编辑
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="62"> 编辑
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="63"> 助理编辑
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="69"> 其它
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="post" value="70"> 无职称
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>最高学历:</th>
                                <td colspan="5">
                                    <label class="radio">
                                        <input type="radio" name="education" value="5"> 高中、 中专
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="education" value="10"> 大专
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="education" value="15"> 本科
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="education" value="20"> 硕士研究生
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="education" value="25"> MBA、EMBA
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="education" value="30"> 工硕
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="education" value="35"> 博士
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="education" value="40"> 博士后
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                                <th>最高学位:</th>
                                <td colspan="4" style="width:35%">
                                    <label class="radio">
                                        <input type="radio" name="degree" value="5"> 博士后学位
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="degree" value="10"> 博士学位
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="degree" value="15"> 硕士学位
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="degree" value="20"> 学士学位
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="degree" value="25"> 无学位
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="2">有无其他未登记证书注册在其它单位:</th>
                                <td colspan="2">
                                    <label class="radio">
                                        <input type="radio" name="note1" value="1"> 有记录
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="note1" value="2"> 无记录
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                                <th colspan="2">入职前5年有无行政拘留记录:</th>
                                <td colspan="8">
                                    <label class="radio">
                                        <input type="radio" name="note2" value="1"> 有记录
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="note2" value="2"> 无记录
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="2">入职前5年有无获刑事犯罪记录:</th>
                                <td colspan="2">
                                    <label class="radio">
                                        <input type="radio" name="note3" value="1"> 有记录
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="note3" value="2"> 无记录
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                                <th colspan="2">是否有其他违反国家法律法规行为:</th>
                                <td colspan="8">
                                    <label class="radio">
                                        <input type="radio" name="note4" value="1"> 有记录
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="note4" value="2"> 无记录
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="2">入职前社保状态:</th>
                                <td colspan="5">
                                    <label class="radio">
                                        <input type="radio" name="rada" value="5"> 三险
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="rada" value="10"> 五险(城保)
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="rada" value="15"> 镇保过渡
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="rada" value="20"> 一次性补偿
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="rada" value="25"> 个人缴纳(农保)
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="rada" value="30"> 综保
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="rada" value="35"> 其它
                                    </label>
                                    <span style=" color:red">*(单选)</span>
                                </td>
                                <th style="width:150px">入职前的公积金账号:</th>
                                <td colspan="3">
                                    <input type="text" class="common-text btn100" style=" width:90%" id="rzqdgjjzh" />
                                    <span style=" color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="2">参加工作时间:</th>
                                <td colspan="4">
                                    <input type="text" class="common-text btn100" style=" width:90%" id="cjgzsj" onclick="WdatePicker()" /><span style=
" color:red">*</span>
                                </td>
                                <th colspan="2">进入本企业时间:</th>
                                <td colspan="4">
                                    <input type="text" class="common-text btn100" style="width:90%" id="jrbqysj" onclick="WdatePicker()" /><span style=
" color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="10">
                                    <input type="button" value="保存" class="btn btn-primary btn6 mr10" onclick="grjbxx_click()">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="jzzxxb_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="4" align="center">
                                    上海市居住证信息
                                    <a class="btn mr10 switchForm">+</a>
<!--                                     <a class="btn mr10 switchForm" onclick="jzzxxb_search();">+</a> -->
                                </th>
                            </tr>
                        </thead>
                        <tbody style=" background-color:#e4e9f1;">
                            <tr>
                                <th colspan="13" align="left" style="color:red">
                                    ☺友情提示：填报后，我们会及时提醒您办理居住证续期→居住证积分→居转户。我们全程协助哦！
                                </th>
                            </tr>
                            <tr>
                                <th>是否具有上海市居住证:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="papers" value="5" onclick="jzz_radio(5)"> 是
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="papers" value="10" onclick="jzz_radio(10)"> 否
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="papers" value="15" onclick="jzz_radio(15)"> 不需要（不涉及）
                                    </label><span style=" color:red">*(单选)</span>
                                </td>
                                <th>居住证类别:</th>
                                <td colspan="2">
                                    <label class="radio">
                                        <input type="radio" name="papers sort" value="5"> 上海市居住证
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="papers sort" value="10"> 上海市临时居住证
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="papers sort" value="15"> 不明确
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="papers sort" value="20"> 其它
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>初次申领居住证时间:</th>
                                <td>
                                    <input type="text" class="common-text btn6" id="ccsljzzsj" style="width:200px; " onclick="WdatePicker()" />
                                </td>
                                <th>居住证有效期（至）:</th>
                                <td colspan="2">
                                    <input type="text" class="common-text btn6" id="jzzyxq" style="width:200px" onclick="WdatePicker()" />
                                </td>
                            </tr>
                            <tr>
                                <th>居住地地址(与证一致):</th>
                                <td colspan="4">
                                    <input type="text" class="common-text btn6" style="width:90%;  " id="jzddz" />
                                </td>
                            </tr>
                            <tr>
                                <th colspan="5">
                                    <input type="button" value="保存" class="btn btn-primary btn6 mr10" onclick="jzzxxb_update();">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="xlzsqk();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="13" align="center">
                                    学历证书情况
                                    <a class="btn mr10 switchForm">+</a>
<!--                                     <a class="btn mr10 switchForm" onclick="xlzsqk();">+</a> -->
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="13" align="left" style="color:red">
                                    ☺友情提示：大专及以上学历的，本栏目必填。否则，无法打印哦！填报后，我们将会把学历晋升机会留给你哦！ 
（不要用简称。北大是北京大学！，一字不错！）
                                    <a class="addLine xuelizsqk" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>学校名称</th>
                                <th width="100px">学历</th>
                                <th>学制（年）</th>
                                <th width="100px">学习形式</th>
                                <th>所学专业</th>
                                <th>校（院）长</th>
                                <th>起止时间</th>
                                <th>证书编号</th>
                                <th>发证日期</th>
                                <th width="100px">电子注册码</th>
                                <th width="60px">备注</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="xl_a"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="13">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="xueweizsqk();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="10" align="center">
                                    学位证书情况
                                    <a class="btn mr10 switchForm" onclick="xueweizsqk();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="10" align="left" style="color:red">
                                    ☺友情提示：大专及以上学历的，本栏目必填。否则，无法打印哦！填报后，我们将会把学历晋升机会留给你哦！ 
（不要用简称。北大是北京大学！，一字不错！）
                                    <a class="addLine xueweizsqk" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>学校名称</th>
                                <th>学位</th>
                                <th>学位名称</th>
                                <th>所学专业</th>
                                <th>学位评定委员会主席</th>
                                <th>证书编号</th>
                                <th>发证日期</th>
                                <th>备注</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="xueweia"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="10">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="zczsqk();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="12" align="center">
                                    职称证书情况
                                    <a class="btn mr10 switchForm" onclick="zczsqk();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="12" align="left" style="color:red">
                                    ☺友情提示：有职称人员，本栏目必填。否则，无法打印哦！（不要用简称。北大是北京大学！，一字不错！）您应该知道，职称对
您的职业生涯很重要！我们将根据您的信息，向你推送职称相关的考评信息。
                                    <a class="addLine zhichengzsqk" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>职称</th>
                                <th>职称专业</th>
                                <th>钢印单位全称</th>
                                <th width="150px">职称评审委员会全称</th>
                                <th width="120px">制（发）证机构</th>
                                <th>证书编号</th>
                                <th>评审编号</th>
                                <th>通过（批准）日期</th>
                                <th>有效期至</th>
                                <th width="60px">备注</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="zczsqka"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="12">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="peixunjjxjyqk();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style=" width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="8" align="center">
                                    培训及继续教育情况
                                    <a class="btn mr10 switchForm" onclick="peixunjjxjyqk();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="8" align="left" style="color:red">
                                    ☺友情提示：参加继续教育、职业技能培训是您职业生涯可持续发展的重要部分。希望您坚持哦！
                                    <a class="addLine peixunjjxjyqk" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th width="350px">培训时间</th>
                                <th>培训机构</th>
                                <th>培训（学习）内容</th>
                                <th>证书名称</th>
                                <th>证书编号</th>
                                <th>备注</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="peixunjjxjyqka"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="8">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="gzylxhcsgdhy_load();"
 />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style=" width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="2" align="center">
                                    工作以来先后从事过的行业
                                    <a class="btn mr10 switchForm" onclick="gzylxhcsgdhy_load();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="8" align="left" style="color:red">
                                    ☺友情提示：此栏必填！可以多选哦！让我们看看您的行业经历有多丰富吧。我们欢迎跨界人才。我们会把更合适的机会留给你哦！
                                </th>
                            </tr>
                            <tr>
                                <th>您工作以来先后从事过的行业:</th>
                                <td>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="5" id="chkjsdw"> 建设单位
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="10" id="chksj"> 设计
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="15" id="chksg"> 施工
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="20" id="chkjl"> 监理
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="25" id="chktzkz"> 投资控制
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="30" id="chkjggz"> 机关公职
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="35" id="chkkccl"> 勘察测量(绘)
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" name="cshy" value="40" id="chkqt"> 其它
                                    </label><span style="color:red">*(允许多选，至少一项)</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="2">
                                    <input type="button" value="保存" class="btn btn-primary btn6 mr10" onclick="csgdhyjlbgx();">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="gzllxxb_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="10" align="center">
                                    参加工作以来的工作履历情况
                                    <a class="btn mr10 switchForm" onclick="gzllxxb_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="10" align="left" style="color:red">
                                    ☺友情提示：此栏必填！让我们看看您的工作经历有多丰富吧。我们欢迎跨界人才。我们会把更合适的机会留给你哦！
                                    <a class="addLine canjiagzyldgzllqk" href="javascript:;">新增</a>
                                </th>
                            <tr>
                                <th width="50">序号</th>
                                <th>工作单位</th>
                                <th>起止时间</th>
                                <th>职称</th>
                                <th>职务岗位</th>
                                <th>从事工作专业</th>
                                <th>证明人</th>
                                <th>证明人电话</th>
                                <th>备注</th>
                                <th width="90">操作</th>
                            </tr>
                            </tr>
                        </tbody>
                        <tbody id="gzlla"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="10">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="wbzj_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="4" align="center">
                                    工作以来曾经或现在担任过外部专家情况
                                    <a class="btn mr10 switchForm" onclick="wbzj_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="10" align="left" style="color:red">
                                    ☺友情提示：原来您是这方面的专家！太赞了！我们将向在合适的场合推荐您！欢迎您参加今后学术交流！
                                </th>
                            </tr>
                            <tr>
                                <th>担任过外部专家:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="wbzj" value="1"> 是
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="wbzj" value="2" onclick="wbzj_chk(2)"> 否
                                    </label><span style="color:red">*(单选)</span>
                                </td>
                                <th>您工作以来曾经或现在担任过的外部专家工作</th>
                                <td>
                                    <label class="checkbox">
                                        <input type="checkbox" id="chkpbzj"> 评标（审）专家
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" id="chkzxlzzj"> 咨询论证专家
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" id="chkskzj"> 授课专家
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" id="chkjsl"> 教师类
                                    </label>
                                    <label class="checkbox">
                                        <input type="checkbox" id="chkqita"> 其它
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="2">担任过的外部专家情况描述（限30字）</th>
                                <td colspan="2">
                                    <input type="text" class="common-text btn100" id="txtmaoshu" />
                                </td>
                            </tr>
                            <tr>
                                <th colspan="4">
                                    <input type="button" value="保存" class="btn btn-primary btn6 mr10" onclick="wbzj_update()">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="cydgzxmyj_search();" 
/>
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login()">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="7" align="center">
                                    进入本企业，参与的工作项目业绩
                                    <a class="btn mr10 switchForm" onclick="cydgzxmyj_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="7" align="left" style="color:red">
                                    ☺友情提示：数据源自项目合同记录。如果发现错误，请联系我们！
                                    <a class="addLine jinrubqycydgzxmyj" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>起止时间</th>
                                <th>项目名称</th>
                                <th>工作专业</th>
                                <th>担任职务</th>
                                <th>备注</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="cydgzxmyja"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="7">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="zbtzsyj_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="13" align="center">
                                    在本企业以负责人（总监、总代）中标通知书业绩
                                    <a class="btn mr10 switchForm" onclick="zbtzsyj_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="13" align="left" style="color:red">
                                    ☺友情提示：数据源自项目中标通知书。如果发现错误，请联系我们！
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>报建编号</th>
                                <th>发包方式</th>
                                <th>项目名称</th>
                                <th>计费额（万元）</th>
                                <th>中标额（万元）</th>
                                <th>服务周期（天）</th>
                                <th width="200px">起止日期</th>
                                <th>发包单位</th>
                                <th>监督备案单位</th>
                                <th>签发时间</th>
                                <th>备注</th>
                            </tr>
                        </tbody>
                        <tbody id="zbtzsyja"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="13">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="htyj_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="10" align="center">
                                    在本企业以负责人（总监、总代）合同业绩
                                    <a class="btn mr10 switchForm" onclick="htyj_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="10" align="left" style="color:red">
                                    ☺友情提示：曾经做过或现在担任总监、总代的员工，请认真填写合同业绩情况，其它员工，可跳过，继续向下填写
                                    <a class="addLine zaibenqyyjfzrhtyj" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>合同编号</th>
                                <th>项目名称</th>
                                <th>项目专业</th>
                                <th>合同额（万元）</th>
                                <th>合同开工日期</th>
                                <th>合同竣工日期</th>
                                <th>甲方单位1(建设单位)</th>
                                <th>甲方单位2(项目管理)</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="htyj_a"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="10">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="ryjxxxb_search();" />
                                    <input type="button" value=" 离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login()">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="7" align="center">
                                    相关荣誉奖项情况
                                    <a class="btn mr10 switchForm" onclick="ryjxxxb_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="7" align="left" style="color:red;">
                                    ☺友情提示：有个人业绩或其它荣誉奖项的，请认真填写！
                                    <a class="addLine xiangguanryjxqk" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>对象类别</th>
                                <th>荣誉名称</th>
                                <th>颁奖组织全称</th>
                                <th>颁发时间</th>
                                <th>证明材料</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="xgryjxqk_a"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="7">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="grzyzsqk_search();" 
/>
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="13" align="center">
                                    个人执业证书情况
                                    <a class="btn mr10 switchForm" onclick="grzyzsqk_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="13" align="left" style="color:red">
                                    ☺友情提示：可新增按规定可由个人保管的那些证书，而由公司或部门保管的证书，本人无需填报，若您无执业证书，则该栏目可跳
过
                                    <a class="addLine gerenzyzsqk" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th width="50">序号</th>
                                <th>证书类别</th>
                                <th>颁证机构</th>
                                <th>发证日期</th>
                                <th>有效期至</th>
                                <th>证书编号</th>
                                <th>资格证号</th>
                                <th>注册号</th>
                                <th>所学专业</th>
                                <th>注册专业一</th>
                                <th>注册专业二</th>
                                <th>原件保管方</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="grzyzsqk_a"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="13">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="brdzzgx_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="4" align="center">
                                    本人党组织关系情况
                                    <a class="btn mr10 switchForm" onclick="brdzzgx_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="13" align="left" style="color:red">
                                    ☺友情提示：您是组织的一员哦。我们将会通知您参加今后的组织生活！
                                </th>
                            </tr>
                            <tr>
                                <th>党员类别:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="sorts" value="5"> 预备党员
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="sorts" value="10"> 正式党员
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="sorts" value="15"> 流动党员
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="sorts" value="20" onclick="dzzgx_rao(20)"> 非党员（不涉及）
                                    </label>
                                    <span style="color:red">*(单选)</span>
                                </td>
                                <th>所属党组织（全称）</th>
                                <td>
                                    <input type="text" class="common-text" id="dssdzz" />
                                </td>
                            </tr>
                            <tr>
                                <th>递交入党申请志愿日期</th>
                                <td>
                                    <input type="text" class="common-text" id="djrdsqzyrq" onclick="WdatePicker()" />
                                </td>
                                <th>批准（转正）日期</th>
                                <td>
                                    <input type="text" class="common-text" id="dpzzzrq" onclick="WdatePicker()" />
                                </td>
                            </tr>
                            <tr>
                                <th>其它情况说明</th>
                                <td>
                                    <input type="text" class="common-text" id="dqtqksm" style="width:90%" />
                                </td>
                            </tr>
                            <tr>
                                <th colspan="4">
                                    <input type="button" value="保存" onclick="brdzzgx_update();" class="btn btn-primary btn6 mr10">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="yyjjsjnl_search();" 
/>
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="4" align="center">
                                    语言及计算机能力
                                    <a class="btn mr10 switchForm" onclick="yyjjsjnl_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <th colspan="13" align="left" style="color:red">
☺友情提示：本栏目为必填项，不可跳过，否则，无法完成信息采集，也无法打印员工信息登记表</th>
                        <tr>
                            <th>外语语种:</th>
                            <td>
                                <input type="text" class="common-text" id="wyyz_a" style="width:90%" /><span style="color:red">*</span>
                            </td>
                            <th>外语水平</th>
                            <td>
                                <input type="text" class="common-text" style="width:90%" id="wysp_a" /><span style="color:red">*</span>
                            </td>
                        </tr>
                        <tr>
                            <th>计算机能力:</th>
                            <td>
                                <input type="text" class="common-text" style="width:90%" id="jsjnl_a" /><span style="color:red">*</span>
                            </td>
                            <th>普通话水平</th>
                            <td>
                                <input type="text" class="common-text" style="width:90%" id="pthsp_a" /><span style="color:red">*</span>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="4">
                                <input type="button" value="保存" class="btn btn-primary btn6 mr10" onclick="yyjjsjnl_update();">
                                <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="tcjxqah_search();" />
                                <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                            </th>
                        </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="4" align="center">
                                    特长及兴趣爱好
                                    <a class="btn mr10 switchForm" onclick="tcjxqah_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="13" align="left" style="color:red">
☺友情提示：我们诚邀您参加公司组织的文娱活动，如运动会、拓展、联欢会、沙龙等。告诉我们，您的特长吧！</th>
                            </tr>
                            <tr>
                                <th>特长:</th>
                                <td>
                                    <input type="text" class="common-text" style="width:90%" id="tc_a" /><span style="color:red">*</span>
                                </td>
                                <th>兴趣爱好:</th>
                                <td>
                                    <input type="text" class="common-text" style="width:90%" id="xqah_a" /><span style="color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="4">
                                    <input type="button" value="保存" class="btn btn-primary btn6 mr10" onclick="tcjxqah_update();">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="jkzkb_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="4" align="center">
                                    本人健康状况
                                    <a class="btn mr10 switchForm" onclick="jkzkb_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="13" align="left" style="color:red">
☺友情提示：这个很重要！我们的员工保障计划将会突出重点。请您如实填报。记得，锻炼身体哦！</th>
                            </tr>
                            <tr>
                                <th>曾患的重大疾病:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="illness1" value="1"> 有
                                    </label>
                                    <input type="text" class="common-text" id="chzdjb_a" />
                                    <label class="radio">
                                        <input type="radio" name="illness1" value="2"> 无
                                    </label><span style="color:red">*</span>
                                </td>
                                <th>有无心脏病史:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="illness2" value="1"> 有
                                    </label>
                                    <input type="text" class="common-text" id="ywxzbs_a" />
                                    <label class="radio">
                                        <input type="radio" name="illness2" value="2"> 无
                                    </label><span style="color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th>有无高血压病史:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="illness3" value="1"> 有
                                    </label>
                                    <input type="text" class="common-text" id="ywgxybs_a" />
                                    <label class="radio">
                                        <input type="radio" name="illness3" value="2"> 无
                                    </label><span style="color:red">*</span>
                                </td>
                                <th>有无传染病史:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="illness4" value="1"> 有
                                    </label>
                                    <input type="text" class="common-text" id="ywcrbs_a" />
                                    <label class="radio">
                                        <input type="radio" name="illness4" value="2"> 无
                                    </label><span style="color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th>有无精神类疾病:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="illness5" value="1"> 有
                                    </label>
                                    <input type="text" class="common-text" id="ywjsljb_a" />
                                    <label class="radio">
                                        <input type="radio" name="illness5" value="2"> 无
                                    </label><span style="color:red">*</span>
                                </td>
                                <th>有无中风病史:</th>
                                <td>
                                    <label class="radio">
                                        <input type="radio" name="illness6" value="1"> 有
                                    </label>
                                    <input type="text" class="common-text" id="ywzfbs_a" />
                                    <label class="radio">
                                        <input type="radio" name="illness6" value="2"> 无
                                    </label><span style="color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th>已确诊疾病:</th>
                                <td>
                                    <input type="text" class="common-text" id="yqzjb_a" style=" width:90%" /><span style="color:red">*</span>
                                </td>
                                <th>上次体检时间:</th>
                                <td>
                                    <input type="text" class="common-text" id="sctjsj_a" onclick="WdatePicker()" /><span style="color:red">*</span>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="4">
                                    <input type="button" value="保存" class="btn btn-primary btn6 mr10" onclick="jkzkb_update()">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="fumuqk_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="12" align="center">
                                    父母情况
                                    <a class="btn mr10 switchForm" onclick="fumuqk_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="12" align="left" style="color:red">
                                    ☺友情提示：这个很重要！我们的员工关爱计划将会突出对象。请您如实填报。
                                    <a class="addLine fumuqk" href="javascript:;" id="addfmqk">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th>姓名</th>
                                <th>身份证号码</th>
                                <th style=" width:60px">关系</th>
                                <th>出生年月</th>
                                <th>文化程度</th>
                                <th style="width:150px">政治面貌</th>
                                <th>户籍所在地</th>
                                <th>工作单位</th>
                                <th>职务</th>
                                <th>手机号码</th>
                                <th>备注</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="fumuqk"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="12">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="peiouqk_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="12" align="center">
                                   	 配偶情况
                                    <a class="btn mr10 switchForm" onclick="peiouqk_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="12" align="left" style="color:red">
                                    ☺友情提示：这个很重要！我们的员工关爱计划将会突出对象。请您如实填报。
                                    <a class="addLine peiouqk" href="javascript:;" id="addpoqk">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th>姓名</th><th>身份证号码</th><th>婚姻登记时间</th><th>出生年月</th><th>文化程度</th><th>政治面貌</th>
                                <th>户籍所在地</th><th>工作单位</th><th>职务</th><th>手机号码</th><th>备注</th><th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="peiouqk"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="12">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="zinvqk_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px" onclick="on_login();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="10" align="center">
                                    子女情况
                                    <a class="btn mr10 switchForm" onclick="zinvqk_search();" style="cursor:pointer;">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="10" align="left" style="color:red">
                                    ☺友情提示：我们希望与您一道参与到子女成长中去。未来，希望您的孩子能够参加我们的“五四”、“六一”等活动，展现才艺。
                                    <a class="addLine zinvqk">新增</a><!--href="javascrpt:;"-->
                                </th>
                            </tr>
                            <tr>
                                <th>姓名</th><th>身份证号码</th><th>性别</th><th>出生年月</th><th style="width:150px">教育就职情况</th>
                                <th>户籍所在地</th><th>在读学校</th><th>工作单位</th><th>备注</th><th style="width:80px">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="znqk_a"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="10">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="jjlxrxxb_search();" 
/>
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style="width:200px">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="8" align="center">
                                	紧急情况联系人与联系地址
                                	<a class="btn mr10 switchForm" onclick="jjlxrxxb_search();">+</a>
                            	</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="8" align="left" style="color:red">
                                    ☺友情提示：紧急情况时，我们诚恳的希望总是有办法能够联系到您。这是必填项哦！
                                    <a class="addLine jinjiqklxrylxdz" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>住址</th>
                                <th>邮编</th>
                                <th>固定电话</th>
                                <th>手机号码</th>
                                <th>备注</th>
                                <th width="90">操作</th>
                            </tr>
                        </tbody>
                        <tbody id="jjqklxra"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="8">
                                    <input type="button" value="继续向下填报" class="btn btn-primary btn6 mr10 nextForm" onclick="gzkxxb_search();" />
                                    <input type="button" value="离开一会儿，下次再填" class="btn btn6" style=" width:200px">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" class="insert-tab">
                        <thead>
                            <tr>
                                <th colspan="6" align="center">
                                    工资卡信息
                                    <a class="btn mr10 switchForm" onclick="gzkxxb_search();">+</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="6" align="left" style="color:red">
                                    ☺友情提示：没有工资卡，怎么发工资呢？
                                    <a class="addLine gongzikxx" href="javascript:;">新增</a>
                                </th>
                            </tr>
                            <tr>
                                <th>姓名</th><th>开户银行（全称）</th><th>账户（卡）号</th><th>状态</th><th>备注</th><th>操作</th>
                            </tr>
                        </tbody>
                        <tbody id="gzkxx_a"></tbody>
                        <tbody>
                            <tr>
                                <th colspan="6">
                                    <input type="button" value="谢天谢地，终于填完了。提交并打印，歇口气！" class="btn btn6" style=" width:400px" id="
xtxdxkq" onclick="print();">
<input type="button" value="测试打印" class="btn btn6" style=" width:400px" id="
xtxdxkq" onclick="trydemo();">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </form>
</div>
</div>


<!-- 新加的 -->
<script type="text/html" id="jinrubqycydgzxmyj">

        <label class="form-group">
            <span> </span>

        </label>
        <form name="frm">

            <table style="margin-left:100px">
                <tr>
                    <td>

                        请选择项目名称:
                        <span style="position:absolute;border:1pt solid #c1c1c1;overflow:hidden;width:188px;
        height:19px;clip:rect(-1px 190px 190px 170px);">
                            <select name="makeupCoSess" id="makeupCoSess" style="width:190px;height:20px;margin:-2px;" onchange="show_htmcss();"></select>
                        </span>
                        <span style="position:absolute;border-top:1pt solid #c1c1c1;border-left:1pt
        solid #c1c1c1;border-bottom:1pt solid #c1c1c1;width:170px;height:19px;">
                            <input type="text" name="makeupCoss" id="makeupCoss" value="请选择或输入" style="width:170px;height:15px;border:0pt;">

                        </span>
                        <span style="width:170px;height:19px; margin-left:200px">
                            <input type="button" value="检索" onclick="xmyjhetonglikess();">
                        </span>
                    </td>
                </tr>


            </table>
        </form>
        <input type="text" class="common-text btn100 " id="sd_a" style="display:none" />
        <label class="form-group"><span>合同编号: </span><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj1" id="ht_htbh" /><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj1_a" style="display:none" /></label>

        <label class="form-group"><span>项目名称: </span><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj2" id="ht_xmmc" /></label>
        <label class="form-group"><span>项目专业: </span><select class="common-text btn100 zczc" id="htyjselect"><option value="1">房屋建筑</option><option value="4">河道堤防泵闸</option><option value="7">农林工程</option><option value="10">道路桥梁</option><option value="13">港口与航道</option><option value="16">市政公用</option><option value="19">水运工程</option><option value="22">船舶工程</option><option value="25">技术咨询</option><option value="28">机电安装设备</option><option value="31">水土保持监理</option><option value="34">移民监理</option><option value="37">设施养护</option><option value="40">轨交设备安装</option><option value="43">圈围吹填</option><option value="46">水利水电</option> <option value="49">轨道交通</option><option value="52">其它</option></select></label>
        <label class="form-group"><span>合同额（万元）: </span><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj4" id="ht_hte" /></label>
        <label class="form-group"><span>合同开工日期: </span><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj5" id="ht_kgrq" onclick="WdatePicker()" /></label>
        <label class="form-group"><span>合同竣工日期: </span><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj6" id="ht_jgrq" onclick="WdatePicker()" /></label>
        <label class="form-group"><span>甲方单位1(建设单位): </span><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj7" id="ht_jsdwa" /></label>
        <label class="form-group"><span>甲方单位2(项目管理): </span><input type="text" class="common-text btn100 zaibenqyyjfzrhtyj8" id="ht_jsdwb" /></label>

    </script>

    <script type="text/html" id="canyudegongzuoxiangmuyeji" style="width:500px">

        <label class="form-group">
            <span> </span>

        </label>
        <form name="cyxmyj">

            <table style="margin-left:100px">
                <tr>
                    <td>
                        请选择项目名称:
                        <span style="position:absolute;border:1pt solid #c1c1c1;overflow:hidden;width:188px;
        height:19px;clip:rect(-1px 190px 190px 170px);">
                            <select name="makeupCoSe" id="makeupCoSe" style="width:190px;height:20px;margin:-2px;" onchange="show_htmc();"></select>
                        </span>
                        <span style="position:absolute;border-top:1pt solid #c1c1c1;border-left:1pt
        solid #c1c1c1;border-bottom:1pt solid #c1c1c1;width:170px;height:19px;">
                            <input type="text" name="makeupCo" id="makeupCo" value="请选择或输入" style="width:170px;height:15px;border:0pt;">

                        </span>
                        <span style="width:170px;height:19px; margin-left:200px">
                            <input type="button" value="检索" onclick="xmyjhetonglike();">
                        </span>
                        <!--<input name="txt_aa" style="width:100px" onkeyup="SelectTips(0)" id="txt_aa">-->



                    </td>
                </tr>


            </table>
        </form>
        <input type="text" class="common-text btn100 " id="sd_aa" style="display:none" />

        <label class="form-group">
            <span>起止时间: </span><input type="text" class="common-text btn50 jinrubqycydgzxmyj1" onclick="WdatePicker()" />
            <input type="text" class="common-text btn50 jinrubqycydgzxmyj2" onclick="WdatePicker()" />
        </label>
        <label class="form-group"><span>项目名称: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj3" id="gzxm_mc" /></label>
        <label class="form-group"><span>工作专业: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj4" /></label>
        <label class="form-group"><span>担任职务: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj5" /></label>
        <label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6" /></label>

    </script>
    <script type="text/html" id="canyudegongzuoxiangmuyejiupdate">

        <label class="form-group">
            <span> </span>

        </label>
        <form name="cyxmyjj">

            <table style="margin-left:100px">
                <tr>
                    <td>
                        请选择项目名称:
                        <span style="position:absolute;border:1pt solid #c1c1c1;overflow:hidden;width:188px;
        height:19px;clip:rect(-1px 190px 190px 170px);">
                            <select name="makeupCoSes" id="makeupCoSes" style="width:190px;height:20px;margin:-2px;" onchange="show_htmcs();"></select>
                        </span>
                        <span style="position:absolute;border-top:1pt solid #c1c1c1;border-left:1pt
        solid #c1c1c1;border-bottom:1pt solid #c1c1c1;width:170px;height:19px;">
                            <input type="text" name="makeupCos" id="makeupCos" value="请选择或输入" style="width:170px;height:15px;border:0pt;">

                        </span>
                        <span style="width:170px;height:19px; margin-left:200px">
                            <input type="button" value="检索" onclick="xmyjhetonglikes();">
                        </span>


                    </td>
                </tr>


            </table>
        </form>
        <input type="text" class="common-text btn100 " id="sd_aaa" style="display:none" />

        <label class="form-group"><span>起止时间: </span><input type="text" class="common-text btn50 jinrubqycydgzxmyj1" onclick="WdatePicker()" id="jinrubqycydgzxmyj1" /><input type="text" class="common-text btn50 jinrubqycydgzxmyj2" id="jinrubqycydgzxmyj2" onclick="WdatePicker()" /></label>
        <label class="form-group"><span>项目名称: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj3" id="dgzxmyj3" /></label>
        <label class="form-group"><span>工作专业: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj4" id="jinrubqycydgzxmyj4" /></label>
        <label class="form-group"><span>担任职务: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj5" id="jinrubqycydgzxmyj5" /></label>
        <label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6" id="jinrubqycydgzxmyj6" /></label>

    </script>

    <!--相关荣誉奖项情况-->
    <script type="text/html" id="rongyumingcheng_a">

        <label class="form-group">
            <span> </span>

        </label>
        <form name="frm">

            <table style="margin-left:100px">
                <tr>
                    <td>

                        请选择荣誉名称:
                        <span style="position:absolute;border:1pt solid #c1c1c1;overflow:hidden;width:188px;
        height:19px;clip:rect(-1px 190px 190px 170px);">
                            <select name="xgryjxselect" id="xgryjxselect" style="width:190px;height:20px;margin:-2px;" onchange="show_htmcsss();"></select>
                        </span>
                        <span style="position:absolute;border-top:1pt solid #c1c1c1;border-left:1pt
        solid #c1c1c1;border-bottom:1pt solid #c1c1c1;width:170px;height:19px;">
                            <input type="text" name="makeupCosss" id="makeupCosss" value="请选择或输入" style="width:170px;height:15px;border:0pt;">

                        </span>
                        <span style="width:170px;height:19px; margin-left:200px">
                            <input type="button" value="检索" onclick="rymc_searchds();">
                        </span>
                    </td>
                </tr>


            </table>
        </form>
    </script> 


</body>
</html>