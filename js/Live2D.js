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
var oldonload = window.onload
window.onload=(function() {
	$('#live2dcanvas')[0].style.opacity="0.5";
	$('#live2dcanvas')[0].style.marginTop="130px";
	$("body").append('<div id="l2dTipBar" style="position: fixed; right: 50px; bottom: 160px; width: 200px;  z-index: 100000; opacity: 1; background: rgb(245,245,245); border: 2px solid #777; border-radius: 20px;opacity:0;text-align:center;padding:10px 5px 10px 5px;pointer-events:none;"><font id="l2dTip" color="#222" size="2"></font></div>');
    $("body").append("<div id='chatBar' style='position: fixed; right: 250px;bottom: 20px;opacity: 0;'><div style='width:150px;height:19px;background: rgb(245,245,245); border: 2px solid #777;'><input id='turing_input_box' type='text' placeholder='我想说...' style='vertical-align: top;font-family:SimSun;font-size:10px;width:130px;height:17px;border:0px;background:none;margin-left:10px;outline:none;'/></div><button id='send_button' onclick='turing_submit();clearChat();' background: style='width:75px;height:19px;background:rgb(60,179,113); border: 1px solid #777; border-radius: 5px;font-size:10px;'>发射</button><button id='clear_button' onclick='clearChat()' background: style='width:75px;height:19px;background:rgb(0,191,255); border: 1px solid #777; border-radius: 5px;margin-left:4px;font-size:10px;'>清空</button></div>")
   setInterval(checkTip,20);
    setTimeout(function(){msgTip("鸭鸭,又见面了！<br>双击空白处也可以唤出我哦<br>更新计划:<br>1.回复栏");},200);
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
    oldonload();
    return false;
})

function hide(){
if(lock==false){
	return;
}
lock=false;
	$('#live2dcanvas')[0].style.opacity="0.5";
    $('#chatBar')[0].style.opacity="0";
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
$('#chatBar')[0].style.opacity="0.8";
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
var xhr = new XMLHttpRequest;
function turing_submit() {
  var url = "http://www.tuling123.com/openapi/api?key=e1230e4385c8a5efdb7ae21a293f9f0c&info=" + document.getElementById("turing_input_box").value;
  xhr.open("get",url,false);
  if ( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 ){
  message=eval("(" + xhr.responseText + ")").text;
  message=message.replace("MyName","灰灰").replace("图灵工程师爸爸","码农灰").replace("图灵工程师爸爸","女装的码农灰");
  var last="";
  switch(message[message.length-1]){
  case "。":
  last="的说。";
  break;
  case "！":
  last="鸭！";
  break;
  case "？":
  last=",嗯呢?";
  break;
  }
  if(last!=""){
  message=message.substr(0, message.length - 1);
  }
  	talk(message+last);
  }
}
function clearChat() {
    document.getElementById("turing_input_box").value = "";
}