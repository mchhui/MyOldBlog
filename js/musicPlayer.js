$(document).ready(function(){
if(location.pathname=="/"){
    return;
}
	$('.article-entry').append("<div style='text-align:right'><embed src='//music.163.com/style/swf/widget.swf?sid=5142623&type=2&auto=1&width=320&height=66' width='340' height='86'  allowNetworking='all'></embed></div>");
    oldonload();
})