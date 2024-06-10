// 判断是否在移动端访问
function isMobile() {
    var userAgent = navigator.userAgent.toLowerCase();
    return (/iphone|ipad|ipod|android|windows phone/.test(userAgent));
}

// 如果不在移动端访问，则跳转到提示页面
if (!isMobile()) {
    window.location.href = '/404';
}

// 代码开源公开，请勿使用违法途径！


// 获取地址栏中的参数
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// 从地址栏中获取id参数的值
var id = getParameterByName('id');

// 创建一个新的 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();
var url = '//dj88888.github.io/video/xfh2.json';

// 监听请求状态的改变
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // 请求成功，获取返回的数据
            var data = JSON.parse(xhr.responseText);

            // 根据JSON的id读取URL
            var targetObject = data.find(item => item.id === id);
            if (targetObject) {
                var url = targetObject.url;
                console.log(url); // 输出对应id的URL

                // 获取页面中已有的iframe
                var existingIframe = document.querySelector('iframe');
                if (existingIframe) {
                    existingIframe.src = url; // 直接修改iframe的src属性为获取到的URL
                } else {
                    // 如果没有找到iframe，则创建一个并设置其src属性
                    var iframe = document.createElement('iframe');
                    iframe.style.width = '100%'; // 设置 iframe 的宽度
                    iframe.style.height = '100vh'; // 设置 iframe 的高度
                    iframe.style.border = 'none'; // 设置 iframe 的边框样式
                    iframe.src = url; // 设置 iframe 的 src 属性为获取到的URL
                    document.body.appendChild(iframe); // 将 iframe 添加到 body 中
                }
            } else {
                console.log('未找到对应id的URL');
                window.location.href = '/404'; // 如果没有找到对应id的URL，则跳转到404页面
            }
        } else {
            // 请求失败
            console.error('发生错误:', xhr.status);
            window.location.href = '/404'; // 如果请求失败，则跳转到404页面
        }
    }
};

// 打开一个新的 GET 请求
xhr.open('GET', url, true);

// 发送请求
xhr.send();
