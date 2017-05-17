
//调整图片的宽度和高度
function initPicWH(){
	//获取浏览器窗口的宽度和高度
	var browseWidth = window.innerWidth;
	var browseHeight = window.innerHeight;
	//alert("浏览器窗口宽度和高度分别为：\n宽度：" + browseWidth + "px\n宽度：" + browseHeight + "px");
	
	//鼠标向下滚动则隐藏顶部图片，向上滚动则显示顶部图片
	var headerPic = document.getElementById("headerPic");
	document.addEventListener("mousewheel", function(event){
		var param = event.wheelDelta;
		//alert(param);
		if(param < 0){
			headerPic.style.display = "none";
		}else{
			headerPic.style.display = "";
		}
		//alert(param);
	});
	
	var mainDiv = document.getElementById("mainDiv");
	var originalDiv = document.getElementById("originalPic");
	var squarePicClass = document.getElementsByClassName("squarePic");
	
	//下面这个for循环本要给每一个class=squarePic的元素添加mouseenter事件，但无法成功
	/*for(var ind in squarePicClass){
		squarePicClass[ind].addEventListener("mouseenter", function(event){
			var target = event.target;
			
			var smallPicNode = document.createElement("img");
			smallPicNode.setAttribute("src", target.getAttribute("src"));
			originalDiv.appendChild(smallPicNode);
		});
	}*/
	
	
	/**
	 * 使用mouseover事件，而不是mouseenter事件，可以通过event.target属性获取到鼠标具体所在的元素，
	 * 以方便对鼠标所在的元素进行处理；
	 */
	mainDiv.addEventListener("mouseover", function(event){
		originalDiv.innerHTML = null;
		var tar = event.target;
		if(tar.tagName=='IMG'){
			var smallPicNode = document.createElement("img");
			var srcAttr = tar.getAttribute("src");
			smallPicNode.setAttribute("src", srcAttr);
			originalDiv.appendChild(smallPicNode);
		}
		
	});
	mainDiv.addEventListener("mouseout", function(event){
		originalDiv.innerHTML = null;
		mainDiv.style.display = '';
	})
}

window.onload = initPicWH;