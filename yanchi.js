// 设置延迟时间（单位毫秒）
var delayMillis = 2000;
 
// 图片地址
var imageUrl = "https://qqq.gtimg.cn/music/photo_new/T053XD000003wfkDC4Avjc8.gif";
 
// 目标跳转链接
var targetUrl = "https://baidu.com";
 
// 创建一个新的Image对象
var img = new Image();
 
// 设置图片地址
img.src = imageUrl;
 
// 图片加载完成后执行跳转
img.onload = function() {
    setTimeout(function() {
        window.location.href = targetUrl;
    }, delayMillis);
};
 
// 如果图片无法加载，直接跳转
img.onerror = function() {
    setTimeout(function() {
        window.location.href = targetUrl;
    }, delayMillis);
};
