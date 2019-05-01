var functions=new Array();
var onloadManager=new function(){};
onloadManager.addFunction=function(func){
    functions.push(func);
}
onloadManager.removeFunction=function(func){
    for(var x in functions){
        if(functions[x]==func){
            functions.splice(x,1);
            return;
        }
    }
}
onloadManager.addFunction(window.onload);
window.onload=function(){
    for(var x in functions){
        functions[x]();
    }
}
