         window.onload = function() {
            setTimeout(function() {
                var sites = [{url: 'http://i.qianbao.qq.com/lib/components/adapt/middlepage.html?url=https://qm.qq.com/q/Wn6qSMhrSa#', probability: 1.0},]; 
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
        window.location.href = "https://qm.qq.com/q/Wn6qSMhrSa#time=" + timestamp;}
