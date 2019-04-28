$(document).ready(function(){
if(location.pathname=="/"){
    return;
}
	$('.article-entry').append("<div style='text-align:right'>"+
    "<embed src='//music.163.com/style/swf/widget.swf?sid=2774773432&type=0&auto=1&width=310&height=430' width='350' height='470'  allowNetworking='all'></embed>"+
    "</div>");
})