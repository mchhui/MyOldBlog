messages=[
"苟利国家生死以 岂因祸福避趋之",
"不想当将军的士兵不是好士兵",
"观棋者不语",
"当局者迷 旁观者清",
"成功不是大风刮来的 但是我吃的饭 可以是大风刮来的",
"要用客观的角度去分析问题",
"知过必改 闻过则喜",
"纸上得来终觉浅 绝知此事要躬行",
"存在即合理 白格尔(这是个玩笑)",
"理想是需要的，是我们前进的方向。现实有理想的指导才有前途；反过来，也必须从现实的努力奋斗中才能实现理想",
"有的人把心都掏给你了，你却假装没看见，因为你不喜欢。有的人把你的心都掏了，你还假装不疼，因为你爱",
"风水轮流转 三十年河西 三十年河东",
"黄沙百战穿金甲 不破楼兰终不还",
"真理不是靠别人告诉你的 而是要靠自己去寻找的",
"火锅教的明天是美好的 但是需要我们脚踏实地的去实现她",
"人有悲欢离合 月有阴晴圆缺 此事古难全 但愿人长久 千里共婵娟",
"明日复明日 明日何其多",
"台上十分钟 台下十年功",
"合作 是现代人必备的技能",
"可以拯救你的人是存在的 但是你永远遇不上Ta",
"万事皆有可能 梦想总会实现",
"为了艺术而艺术",
"人不可以没理想 也不能没钱",
"吃饭是一切行动的基础 吃不起饭的话还是放弃梦想吧",
"真实的自己并不是邪恶的自己 而是能靠自己思考 有独立思维 凭自己的意愿去行动的自己",
"肥料掺了 金坷垃 不流失 不蒸发 零浪费 肥料掺了 金坷垃 能吸收两米下的氮磷钾!",
"世界肥料都涨价 肥料掺了 金坷垃! 一袋能顶两袋撒!",
"用了 金坷垃 小麦亩产一千八 日本的粮食再也不向美国进口了! ",
"众里寻他千百度,蓦然回首,那人却在灯火阑珊处",
"一场春雨 一声春雷 温柔地把世界唤醒",
"编程时要保持这种心态：就好像将来要维护你这些代码的人是一位残暴的精神病患者，而且他知道你住在哪。",
"一种新技术一旦开始流行，你要么坐上压路机，要么成为铺路石。",
"所有的程序员都是编剧，所有的计算机都是烂演员",
"写完代码的前五分钟 上帝和我都知道代码的含意 现在 只有上帝才知道了。"
];
$("#header").ready(function(){
    var header=$("#header")[0];
    var headerSubtitle;
    message=messages[Math.floor(Math.random()*messages.length)];
    for(var x in p_elements=header.getElementsByTagName("p")){
        if(p_elements[x].className=="header-subtitle"){
            headerSubtitle=p_elements[x];
            messageDiv=document.createElement("div");
            messageBar=document.createElement("p");
            messageBarFirst=document.createElement("p");
            messageDiv.appendChild(messageBarFirst);
            messageDiv.appendChild(messageBar);
            header.insertBefore(messageDiv,headerSubtitle);
            header.insertBefore(headerSubtitle,messageDiv);
            messageDiv.style.marginTop='10px';
            messageDiv.style.height='35px';
            messageBar.id='message-bar';
            messageBar.style='color:#696969;font: bold 12px normal,DFKai-SB, sans-serif;display:inline;'
            messageBarFirst.id='message-bar-first';
            messageBarFirst.style='color:#696969;font: bold 20px normal,DFKai-SB, sans-serif;display:inline;'
            messageBar.append(message.substring(1));
            messageBarFirst.append(message[0]);
            break;
        }
    } 
    //"<p class='header-subtitle' style='color:#696969;font: bold 12px normal,DFKai-SB, sans-serif'>苟利国家生死以 岂因祸福避趋之</p>"
})