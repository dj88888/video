(function smartRedirect() {
    try {
        // 创建目标URL对象（请替换实际地址）
        const target = new URL('https://imgcache.qq.com/mie/common/page/middle/index.html?url=https%3A%2F%2Fstatic.gamecenter.qq.com%2Fsocial-web%2Fjump-meta-dream%2Findex.html%3Ftype%3Dkuikly%26jumpUrl%3Dhttps%3A%2F%2Fone.zjzy.vip/upload/default/20250328111243FoF4R6rw.html');
        
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
