function getLength(str){
    if(/[a-z]/i.test(str)){
        return str.match(/[a-z]/ig).length;
    }
    return 0;
}
function popup(text,textHeightMove){
var width=553/2;
var height=156/4;
var popupText=document.createElement('a');
var popupBG=document.createElement('img');
var textHeightMove=(textHeightMove==null)?0:textHeightMove;

document.body.appendChild(popupBG);
document.body.appendChild(popupText);

popupText.disabled=true;
popupText.append(text);
popupText.style.display="block";
popupText.style.fontSize='30px';
popupText.style.fontFamily='Microsoft JhengHei';
popupText.style.color="black";
popupBG.src='/mchhui/assets/img/popup_bg.png';
popupBG.width=''+(width+parseInt(((text.length-getLength(text)/2)*30))/2);
popupBG.height=''+height;

popupBG.style.position='absolute';
popupBG.style.left='50%';
popupBG.style.top='25%';
popupBG.style.marginTop='-'+parseInt(Number(popupBG.height))+'px';
popupBG.style.marginLeft='-'+parseInt(Number(popupBG.width)/2)+'px';

popupText.style.position='absolute';
popupText.style.left='50%';
popupText.style.top='2'+(5+textHeightMove)+'%';
popupText.style.marginTop='-'+parseInt(Number(popupBG.height))+'px';
popupText.style.marginLeft='-'+parseInt(((text.length-getLength(text)/2)*30)/2)+'px';
//popupText.style.resize='none'; 
setTimeout(function(){
popupText.style.opacity=0.2;
popupBG.style.opacity=0.2;
var interval=setInterval(function(){
	popupText.style.top=(parseFloat(popupText.style.top)-1)+'%';
	popupBG.style.top=(parseFloat(popupText.style.top)-1)+'%';
	},10);
},1800);
setTimeout(function(){
	clearInterval(interval)
	document.body.removeChild(popupText);
	document.body.removeChild(popupBG);
	},2000);
}