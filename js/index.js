//导航大轮播图
$(function(){      
	var oBox=$("#lunbo");
	var oUl=$("#lunbo .first");
	var oList=$("#lunbo .second");
	var oLi=oUl.find("li");
	var oLis=oList.find("li");
	var index=0;
	var timer=null;
	 function move() {
        timer = setInterval(function() {
            index++;
            if (index > 3) {
                index = 0;
            }
            oLis.eq(index).addClass("cur").siblings().removeClass("cur");
            oLi.eq(index).css('opacity', 1).animate({
                'opacity': 0
            }, 3000);
        }, 2000);
    }
   oLis.hover(function(){
        clearInterval(timer);
        index = $(this).index();
        //alert(index);
       oLis.eq(index).addClass("cur").siblings().removeClass("cur");
        oLi.eq(index).css('opacity', 1);
    }, function() {
        move();
    });
    move();
})
 
 
 
 
 
 //小轮播三动
$(function(){        
	var i =0;
	var $liSit=$("#lunbo3");
	var $Ul=$("#blider");
	var $Li=$(".one");
	$Li.eq(0).clone(true).appendTo($Ul);
	var $Li=$("#blider .one");
	var len=$Li.length;
	var perWidth=$Li.eq(0).outerWidth();
	var oB=$("#botm");
	function move(){
		$("#botm li").removeClass("hover")
		i++;
		if(i==len){
			i=1;
			$Ul.css("left",0);
		}
		//console.log(i)
		if(i==len-1){
			$("#botm li").eq(0).addClass("hover").siblings().removeClass("hover");
		}else{
			$("#botm li").eq(i).addClass("hover").siblings().removeClass("hover");
		}
		$Ul.stop().animate({"left":-i*perWidth},500);	
	}
	
	var timer=setInterval(function(){
		move();
	},3000) 
	$("#botm li").hover(function(){
		clearInterval(timer);
		i=$(this).index()-1;
		move();
	},function(){
		timer=setInterval(move,3000);
	})	
})
	 	
	 	
	 	
	 	//倒计时器
	 	function end(year,month,day){    
	 		var oP=document.getElementsByClassName("jishi");
	 		var oDate=new Date();
	 		var oEndate=new Date(year,month-1,day)
		 	//console.log(oEndate)
		 	var leftTime=oEndate.getTime()-oDate.getTime();
		 	var leftSeconds=parseInt(leftTime/1000);
		 	var d=Math.floor(leftSeconds/(24*60*60));
		 	var h=Math.floor((leftSeconds-d*60*24*60)/(60*60));
		 	var m=Math.floor((leftSeconds-d*60*24*60-h*60*60)/60);
		 	var s=Math.floor(leftSeconds-d*60*24*60-h*60*60-m*60);
		 	//console.log(d+"天"+h+"小时"+m+"分"+s+"秒")
		 	for(i=0;i<oP.length;i++){
			 	oP[i].innerHTML="剩余<span>"+d+"</span>天<span>"+h+"</span>小时"+"<span>"+m+"</span>分"+ "<span>"+s+"</span>秒"
	 		}	
		}	 	
	 window.setInterval(function(){end(2017,8,10);},1000)
	
	
	
	
	//tab切换轮播图
