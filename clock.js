var select = document.getElementById('mode')
var cvs = document.getElementById("cv")
var cv = document.getElementById("cv").getContext("2d")
var ctx = document.getElementById("cv").getContext("2d")
var Timer;
var time = new Array(3);

function Click() {
  console.log(select.selectedIndex)
  switch (select.selectedIndex) {
    case 0:
      break;
    case 1:
      case1();
      console.log("case1です。");
      break;
    case 2:
      case2();
      console.log('case2です。');
      break;
    case 3:
      case3();
      console.log("case3です。");
      break;
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
var Timer2;

function case3() {
  time[0] = 10;
  time[1] = 8;
  time[2] = 36;
  cv.clearRect(0, 0, 1000, 600)
  clearInterval(Timer)
  drawClock(time[0], time[1], time[2]);
  document.getElementById("inputForm").style.display = "none"
  cvs.addEventListener('mousedown', Drug, false);
  cvs.addEventListener('mouseup', Stop, false);
}

function Drug() {
  Timer2 = setInterval(getCoo.bind(this, event), 2000);
  console.log("mousedown")
}

function Stop() {
  clearInterval(Timer2);
  console.log("mouseup")
}

function getCoo(e) {
  console.log("getCooを実行");
  var rect = e.target.getBoundingClientRect();
  var x, y;
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  console.log(`${x},${y}`);
  var theta = new Array(4);
  var go = 0;
  theta[3] = Math.atan((y - 300) / (x - 500));
  theta[0] = Math.tan(time[0] / 12 * 2 * Math.PI);
  theta[1] = Math.tan(time[1] / 60 * 2 * Math.PI);
  theta[2] = Math.tan(time[2] / 60 * 2 * Math.PI);
  var i;
  for (i = 0; i < 3; i++) {
    theta[i] = Math.abs(theta[3] - theta[i]);
  }
  for (i = 1; i < 3; i++) {
    if (theta[i] > theta[go]) {
      go = i;
    }
  }
  if (theta[go] < 10) {
    cv.clearRect(0, 0, 1000, 600);
    drawClock(time[0], time[1], time[2]);
  }
}

function drawClock(h, m, s) {
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
  if (time[0] < 12) {
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
  time[0] = document.eg.Hour.value
  time[1] = document.eg.Minute.value
  time[2] = document.eg.Second.value
  console.log(`${time[0]}時${time[1]}分${time[2]}秒`)
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
  cv.lineTo(500 + 100 * Math.sin((time[0] / 12 + time[1] / 60 / 12) * 2 * Math.PI), 300 - 100 * Math.cos((time[0] / 12 + time[1] / 60 / 12) * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 8;
  cv.stroke(); // 4.Canvas上に描画する
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 160 * Math.sin(time[1] / 60 * 2 * Math.PI), 300 - 160 * Math.cos(time[1] / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 4;
  cv.stroke();
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.strokeStyle = "red";
  cv.lineTo(500 + 160 * Math.sin(time[2] / 60 * 2 * Math.PI), 300 - 160 * Math.cos(time[2] / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 1;
  cv.stroke();

  //AM,PM
  if (time[0] < 12) {
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
  time[2] = date_obj.getSeconds();
  time[1] = date_obj.getMinutes();
  time[0] = date_obj.getHours();

  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 100 * Math.sin((time[0] / 12 + time[1] / 60 / 12) * 2 * Math.PI), 300 - 100 * Math.cos((time[0] / 12 + time[1] / 60 / 12) * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 8;
  cv.stroke(); // 4.Canvas上に描画する
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.lineTo(500 + 160 * Math.sin(time[1] / 60 * 2 * Math.PI), 300 - 160 * Math.cos(time[1] / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 4;
  cv.stroke();
  cv.beginPath(); // 1.Pathで描画を開始する
  cv.moveTo(500, 300); // 2.描画する位置を指定する
  cv.strokeStyle = "red";
  cv.lineTo(500 + 160 * Math.sin(time[2] / 60 * 2 * Math.PI), 300 - 160 * Math.cos(time[2] / 60 * 2 * Math.PI)); // 3.指定座標まで線を引く
  cv.lineWidth = 1;
  cv.stroke();

  //AM,PM
  if (time[0] < 12) {
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
