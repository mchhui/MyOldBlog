var messages=[
"干嘛！",
"摸我很好玩吗？",
"你没病吧！",
"不小心的吗?",
"花Q！",
"恩恩额。。",
"好的哟！",
"今天也不想写代码呢"
]
var isShow=false;
var lock=true;
var TipTimer=150;
var Tiplv=true;
var isInLive2d=false;
window.onload=(function() {
	$('#live2dcanvas')[0].style.opacity="0.5";
	$('#live2dcanvas')[0].style.marginTop="130px";
	$("body").append('<div id="l2dTipBar" style="position: fixed; right: 50px; bottom: 160px; width: 200px;  z-index: 100000; opacity: 1; background: rgb(245,245,245); border: 2px solid #777; border-radius: 20px;opacity:0;text-align:center;padding:10px 5px 10px 5px;pointer-events:none;"><font id="l2dTip" color="#222" size="2"></font></div>');
	setInterval(checkTip,20);
    touch.on($("body"),"doubletap",function(e){                
		if(isShow){
			msgTip("好吧好吧qwq 不烦你了XD");
			hide();
		}else{
			msgTip("我来咯！");
			show();
			isInLive2d=true;
		}
	}) 
})

function hide(){
if(lock==false){
	return;
}
lock=false;
	$('#live2dcanvas')[0].style.opacity="0.5";
	interval =setInterval(function(){
	$('#live2dcanvas')[0].style.marginTop=(parseInt($('#live2dcanvas')[0].style.marginTop)+2)+'px';
	},5);
setTimeout(function(){
	clearInterval(interval)
	$('#live2dcanvas')[0].style.marginTop="130px";
	lock=true;
	},120);
	isShow=false;
}

function show(){
if(lock==false){
	return;
}
lock=false;
$('#live2dcanvas')[0].style.opacity="1";
interval =setInterval(function(){
	$('#live2dcanvas')[0].style.marginTop=(parseInt($('#live2dcanvas')[0].style.marginTop)-2)+'px';
	},5);
setTimeout(function(){
	clearInterval(interval)
	$('#live2dcanvas')[0].style.marginTop="80px";
	lock=true;
	},120);
isShow=true;
}


document.onclick=function(ev){                
	var oEvent=ev;
	var x=oEvent.clientX;
	var y=oEvent.clientY;
	//popup(document.body.clientHeight-y,-1);

		if(isShow&&document.body.clientWidth-x>100&&document.body.clientWidth-x<200&&document.body.clientHeight-y<160){
			msgTip("好吧好吧qwq 不烦你了XD");
			hide();
		}else if(document.body.clientWidth-x>100&&document.body.clientWidth-x<200&&document.body.clientHeight-y<90){
			msgTip("我来咯！");
			show();
			isInLive2d=true;
		}


}


$(document).mousemove(function(ev){
	var e=ev;
	var x=e.clientX;
	var y=e.clientY;
		if(isShow){
			if(document.body.clientWidth-x>100&&document.body.clientWidth-x<200&&document.body.clientHeight-y<170){
				if(isInLive2d){
				return;	
				}
			isInLive2d=true;
			msgTip(messages[Math.floor(Math.random()*messages.length)]);
			}else{
			isInLive2d=false;
			}
		}
})

function checkTip(){
	var l2dTip = $("#l2dTipBar")
	$("#l2dTipBar")[0].style.bottom=(220-parseInt($('#live2dcanvas')[0].style.marginTop))+"px";
	if(TipTimer<150){
		if(!Tiplv){
			l2dTip.stop().animate({opacity:0.8},200);
			Tiplv=true;
		}
		TipTimer++;
	}else{
		if(Tiplv)
		l2dTip.stop().animate({opacity:0},300);
		Tiplv=false;
	}
	if(TipTimer>=30&&Tiplv){
	}
}

function msgTip(msg){
	TipTimer=0;
	$("#l2dTip")[0].innerHTML=msg;
}
function talk(str){
	msgTip((str==null)?messages[Math.floor(Math.random()*messages.length)]:str);
}