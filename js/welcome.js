onloadManager.addFunction(function(){
    document.cookie="welcomeTime="+new Date().getTime();
    if(document.cookie==""){
        welcome();
        document.cookie="welcomeTime="+new Date().getTime();
        return
    }
    if(new Date().getTime()-parseInt(document.cookie.split("=")[1])>300000){
    welcome();
    }
    document.cookie="welcomeTime="+new Date().getTime();
})
function welcome(){
    $("body").append("<div id='welcomeBar' style='position: fixed; z-index:999;left: 50%;bottom: 60%;opacity: 1;'><div style='text-align:center;margin-left:-43%;'><img id='welcomeimg' src='/mchhui/assets/img/welcomeimg.png' alt='图片加载失败'' style='width:80%;height:auto;margin-left:-40%;' onclick='javascript:$('#welcomeBar').remove();'"></div></div>")
setTimeout(function(){
    interval =setInterval(function(){
    $('#welcomeimg')[0].style.width=parseInt(parseInt($('#welcomeimg')[0].style.width)-4)+'%';
    },10);
},9800);
setTimeout(function(){
	clearInterval(interval)
    $('#welcomeBar').remove();
	},10000);
}