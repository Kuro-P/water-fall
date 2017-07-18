var hArry = [];
var boxs = null;
var boxssParent = document.getElementById("main");

window.onload = function(){

	
	waterfall("main","box");
	window.onscroll = function(){

		if(checkScrollStatus()){
			//console.log("yes!");
			for(var i=0;i<=24;i++){

				var obox = document.createElement("div");
				obox.className = "box";
				var opic = document.createElement("div");
				opic.className = "pic";
				var oimg = document.createElement("img");
				oimg.src = "images/"+i+".jpg";
				opic.appendChild(oimg);
				obox.appendChild(opic);
				boxssParent.appendChild(obox);
				boxs.push(obox);

				var boxWidth = boxs[0].offsetWidth;
				var minH = Math.min.apply(null,hArry);
				var mincol = getCols(minH,hArry);
				obox.style.position = "absolute";
				obox.style.top = minH + "px";
				obox.style.left = mincol*boxWidth + "px";
				hArry[mincol] += obox.offsetHeight;

			}
		}
	};

};


/*检查滚动条是否达到加载图片的要求*/
function checkScrollStatus(){
	/*比较数组中最后一张图片位置与滚动条位置*/
	var bodyH = document.documentElement.clientHeight || document.body.clientHeight;
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	var lastboxH = boxs[boxs.length-1].offsetTop+parseInt(boxs[boxs.length-1].offsetHeight/2);
	return (lastboxH < scrollTop + bodyH);
	
}

function waterfall(parent,box){
	var boxsParent = document.getElementById("main");
	    boxs = getByClass(box,boxsParent);
	//计算每个页面显示的列数（页面宽/盒子宽）
	var boxWidth = boxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / boxWidth);
	boxsParent.style.width = cols*boxWidth+"px";

	//存放每列高度
	//var hArry = [];
	for(var i=0;i<boxs.length;i++){
		if(i<cols){
			hArry.push(boxs[i].offsetHeight);
		}else{
			var minH = Math.min.apply(null,hArry);
			var mincol = getCols(minH,hArry);
			boxs[i].style.position = "absolute";
			boxs[i].style.top = minH + "px";
			boxs[i].style.left = mincol*boxWidth + "px";
			hArry[mincol] += boxs[i].offsetHeight;
		}
		
	}
	flag =1;
}

/*在数组中查找对应值的索引*/
function getCols(num,arry){
	for(var i=0;i<arry.length;i++){
		if(arry[i]==num){
			return i;
		}
	}
}


/*接受cls名(必须)，父元素(可选)，返回匹配的数组*/
function getByClass(cls,parent){
	//console.log(parent);
	if(!parent){
		parent = document;
	}
	var allNodes = parent.getElementsByTagName("*");
	var clsArry = [];
	for(var i=0;i<allNodes.length;i++){
		if(allNodes[i].className == cls){
			clsArry.push(allNodes[i]);
		}
	}

	return clsArry; 
}