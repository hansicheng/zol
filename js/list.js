$(function(){     //列表页的加载
	$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			var str="";
			var oUl=$("#main .shouji");
			//console.log(data)
			for(i=0;i<20;i++){
				//console.log(data.length)
				str+=
					"<li>"+
						"<a href='details.html?id="+ data[i].id+"'><img src='"+data[i].src+"'></a>"+
						"<h6><a href='#'>"+data[i].title+"</a></h6>"+
						"<h4>"+data[i].price+"</h4>"+
						"<p class='p1'><span class='xiaoliang'>"+data[i].num+"</span><span class='pingjia'>15</span></p>"+
						"<h3>"+data[i].shangjia+"</h3>"+
						"<p class='p2'><span>"+"15656笔"+"</span></p>"+
					"</li>"
					
			}
			oUl.append(str)
			oUl.find("li").click(function(){
				var iTem=$(this).find("h6")
				var a=iTem.find("a").text();
				localStorage.setItem("k",a);
			var b=localStorage.getItem("k")
			console.log(b)
		
			})
		}
	})
	
})

	/*$(function(){
		//页面的折叠
   $(".you").find("span").click(function(){
   		$(".name").fadeOut();
   		$(".choose").fadeOut();
   		$(".auto").css("height","83px")
   		$("#pinpai").css("height","241px")
   		$(".you").find("span").text("展开v")
   		var a=$(".quanbu li");
   		for(i=0;i<18;i++){
   			a.eq(i).fadeOut();
   		}
   	$(".you").find("span").click(function(){
   		$(".name").fadeIn();
   		$(".choose").fadeIn();
   		$(".auto").css("height","259px")
   		$(".you").find("span").text("收起v")
   		$("#pinpai").css("height","449px")
   		for(i=0;i<18;i++){
   			a.eq(i).fadeIn();
   		}
   	})
   	
   	
   	
   	
   })
	})*/
	
