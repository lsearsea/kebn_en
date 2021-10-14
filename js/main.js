var vm = new Vue({
    el: '.textbook',
    data:{
        Primary:'<li>小学课本<ul class="b"><li>语文</li><li>数学</li><li>英语</li></ul></li>',
        Junior:'<li>初中课本<ul class="b"><li>语文</li><li>数学</li><li>英语</li><li>物理</li><li>化学</li><li>道德与法治</li><li>历史</li><li>地理</li><li>生物</li><li>体育</li><li>音乐</li><li>美术</li><li>信息技术</li></ul>',
        Senior:'<li>高中课本<ul class="b"><li>语文</li><li>数学</li><li>英语</li></ul></li>',
        University:'<li>大学课本<ul class="b"><li>文学系</li><li>理学系</li><li>社科系</li></ul></li>'
    }
});

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://stats.holzora.com/kebn/en/stats.php";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();