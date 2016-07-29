var code; //在全局 定义验证码
function createCode() {
    code = new Array();
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("checkCode");
    checkCode.value = "";
    var selectChar = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 32);
        code += selectChar[charIndex];
        }
    if (code.length != codeLength) {
        createCode();
    }
    checkCode.value = code;
}
$(function () {
    createCode();
    var form = $(".registerform").Validform({tiptype: 4,showAllError: true});
    form.addRule([{
        ele: "select",
        datatype: "*"
        }, {
        ele: ":radio:first",
        datatype: "*"
        }, {
        ele: ":checkbox:first",
        datatype: "*"
        }]);
        $("#reset").click(function () {
        $(".registerform").find("input[type='text'],input[type='password'],input[type='tel'], select").val("");
        });
});
$(function () {
/*
jQuery.ajax( {  
    type : 'GET',  
    url : 'user/unit',  
    dataType : 'json',  
    success : function(data) { alert(data);alert(data.total); init_html(data.data)},  
    error : function() {  alert("error")  }  }); */
$.get("user/unit",function(data,status){
	//alert(data);
	//var data = eval('(' + data + ')');//由JSON字符串转换为JSON对象
	if("success"==status)
	{
	    //alert(obj.data);
	    init_html(data.data);
	 }
});


var yg = eval('(' + localStorage.getItem("yg") + ')');
if(yg!=null&&yg!=''){
$("#username").val(yg.xm);
$("#usercode").val(yg.sfzh);
$("#usertype").val(yg.szjg);
$("#userphone").val(yg.mobile);
$("#password").val();
}

$("#submit").click(function() {      
	$.post("user/login",
	{
		username:$("#username").val(),
		usercode:$("#usercode").val(),
		usertype:$("#usertype").val(),
		userphone:$("#userphone").val(),
		password:$("#password").val()
	},
	function(data,status){	
		//var user = eval('(' + data + ')');//由JSON字符串转换为JSON对象
        var user=data;
		if("success"==status)
		{
			if(user.status=="success")
			{
				var y=JSON.stringify(user.data);
				localStorage.setItem("yg",y);
			    localStorage.setItem("xm", user.data.xm);
			    localStorage.setItem("szjg", user.szjg);
			    localStorage.setItem("ygbh", user.data.ygbh);
			    localStorage.setItem("userphone",$("#userphone").val());
			    window.location="main.jsp";
			}
			else
			{
				alert("信息有误，请重新检查");
			}
		 }
		 
	});
});
/*	var parameter = {username:$("#username").val() , password:$("#password").val()};  
    
    $.ajax({  
        data:parameter,  
        type:'POST',  
        dataType: 'json',  
        url:"user/login",  
        error:function(data){  
            alert("出错了！！:"+data.msg);  
        },  
        success:function(data){  
            alert("success:"+data.data);  
            //$("#result").html(data.msg) ;  
        }  
        }); 
*/    

});
function init_html(data_items) {

    for (var i = 0; i < data_items.length; i++) {
        $("#usertype").append(
             ' <option value=' + data_items[i].no + '>' + data_items[i].name + '</option>'
            );
    };
};
