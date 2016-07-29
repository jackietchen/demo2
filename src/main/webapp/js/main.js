$(function () {
var y= localStorage.getItem("yg");
var yg = eval('(' + y + ')');

//alert(yg.ygbh);
$("#usasder_name").append(yg.xm);
$("#szbm_id").append(localStorage.getItem("szjg"));

});