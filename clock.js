select = document.getElementById('mode')
var cv = document.getElementById("cv").getContext("2d")
var ctx = document.getElementById("cv").getContext("2d")
var Timer, sec, min, hour

function Click() {
  console.log(select.selectedIndex)
  switch (select.selectedIndex) {
    case 0:
      break;
    case 1:
      case1();
      console.log("case1です。");
      break
    case 2:
      case2();
      console.log('case2です。');
      break
    case 3:
      case3();
      console.log("case3です。");
      break
  }
}

function case1() {
  Timer = setInterval('reload()', 995)
  document.getElementById("inputForm").style.display = "none"
}

function case2() {
  cv.clearRect(0, 0, 1000, 600)
  clearInterval(Timer);
  document.getElementById("inputForm").style.display = "block"
}

function case3() {
  hour=10;
  min=8;
  sec=36;
  drawClock(hour,min,sec);
  cv.clearRect(0, 0, 1000, 600)
  clearInterval(Timer)
  document.getElementById("inputForm").style.display = "none"
  var x, y, Timer2;
  cv.addEventListener('mousedown', Drug(), false);
  cv.addEventListener('mouseup',clearInterval(Timer2), false);
}

function Drug(e) {
  Timer2 = setInterval('getCoo()', 50);
  function getCoo() {
    var rect = e.target.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    var theta,thetah,thetam,thetas,goh,gom,gos;
    theta = Math.atan{(y-300)/(x-500)};
    thetah = Math.tan(hour/12*2*Math.PI);
    thetam = Math.tan(min/60*2*Math.PI);
    thetas = Math.tan(sec/60*2*Math.PI);
    if(Math.abs(tan-tanh)<10){
      goh=1;
    }
    if(Math.abs(tan-tanm)<10){
      gom=1;
    }
    if(Math.abs(tan-tans)<10){
      gos=1;
    }
  }
}

