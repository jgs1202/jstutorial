var cv = $('#cv')[0].getContext('2d')

cv.beginPath()
cv.arc(500, 300, 200, 0, 2 * Math.PI, true)
cv.strokeStyle = 'rgb(192, 80, 77)' // red
cv.lineWidth = 5
cv.stroke()

var drow = document.getElementById("cv").getContext("2d")
var txt = "12"
drow.beginPath()
drow.font = "italic 12px Ariel"
drow.fillStyle = 'black'
drow.fillText = (txt, 500, 125)
console.log('function is impremented.')
