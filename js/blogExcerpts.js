onloadManager.addFunction(function(){
if(location.pathname!="/"){
    return;
}
	for(var x in blogs=$('.article-entry')){
        if(blogs[x].className!="article-entry"){
            return;
        }
         //blogs[x]==null;
         var children=[];
         for(var i=0;i<blogs[x].children.length;i++){
             children.push(blogs[x].children[i]);
         }
         $(blogs[x]).empty()
         //alert(children.length)
         for(var n=0;n<children.length;n++){
            if(n<3||n>=children.length-2)
            blogs[x].append(children[n]);
         }
         $(blogs[x]).append("<p>.............</p>");
    }
})