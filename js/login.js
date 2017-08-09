var a =false;b=false;c=false;d=false;e=false;f=false;
var Login=document.getElementById("login");
var Li=Login.getElementsByTagName("li");
var oI=Login.getElementsByClassName("iconfont")
var oInput=Login.getElementsByTagName("input");
var oP=Login.getElementsByTagName("p");
var oSpan=Login.getElementsByTagName("span")
console.log(oP)
console.log(oInput)
console.log(oI)
console.log(oSpan)
var reg=/^1[3|5|8]\d{9}$/;
oInput[0].onchange=function(){
	if(reg.test(oInput[0].value)){
	a=true;
	oI[0].style.display="none";
}else{
	oI[0].style.display="inline-block";
	oSpan[1].innerHTML="号码格式不正确"
}
}
oInput[1].onchange=function(){
	if(oInput[1].value=="AE231"){
		b=true;
		oI[1].style.display="none";
	}else{
		oI[1].style.display="inline-block";
		oSpan[4].innerHTML="验证码错误";	
	}
}
oInput[2].onchange=function(){
	
	if(oInput[2].value.length==0){      //验证不能为空
		oI[2].style.display="inline-block";
		oSpan[6].innerHTML="验证码不能为空"
	}if(oInput[2].value==" "){     //验证不能是空格
		oI[2].style.display="inline-block";
		oSpan[6].innerHTML="验证码不能含空格"
	}else{
		c=true;
		oI[2].style.display="none";
	}
}
oInput[3].onchange=function(){
	var reg2=/^[A-Za-z0-9]{6,20}$/;
	if(reg2.test(oInput[3].value)){
		d=true;
		oI[3].style.display="none";
	}else{
		oI[3].style.display="inline-block";
		oSpan[8].innerHTML="密码格式错误"
	}
}
oInput[4].onchange=function(){
	if(oInput[4].value==oInput[3].value){
		e=true;
		oI[4].style.display="none";
	}else{
		oI[4].style.display="inline-block";
	}
}
oInput[6].onmousedown=function(){
	if(oInput[5].checked&&a==true&&b==true&c==true&&d==true&&e==true){
		f==true;
		alert("注册成功")
	}else{
		alert("注册失败")
	}
}


$(function(){
	function setItems(){
	var user={};
	user.name=$("#txt").val();
	user.pwd=$("#pad").val();
}
	
})