$(function(){        
	var oDiv=$(".biaoqian")
	oDiv.eq(0).show();	
		$(".qiehuan li").click(function(){
		$(".qiehuan li").removeClass("active");
		$(this).addClass("active");
		var index=$(this).index();
		oDiv.hide();
		oDiv.eq(index).show();	
		var $Ul=oDiv.eq(index).find(".u1");
		var oB=oDiv.eq(index).find(".u3");
		var $Li=$Ul.find("li");
		console.log($Ul,oB,$Li)
		var i =0;
		$Li.eq(0).clone(true).appendTo($Ul);
		var $Li=$Ul.find("li");
		var len=$Li.length;
	/*	console.log(len)*/
		var perWidth=$Li.eq(0).outerWidth();
		console.log(perWidth)
		function move(){
		oB.find("li").removeClass("hover")
		$Ul.css({"width":perWidth*len});
		i++;
		if(i==len){
			i=1;
			$Ul.css("left",0);
		}
		//console.log(i)
		if(i==len-1){
			oB.find("li").eq(0).addClass("hover").siblings().removeClass("hover");
		}else{
			oB.find("li").eq(i).addClass("hover").siblings().removeClass("hover");
		}
		$Ul.stop().animate({"left":-i*perWidth},500);	
	}
	var timer=setInterval(function(){
		move();
	},3000) 
	oB.find("li").hover(function(){
		clearInterval(timer);
		i=$(this).index()-1;
		move();
	},function(){
		timer=setInterval(move,3000);
	})	
	})	
})


//动态加载数据
 $(document).ready(function(){
 	$.ajax({
 		type:"get",
 		url:"js/index.json",
 		async:true,
 		success:function(data){
 			var html="";
 			for(var i=0;i<6;i++){
 				
 				html += "<li><a href='list.html'><img src='"+ data[i].src +"'></a><p>"+data[i].title+"</p><h5>"+data[i].price+"</h5></li>";
 				
 			}
 			$(".show ul").append(html);
 		}
 	})
 	$.ajax({
 		type:"get",
 		url:"js/shuju.json",
 		async:true,
 		success:function(data){
 			/*console.log(data);*/
 			var str="";
 			var html="";
 			var str2="";
 			for(var i=0;i<6;i++){
 				
 				str+="<li><a href='list.html'><img src='"+data[0]. cam[i].src+"'></a><h6>"+data[0].cam[i].title+"</h6><p class='price'>"+data[0].cam[i].price+"</p><div class='over'><p class='cankao'>电商参考价：暂无</p><p class='pingjia'><a href='#'>测评</a><span>|</span><a href='#'>视频</a><span>|</span><a href='#'>点评</a></p></div>  </li>"
 				
 				html+="<li><a href='list.html'><img src='"+data[0]. bijiben[i].src+"'></a><h6>"+data[0].bijiben[i].title+"</h6><p class='price'>"+data[0].bijiben[i].price+"</p><div class='over'><p class='cankao'>电商参考价：暂无</p><p class='pingjia'><a href='#'>测评</a><span>|</span><a href='#'>视频</a><span>|</span><a href='#'>点评</a></p></div>  </li>"
 		}
 			
 			for(var i=0;i<10;i++){
 				str2+="<li><a href='list.html'><img src='"+data[0]. guanggao[i].src+"'></a><p><a href='#'>   "+data[0].guanggao[i].title+"</a></p><h5>"+data[0].guanggao[i].price+"</h5><div class='hid'><p class='cankao'>电商参考价：暂无</p><p class='pingjia'><a href='#'>测评</a><span>|</span><a href='#'>视频</a><span>|</span><a href='#'>点评</a></p></div>  </li>"
 	}			
 			
 			$(".cam").append(str);
 			$(".bijiben").append(html);
 			$(".guanggao").append(str2);
 		}
 	});
 	
 })
 	
 	
 	
 //楼梯	
$(function(){     
	var flag=true;
	function scroll(){
		var scrollTop=$(window).scrollTop();
		
		if(scrollTop>697){
			$("#nav").fadeIn(300);
			$("#gd").fadeIn(300);
			
		}else{
			$("#nav").fadeOut(300);
			$("#gd").fadeOut(300);
		}
	}
	
	$(window).scroll(function(){
					if(flag){
						scroll();
					}
				});
				
	$(".nav li").click(function(){
		flag=false;
		$("body,html").stop().animate({"scrollTop":$(".louti").eq($(this).index()).offset().top},500,function(){
			flag=true;
		});	
	})
	
	
	$("#btn").click(function(){
		flag=false;
		$("body,html").stop().animate({"scrollTop":0},500,function(){
			flag=true;
		});
	})
})
   

