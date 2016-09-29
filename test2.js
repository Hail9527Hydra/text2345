//var base = ["新浪", 微博, 央视网, 京东热卖, 赶集网, 安居客房产, 世纪佳缘, 天猫女装];

builderBiaoDian();

function builderBiaoDian() {

	var arr = getbase();

	document.write("<div class=\"box\">");
	document.write("<div class=\"xian\"></div>");

	for(var i = 0; i < arr.length; i++) {
		document.write("<div class=\"lmbox\">");
		for(var j = 0; j < arr[i].length; j++) {
			document.write("<ul>");
			for(var p = 0; p < arr[i][j].length; p++) {
				document.write("<li>");
				document.write("<a href=\"\">" + arr[i][j][p] + "</a>");
				document.write("</li>");
			}
			document.write("</ul>");
		}
		document.write("</div>");
	}

	document.write("</div>");
}

function getbase(index1, index) {
	var test = [
		[
			["新浪", "微博", "央视网", "京东热卖"],
			["赶集网", "安居客房产", "实际加盐", "天猫女装"]
		],
		[
			["搜狐", "爱淘宝", "2345小游戏", "苏宁易购"],
			["1号店", "携程旅游网", "同程旅游网", "国美在线"]
		],
		[
			["凤凰网", "今日特价", "淘宝网•淘优惠", "58 同城"],
			["途牛旅游网", "百 姓 网", "去哪儿网", "亚 马 逊"]
		],
		[
			["新浪", "微博", "央视网", "京东热卖"],
			["赶集网", "安居客房产", "实际加盐", "天猫女装"]
		],
		[
			["搜狐", "爱淘宝", "2345小游戏", "苏宁易购"],
			["1号店", "携程旅游网", "同程旅游网", "国美在线"]
		],
		[
			["凤凰网", "今日特价", "淘宝网•淘优惠", "58 同城"],
			["途牛旅游网", "百 姓 网", "去哪儿网", "亚 马 逊"]
		]
	];

	return test;

}