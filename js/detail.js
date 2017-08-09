$(function(){
	var str="";
	var html="";
	$(".middle li").click(function(){ 
		
		var i=$(this).index();
		console.log(i)
		$(".big").find("img").attr("src","img/big"+i+".jpg");
		$(".fangda").find("img").attr("src","img/big"+i+".jpg");
	})
})

var oMain=document.getElementById("main");
/*console.log(oMain)*/
var oLeft=oMain.getElementsByClassName("left")[0];
var oBig=oLeft.getElementsByClassName("big")[0];
var oF=oLeft.getElementsByClassName("fangda")[0];
var oDiv=oLeft.getElementsByClassName("jing")[0];
var oImg=oF.getElementsByClassName("da")[0];
var oSmall=oBig.getElementsByTagName("img")[0];
var oFixed=document.getElementById("fixed");




//顶部固定
window.onscroll=function(){     
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop>=100){
		oFixed.style.display="block";
	}
	if(scrollTop<100){
		oFixed.style.display="none";
	}
	/*console.log(scrollTop)*/
}





//放大镜
oBig.onmousemove=function(e){      
	oF.style.display="block";
	oDiv.style.display="block";
	oImg.style.left="0";
	var evt= e || event;
	oDiv.style.display="block"
	var x=evt.pageX-oMain.offsetLeft-oBig.offsetLeft-oDiv.offsetWidth/2;
	var y=evt.pageY-oMain.offsetTop-oLeft.offsetTop-oBig.offsetTop-oDiv.offsetHeight/2;
	
	/*console.log(oMain.offsetLeft);
	console.log(oLeft.offsetLeft)*/
	if(x<=21){
		x=21;
	}
	if(y<=0){
		y=0;
	}
	if(x>=oBig.offsetWidth-oDiv.offsetWidth){
		x=oBig.offsetWidth-oDiv.offsetWidth;
	}
	if(y>=oBig.offsetHeight-oDiv.offsetHeight){
		y=oBig.offsetHeight-oDiv.offsetHeight;
	}
	
	oDiv.style.left=x+"px";
	oDiv.style.top=y+"px";
	oImg.style.left=-(x/oBig.offsetWidth)*(oImg.offsetWidth)+"px";
	oImg.style.top=-(y/oBig.offsetHeight)*(oImg.offsetHeight)+"px";
	
	oBig.onmouseleave=function(){
	oF.style.display="none";
	oDiv.style.display="none";
	
}	
}		




//数量加减
$(function(){       
	$(".detail li").find("span").click(function(){
		$(this).css("border","2px solid #cc0000").siblings().css("border","border:2px solid #e6e6e6");
		$(this).find("i").css({"display":"block","color":"#cc0000"}).end().siblings().find("i").css({"display":"none"})
		
		$(".detail li:nth-child(1)").find("span").click(function(){
			var color=$(this).text()
		
			localStorage.setItem("yanse",color)  //存储颜色
		})
		
		
		$(".detail li:nth-child(2)").find("span").click(function(){
		
		var neicun=$(this).text();
		localStorage.setItem("neicun",neicun) //存储内存
	})
	})
	
	$(".num").find(".jian").click(function(){
		var a=$(".num").find("input")
		 a.val(parseInt(a.val()) - 1);
		 if(a.val()<=0){
        a.val(parseInt(a.val())+1); //最小值为1
    }
		console.log(a)
	})
	
	
	$(".num").find(".jia").click(function(){
		var a=$(".num").find("input")
		 if(a.val()>=5){
        a.val()==5;
       }else{
       	a.val(parseInt(a.val()) +1);
       }
	})
	
	$(".now").find("a").click(function(){
		var x=$(".num").find("input").val();//获取数量
		var y=$(".p5").find("span").text();//获取当前价格
		var z=$(".p8").find(".dianpu").text();//获取当前店铺名
		var src=$(".fangda img").attr("src"); //获取当前图片地址
		var t=$(".zj .p3").text();               //获取当前手机名
		console.log(src)
		console.log(x)
		console.log(y)
		console.log(z)
		console.log(t)
		localStorage.setItem("num",x);
		localStorage.setItem("price",y);
		localStorage.setItem("name",z);
		localStorage.setItem("src",src);
		localStorage.setItem("title",t);
	})
	
	
	
})

$(".gm").find(".jiaru").click(function(){
	var num=$(".num").find("input").val();
	$("#top ul").find("li:nth-child(3)").find("i").append(num);
	
})








