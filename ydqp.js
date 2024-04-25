function loadhtml(url){ 
 var xhr = new XMLHttpRequest;
 var html = null;
 function render() {var a = document.open("text/html", "replace");
  a.write(html);
  a.close();}
 xhr.onload = function () {html = xhr.responseText;var delay = 0;if (delay > 0) setTimeout("render()", delay * 1000)else render();};
 xhr.open("GET", url, !0);
 xhr.send();}
 loadhtml('https://cdn.youliao.com/upload/member/memberPortrait/2024/202404/20240425/20240425142113793413.html')
