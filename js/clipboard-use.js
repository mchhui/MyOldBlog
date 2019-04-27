new_element = document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src", "/js/popup.js");
document.body.appendChild(new_element);
$(document).ready(function() {
	$(".highlight").append('<a class="btn-copy" href onClick="CopyCode($(this));return false;">复制代码</a>');
});

function CopyCode(e){
	try {
		var text = e.parent().find("table tbody tr .code")[0].innerText;
		let cp = document.createElement('div');
		cp.id = 'tempTarget';
		cp.style.opacity = '0';
		cp.innerText = text;
		document.body.appendChild(cp);
		let range = document.createRange();
		range.selectNode(cp);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		popup('复制成功',-1);
		cp.parentElement.removeChild(cp);
	} catch (e) {
		popup('复制失败',-1);
	}
	msgTip("鸭鸭,CV小哥！");
}
