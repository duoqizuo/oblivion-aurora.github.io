//搜索框焦点的改变开始
function ssChange_0()
{
	var ssk=document.getElementById("ssk");
	ssk.value="";
}
function ssChange_1()
{
	var ssk=document.getElementById("ssk");
	ssk.value="搜索...";
}
//搜索框焦点的改变结束
//轮播图板块(当网页加载完成执行下列代码)
window.onload=function(){
	function hotchange()
	{
		var current_index=0;
		var timer=setInterval(autoChange,2000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
		for(var i=0;i<button_li.length;i++)
		{
			button_li[i].onmouseover=function()
			{
				clearInterval(timer);
				for(var j=0;j<button_li.length;j++)
				{
					if(button_li[j]==this)
					{
						button_li[j].className="current";
						pic_li[j].className="current";
						current_index=j;
//				<--背景颜色随图片颜色变化开始-->
                if(j==0){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#3D0706";
				}
				if(j==1){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="whitesmoke";
				}
				if(j==2){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#DFEDFD";
				}
				if(j==3){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#ACB5B6";
				}
				if(j==4){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#FCE2C7";
				}
				if(j==5){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#F5EEEE";
				}
//				<--背景颜色随图片颜色变化结束-->	
					}
					else{
						button_li[j].className="but";
						pic_li[j].className="pic";
					}
				}
			}
			button_li[i].onmouseout=function()
			{
				timer=setInterval(autoChange,2000);
			}
		}
	function autoChange()
	{
		++current_index;
		if(current_index>=button_li.length)
		{current_index=0;}
		for(var i=0;i<button_li.length;i++)
		{
			if(i==current_index)
			{
				button_li[i].className="current";
				pic_li[i].className="current";
//				<--背景颜色随图片颜色变化开始-->
                if(i==0){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#3D0706";
				}
				if(i==1){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="whitesmoke";
				}
				if(i==2){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#DFEDFD";
				}
				if(i==3){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#ACB5B6";
				}
				if(i==4){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#FCE2C7";
				}
				if(i==5){
					var BG_change=document.getElementById("banner");
					BG_change.style.background="#F5EEEE";
				}
//				<--背景颜色随图片颜色变化结束-->						
			}
			else{
				button_li[i].className="but";
				pic_li[i].className="pic";
			}
		}
	}	
}
	hotchange();

//歌曲排行的不同背景色开始
function change_gqphbg()
{
	var a=document.getElementsByClassName("ph");
	for(var i=0;i<3;i++)
	{
		for(var j=1;j<11;j++)
		{
			var b=a[i].children;
			if((j)%2==0)
			b[j].style.backgroundColor="#F4F4F4";
		}
	}
}
change_gqphbg();
//歌曲排行的不同背景色结束

}
//轮播结束(当网页加载完成执行上述代码)

//改变本站推荐栏的图标开始
function change_CM1p()
{
	var a=document.getElementById("bztj");
	a.src="../img/test0_p.png";
}
function change_CM10()
{
	var a=document.getElementById("bztj");
	a.src="../img/test0_0.png";
}
//改变本站推荐栏的图标结束
//本站推荐内容遮盖层部分开始
function fuxian_0()
{
	var a=document.getElementsByClassName("fx_0");
	a[0].style.display="block";
}
function xiaoshi_0()
{
	var a=document.getElementsByClassName("fx_0");
 	 a[0].style.display="none";
}

function fuxian_1()
{
	var a=document.getElementsByClassName("fx_1");
	a[0].style.display="block";
}
function xiaoshi_1()
{
	var a=document.getElementsByClassName("fx_1");
 	 a[0].style.display="none";
}
function fuxian_2()
{
	var a=document.getElementsByClassName("fx_2");
	a[0].style.display="block";
}
function xiaoshi_2()
{
	var a=document.getElementsByClassName("fx_2");
 	 a[0].style.display="none";
}
//本站推荐内容遮盖层部分结束


//改变每日推荐栏的图标开始
	function change_CM2p(){
	var a=document.getElementById("mrtj");
	a.src="../img/test1_p.png";
    }
	function change_CM20(){
	var a=document.getElementById("mrtj");
	a.src="../img/test1_0.png";
    }
//改变每日推荐栏的图标结束

//改变歌曲排行的图标开始
function Change_CM3()
{
	var a=document.getElementById("gqph");
	a.src="../img/test2_p.png";
}
function Change_CM30()
{
	var a=document.getElementById("gqph");
	a.src="../img/test2_0.png";
}
//改变歌曲排行的图标结束

//改变小众精选的图标开始
function Change_CM4()
{
	var a=document.getElementById("xzjx");
	a.src="../img/test3_p.png";
}
function Change_CM40()
{
	var a=document.getElementById("xzjx");
	a.src="../img/test3_0.png";
}

//改变小众精选的图标结束

//改变歌手的图标开始
function Change_CM5()
{
	var a=document.getElementById("gsyd");
	a.src="../img/test4_p.png";
}
function Change_CM50()
{
	var a=document.getElementById("gsyd");
	a.src="../img/test4_0.png";
}
//改变歌手的图标结束

