onloadManager.addFunction(function(){
    if(document.cookie=="isWelcomed=true"){
        return;
    }
    welcome();
    document.cookie="isWelcomed=true";
})
function welcome(){
    $("body").append("<div id='welcomeBar' style='position: fixed; z-index:999;left: 50%;bottom: 60%;opacity: 1;'><div style='text-align:center;margin-left:-43%;'><img id='welcomeimg' src='/mchhui/assets/img/welcomeimg.png' alt='图片加载失败'' style='width:80%;height:auto;margin-left:-40%;'></div></div>")
setTimeout(function(){
    interval =setInterval(function(){
    $('#welcomeimg')[0].style.width=parseInt(parseInt($('#welcomeimg')[0].style.width)-4)+'%';
    },10);
},1800);
setTimeout(function(){
	clearInterval(interval)
    $('#welcomeBar').remove();
	},2000);
}