function drawClock(h,m,s){
  //文字盤を描写
  var i = 0;
  var txt = 0;
  ctx.font = "20px Arial"; //フォントにArial,40px,斜体を指定
  ctx.fillStyle = "black"; //塗り潰し色を緑に
  for (i = 1; i < 13; i++) {
    txt = i;
    ctx.fillText(txt, 490 + 170 * Math.sin(txt * Math.PI / 6), 310 - 170 * Math.cos(txt * Math.PI / 6)); //テキストを塗り潰しで描画
  }

  // 周りの枠線
  cv.beginPath()
  cv.arc(500, 300, 200, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'black'
  cv.lineWidth = 5
  cv.stroke()
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 100 * Math.sin((h / 12 + m / 60 / 12) * 2 * Math.PI), 300 - 100 * Math.cos((h / 12 + m / 60 / 12) * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 8;
  cv.stroke(); // 4.Canvas上に描画する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 160 * Math.sin(m / 60 * 2 * Math.PI), 300 - 160 * Math.cos(m / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 4;
  cv.stroke();
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.strokeStyle = "red";
  cv.lineTo(500 + 160 * Math.sin(s / 60 * 2 * Math.PI), 300 - 160 * Math.cos(s / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 1;
  cv.stroke();

  //AM,PM
  if (hour < 12) {
    txt = 'AM';
  } else {
    txt = 'PM';
  }
  ctx.strokeStyle = 'black';
  ctx.strokeText(txt, 485, 370);

  //真ん中の丸(黒)
  cv.beginPath()
  cv.arc(500, 300, 5, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'black'
  cv.lineWidth = 5
  cv.stroke();

  //真ん中の丸
  cv.beginPath()
  cv.arc(500, 300, 2, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'white'
  cv.lineWidth = 2;
  cv.fillStyle = 'white';
  cv.stroke();
  cv.fill();
}

function toClock() {
  hour = document.eg.Hour.value
  min = document.eg.Minute.value
  sec = document.eg.Second.value
  console.log(`${hour}時${min}分${sec}秒`)
  //文字盤を描写
  var i = 0;
  var txt = 0;
  ctx.font = "20px Arial"; //フォントにArial,40px,斜体を指定
  ctx.fillStyle = "black"; //塗り潰し色を緑に
  for (i = 1; i < 13; i++) {
    txt = i;
    ctx.fillText(txt, 490 + 170 * Math.sin(txt * Math.PI / 6), 310 - 170 * Math.cos(txt * Math.PI / 6)); //テキストを塗り潰しで描画
  }

  // 周りの枠線
  cv.beginPath()
  cv.arc(500, 300, 200, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'black'
  cv.lineWidth = 5
  cv.stroke()
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 100 * Math.sin((hour / 12 + min / 60 / 12) * 2 * Math.PI), 300 - 100 * Math.cos((hour / 12 + min / 60 / 12) * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 8;
  cv.stroke(); // 4.Canvas上に描画する
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 160 * Math.sin(min / 60 * 2 * Math.PI), 300 - 160 * Math.cos(min / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 4;
  cv.stroke();
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.strokeStyle = "red";
  cv.lineTo(500 + 160 * Math.sin(sec / 60 * 2 * Math.PI), 300 - 160 * Math.cos(sec / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 1;
  cv.stroke();

  //AM,PM
  if (hour < 12) {
    txt = 'AM';
  } else {
    txt = 'PM';
  }
  ctx.strokeStyle = 'black';
  ctx.strokeText(txt, 485, 370);

  //真ん中の丸(黒)
  cv.beginPath()
  cv.arc(500, 300, 5, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'black'
  cv.lineWidth = 5
  cv.stroke();

  //真ん中の丸
  cv.beginPath()
  cv.arc(500, 300, 2, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'white'
  cv.lineWidth = 2;
  cv.fillStyle = 'white';
  cv.stroke();
  cv.fill();
}

//ここからreload関数
function reload() {
  cv.clearRect(0, 0, 1000, 600)
  console.log("関数reloadが実行されました。")
  //文字盤を描写
  var i = 0;
  var txt = 0;
  ctx.font = "20px Arial"; //フォントにArial,40px,斜体を指定
  ctx.fillStyle = "black"; //塗り潰し色を緑に
  for (i = 1; i < 13; i++) {
    txt = i;
    ctx.fillText(txt, 490 + 170 * Math.sin(txt * Math.PI / 6), 310 - 170 * Math.cos(txt * Math.PI / 6)); //テキストを塗り潰しで描画
  }

  // 周りの枠線
  cv.beginPath()
  cv.arc(500, 300, 200, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'black'
  cv.lineWidth = 5
  cv.stroke()

  // 現在のローカル時間が格納された、Date オブジェクトを作成する
  var date_obj = new Date();
  sec = date_obj.getSeconds();
  min = date_obj.getMinutes();
  hour = date_obj.getHours();

  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 100 * Math.sin((hour / 12 + min / 60 / 12) * 2 * Math.PI), 300 - 100 * Math.cos((hour / 12 + min / 60 / 12) * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 8;
  cv.stroke(); // 4.Canvas上に描画する
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 160 * Math.sin(min / 60 * 2 * Math.PI), 300 - 160 * Math.cos(min / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 4;
  cv.stroke();
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.strokeStyle = "red";
  cv.lineTo(500 + 160 * Math.sin(sec / 60 * 2 * Math.PI), 300 - 160 * Math.cos(sec / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 1;
  cv.stroke();

  //AM,PM
  if (hour < 12) {
    txt = 'AM';
  } else {
    txt = 'PM';
  }
  ctx.strokeStyle = 'black';
  ctx.strokeText(txt, 485, 370);

  //真ん中の丸(黒)
  cv.beginPath()
  cv.arc(500, 300, 5, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'black'
  cv.lineWidth = 5
  cv.stroke();

  //真ん中の丸
  cv.beginPath()
  cv.arc(500, 300, 2, 0, 2 * Math.PI, true)
  cv.strokeStyle = 'white'
  cv.lineWidth = 2;
  cv.fillStyle = 'white';
  cv.stroke();
  cv.fill();
}
//ここまでreload関数
