$(document).ready(function(){
	var n=localStorage.getItem("num");    //购买的数量
	var p=localStorage.getItem("price");  //价格
	var g=localStorage.getItem("neicun");  //购买的内存
	var r=localStorage.getItem("yanse");   //颜色
	var d=localStorage.getItem("name");     //店铺名称
	var s=localStorage.getItem("src");		//图片地址
	var t=localStorage.getItem("title");	//手机名称
	console.log(n);     
	console.log(p);
	console.log(g);
	console.log(r);
	console.log(s);
	console.log(d)
	console.log(t)
	$(".dianjia").find("a").html(d);
	var str1="";
	str1="<img src='"+s+"'>";
	$(".tu").html(str1)
	var str="";
	str="<p><a href='#'>"+t+"</a></p><h4><a href='#'><img src='img/7.jpg'></a></h4><h5>"+r+"<h5><h6>套装：官方标配<h6>";
	$(".detail").html(str);
	$(".price").html(p);
	$(".num").find("input").val(n);
	
	var count=$(".num").find("input").val();
	var all= count*p;
	$(".all").find("span").html(all);
	$("#shop").find("h6").find("b").html(all);
	
	
	
	
	$(".num").find(".jiajian").find(".add").click(function(){
		var a=$(".num").find("input");
		 if(a.val()>=5){
        	a.val()==5;
        	$(".max").css("display","block");
      	 }else{
       	a.val(parseInt(a.val()) +1);
       	$(".max").css("display","none");
       	}
    var count=$(".num").find("input").val();
	var all= count*p;
	$(".all").find("span").html(all);
	$("#shop").find("h6").find("b").html(all);
	})
	
	
	$(".num").find(".jiajian").find(".reduce").click(function(){
		var a=$(".num").find("input");
		 a.val(parseInt(a.val()) - 1);
		 if(a.val()<=0){
        a.val(parseInt(a.val())+1); //最小值为1
       }
	var count=$(".num").find("input").val();
	var all= count*p;
	$(".all").find("span").html(all);
	$("#shop").find("h6").find("b").html(all);
	})
	})
	
	
	
	
	
	
	
	
	
	
	

