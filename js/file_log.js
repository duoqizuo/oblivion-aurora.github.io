//雪花特效开始
window.onload=function()
{

	wweight=window.screen.width;
	wheight=window.screen.height;
	function creatsnow()
	{	var left=0,top=0;
		var a=Math.random();
		var left_random=Math.random()*wweight;
		var top_random=Math.random()*wheight;
		var div=document.createElement("div");
		div.className="snow";
		div.style.transform='scale('+(Math.random())+')';
		document.body.appendChild(div);
		
		setInterval(function(){
			div.style.left=left_random+left+'px';
			div.style.top=top_random+top+'px';
			top+=0.2;
			left+=0.2;
			if(left_random+left>wweight)
			{
				left_random=Math.random()*wweight;
				left=0;
				top=0;
			}
			if(top_random+top>wheight)
			{
				top_random=Math.random()*wheight;
				top=0;
				left=0;
			}
		},10);
	}
	for(var i=0;i<=100;i++)
	{
		creatsnow();
	}
}
//雪花特效结束

//登录部分切换开始
function djdl()
{
	var a=document.getElementsByTagName("span");
	a[1].style.borderBottom="none";
	a[0].style.borderBottom="solid red 3px";	
	a[0].style.color="white";
	a[1].style.color="#596476";
	var b=document.getElementsByClassName("dl");
	b[0].style.display="block";
	var c=document.getElementsByClassName("zc");
	c[0].style.display="none";
}
//登录部分切换结束

//注册部分切换开始
function djzc()
{
	var a=document.getElementsByTagName("span");
	a[0].style.borderBottom="none";
	a[1].style.borderBottom="solid red 3px";
	a[1].style.color="white";
	a[0].style.color="#596476";
	var b=document.getElementsByClassName("dl");
	b[0].style.display="none";
	var c=document.getElementsByClassName("zc");
	c[0].style.display="block";
}
//注册部分切换结束

//登录部分焦点变化开始
function dlname_0()
{
	var a=document.getElementsByClassName("k1");
	if(a[0].value=="Email")
	a[0].value="";
}
function dlname_1()
{
	var a=document.getElementsByClassName("k1");
	if(a[0].value=="")
	a[0].value="Email";
}
function dlp_0()
{
	var a=document.getElementsByClassName("k1");
	if(a[1].value=="Password")
	a[1].value="";
}
function dlp_1()
{
	var a=document.getElementsByClassName("k1");
	if(a[1].value=="")
	a[1].value="Password";
}
//登录部分焦点变化结束

//注册部分焦点变化开始
function zcname_0()
{
	var a=document.getElementsByClassName("k2");
	if(a[0].value=="Email")
	a[0].value="";
}
function zcname_1()
{
	var a=document.getElementsByClassName("k2");
	if(a[0].value=="")
	 {a[0].value="Email";}
}
function zcp_0()
{
	var a=document.getElementsByClassName("k2");
	if(a[1].value=="Password")
	a[1].value="";
}
function zcp_1()
{
	var a=document.getElementsByClassName("k2");
	if(a[1].value=="")
	a[1].value="Password";
}
function zcpa_0()
{
	var a=document.getElementsByClassName("k2");
	if(a[2].value=="Confirm Password")
	a[2].value="";
}
function zcpa_1()
{
	var a=document.getElementsByClassName("k2");
	if(a[2].value=="")
	a[2].value="Confirm Password";
}
//注册部分焦点变化结束

//登录成功
function log_in()
{
	var c=document.getElementsByClassName("k1");
	if(c[0].value!="Email")
	    {
	    	alert("登录成功！点击跳转至首页。");
		    window.open("first.html","_self");
		}
	    
	else{
		alert("请您输入完整信息！");
	}
}
function log_start()
{
	var d=document.getElementsByClassName("k2");
		if(d[0].value!="Email"&&d[1].value!="Password"&&d[2].value!="Confirm Password")
	    {
	    	alert("恭喜您注册成功！点击跳转至首页。");
		    window.open("first.html","_self");
       }
	    else{
	    	alert("请您输入完整信息！");
	    }
}
//前往首页
function go_web()
{
	window.open("first.html","_self");	
}
