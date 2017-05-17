
//跳转到showPic.html页面
function toShowPic(){
	//点击按钮就跳转到showPic.html页面，不过在之前要先获取相应的元素
	var btn = document.getElementById("showPic");
	btn.onclick = function(){
		window.location = "test/html/showPic.html";
	};
	
	//使用另外一种格式的鼠标点击事件
	var demoBtn = document.getElementById("demoBtn");
	demoBtn.addEventListener("click", function(){
		window.location = "demo.jsp";
	}, false);
	
	
}

window.onload = toShowPic;
