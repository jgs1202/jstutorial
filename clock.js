var select = document.getElementById('mode')
var cvs = document.getElementById("cv")
var cv = document.getElementById("cv").getContext("2d")
var ctx = document.getElementById("cv").getContext("2d")
var Timer, rect, x, y, go, htom;
var time = new Array(3);
var theta = new Array(4);
var difTheta = new Array(3)


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
      console.log("case3です。");
      case3();
      break;
  }
}

function case1() {
  console.log("This is case one.")
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
  console.log("case3 is impremented.")
  time[0] = 10;
  time[1] = 8;
  time[2] = 36;
  cv.clearRect(0, 0, 1000, 600)
  clearInterval(Timer)
  drawClock(time[0], time[1], time[2]);
  document.getElementById("inputForm").style.display = "none"
  cvs.addEventListener('mousedown', Drug, false);
  //  cvs.addEventListener('mouseup', Stop, false);
}

function Drug(e) {

  /*  Timer2 = setInterval(getCoo.bind(this, event), 500)
  }

  function Stop() {
    clearInterval(Timer2);
  }

  function getCoo(e) { */
  console.log("getCooを実行");
  rect = e.target.getBoundingClientRect();
  x = e.clientX - rect.left
  y = e.clientY - rect.top;
  console.log(`${x},${y}`);
  go = 0;
  theta[3] = Math.atan2(x - 500, 300 - y) * 180 / Math.PI;
  if (theta[3] < 0) {
    theta[3] = theta[3] + 360;
  }
  console.log(`theta(mouse) is ${theta[3]}`)
  theta[0] = time[0] / 12 * 360 + time[1] / 60 * 360 / 12;
  theta[1] = time[1] / 60 * 360;
  theta[2] = time[2] / 60 * 360;
  console.log(time[0], time[1], time[2])
  var i;
  for (i = 0; i < 3; i++) {
    difTheta[i] = Math.abs(theta[3] - theta[i]);
  }
  for (i = 1; i < 3; i++) {
    if (difTheta[i] < difTheta[go]) {
      go = i;
    }
  }
  console.log(`go is ${go}`)
  console.log(`difTheta[go] is ${difTheta[go]}`)
  if (difTheta[go] < 10) {
    go = go
  } else {
    go = 3
  }
  cvs.addEventListener('mousemove', move, false);
  cvs.addEventListener('mouseup', mup, false);
}

function move(e) {
  var rect = e.target.getBoundingClientRect();
  x = e.clientX - rect.left
  y = e.clientY - rect.top;
  theta[3] = Math.atan2(x - 500, 300 - y) * 180 / Math.PI;
  theta[go] = theta[3]
  console.log(theta[3])
  htom = 0;
  switch (go) {
    case 0:
      time[0] = theta[0] / 360 * 12
      if(time[0]<0){
        time[0]=12+time[0]
      }
      if(time[0]>12){
        time[0]=time[0]-1
      }
      htom = parseFloat("0."+(String(time[0])).split(".")[1])
      time[0]=Math.floor(time[0])
      time[1]=60*htom;
      if(time[1]>60){
        time[1]=time[1]-60
      }
      cv.clearRect(0, 0, 1000, 600);
      drawClock(time[0], time[1], time[2]);
      break;
    case 1:
      time[1] = theta[1] / 360 * 60
      if(time[1]<0){
        time[1]=60+time[1]
      }
      if(time[1]>60){
        time[1]=time[1]-1

      }
      cv.clearRect(0, 0, 1000, 600);
      drawClock(time[0], time[1], time[2]);
      break;
    case 2:
      time[2] = theta[2] / 360 * 60
      if(time[2]<0){
        time[2]=60+time[2]
      }
      if(time[2]>60){
        time[2]=time[2]-60
      }
      cv.clearRect(0, 0, 1000, 600);
      drawClock(time[0], time[1], time[2]);
      break;
    case 3:
      break;
  }
  console.log(time[go])
  cvs.addEventListener('mouseup', mup, false);
}

function mup(e) {
  console.log("mouseup")
  cvs.removeEventListener('mousemove', move, false);
  cvs.removeEventListener('mouseup', mup, false);
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
  cv.lineTo(500 + 160 * Math.sin(( m / 60 + s /60/60)*2* Math.PI), 300 - 160 * Math.cos(( m / 60 + s /60/60)* 2 * Math.PI)); // 3.指定座標まで線を引く
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
