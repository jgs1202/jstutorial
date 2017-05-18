$(function() {
  var cv = $('#cv')[0].getContext('2d');

  var timerId;
  var counter = 0;
  const INTERVAL = 20;

  function generateGraph(){
    cv.beginPath(); //円の中心座標
    var cx = Math.floor(Math.random() * 999) + 1; // 円中心x座標
    var cy = Math.floor(Math.random() * 599) + 1; // 円中心y座標
    var r = Math.floor(Math.random() * 15 ) + 1; // 円の半径
    var col = generateRandomColor(); // ランダム色を生成
    cv.arc(cx, cy, r, 0, 2 * Math.PI, false);

    //図形の塗りつぶしと枠線に同じ色を設定
    cv.strokeStyle = col;
    cv.fillStyle = col;
    cv.globalAlpha = '1.0';
    cv.fill();
    cv.stroke();
    $('text').text("生成した図形の数：" + ++counter);
  }

  //ランダムなカラーコードを生成
  function generateRandomColor(){
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  function start(){
    timerId = setTimeout(function(){
      generateGraph();
      start();
    }, INTERVAL);
  }

  start();
});
