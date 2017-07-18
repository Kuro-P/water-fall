var hArry =[];
var $boxs = $("#main .box");
var boxsW = $boxs.eq(0).outerWidth();
var data = [{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},
			{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},
			{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"17.jpg"},{"src":"18.jpg"},{"src":"19.jpg"},{"src":"20.jpg"},
			{"src":"21.jpg"},{"src":"22.jpg"},{"src":"23.jpg"},{"src":"24.jpg"}];
$(document).ready(function(){
	var num = 0;
	var process = 0;
	var $imgs = $("img");
	$imgs.each(function(index,item){
		var image = new Image();
		image.src = item.src ;
		image.onload = function(){
			num++;
			process = parseInt(num/$imgs.length*100);
			$(".processing").css("width",process+"%");
			if(process>=100){
				$(".loading").fadeOut();
			}
		};
	});
});

$(window).on("load",function(){
	var curdata = waterfall();
	$(window).on("scroll",function(){
		if(checkScrollStatus()){
			$.each(data,function(key,item){
				var box = $("<div>").addClass("box").appendTo($("#main"));
				var pic = $("<div>").addClass("pic").appendTo(box);
				var img = $("<img>").attr("src","images/"+item.src).appendTo(pic);
				
				var minH = Math.min.apply(null,hArry);
				var minHIndex = $.inArray(minH,hArry);
				$(box).css({
					"position":"absolute",
					"top": minH + "px",
					"left": minHIndex*boxsW + "px"
				});
				img.appendTo(pic);
				hArry[minHIndex]+=$(box).outerHeight();				
			});
			
		}

	});
});

function waterfall(){
	//console.log(boxsW);
	var cols = Math.floor($(window).width()/boxsW);
	$("#main").width(boxsW*cols).css("margin","0 auto");

	//this.newname = "wh";
	$boxs.each(function(index,item){
		if(index<cols){
			hArry[index]=$(item).outerHeight();
		}else{
			var minH = Math.min.apply(null,hArry);
			var minHIndex = $.inArray(minH,hArry);
			$(item).css({
				"position":"absolute",
				"top": minH + "px",
				"left": minHIndex*boxsW + "px"
			});
			hArry[minHIndex]+=$(item).outerHeight();
		}
	});
}

/*检查最后一张图片高度是否达到更新要求*/
function checkScrollStatus(){
	var $lastBox = $("#main .box").last();
	var lastH = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastH < scrollTop + documentH);
}
