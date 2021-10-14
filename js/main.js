var vm = new Vue({
  el: '.textbook',
  data:{
      Primary:'<li><span class="a" id="a1">小学课本</span><ul class="b" id="b1"><li>语文</li><li>数学</li><li>英语</li></ul></li>',
      Junior:'<li><span class="a" id="a2">初中课本</span><ul class="b" id="b2"><li>语文</li><li>数学</li><li>英语</li><li>物理</li><li>化学</li><li>政治</li><li>历史</li><li>地理</li><li>生物</li></ul>',
      Senior:'<li><span class="a" id="a3">高中课本</span><ul class="b" id="b3"><li>语文</li><li>数学</li><li>英语</li></ul></li>',
      University:'<li><span class="a" id="a4">大学课本</span><ul class="b" id="b4"><li>文学系</li><li>理学系</li><li>社科系</li></ul></li>'
  }
});

var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://stats.holzora.com/kebn/en/stats.php";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();