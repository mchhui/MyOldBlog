var messages=[
"测试1"
]
var isShow=false;
var lock=true;
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
	$('#live2dcanvas')[0].style.marginTop="120px";
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
	$('#live2dcanvas')[0].style.marginTop="70px";
	lock=true;
	},120);
isShow=true;
}
window.onload=(function() {
	$('#live2dcanvas')[0].style.opacity="0.5";
	$('#live2dcanvas')[0].style.marginTop="120px";
})
document.onclick=function(ev){                
	var oEvent=ev;
	var x=oEvent.clientX;
	var y=oEvent.clientY;
	//popup(document.body.clientHeight-y,-1);

		if(isShow&&document.body.clientWidth-x>100&&document.body.clientWidth-x<200&&document.body.clientHeight-y<170){
			hide();
		}else if(document.body.clientWidth-x>100&&document.body.clientWidth-x<200&&document.body.clientHeight-y<100){
			show();
		}


}