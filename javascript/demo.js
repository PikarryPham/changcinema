var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
drawAxis();
drawGrid();
drawLine();
drawCircle(250, 200, 90);
function drawAxis() {
    ctx.font="12px Comic Sans MS";
    ctx.fillStyle = "green";
    
    for (var x = 100; x <= canvas.width; x+=100) {
        ctx.fillText(x, x, 10);
    }
    for (var y = 100; y <= canvas.height; y+=100) {
        ctx.fillText(y, 0, y);
    }
}
function drawGrid() {
    ctx.strokeStyle = "#ccc";
    ctx.beginPath();
    for (var x = 100; x <= canvas.width; x+=100) {
        ctx.moveTo(x, 0); // điểm có tọa độ A(x,0)
        ctx.lineTo(x, canvas.height); // điểm có tọa độ (x,y == canvas.height)
    }
    for (var y = 100; y <= canvas.height; y+=100) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();// nối điểm đầu và điểm cuối
}
function drawCircle(x, y, r) {
    ctx.beginPath();
    //ctx.strokeStyle = "yellow";
    var gradient2 = ctx.createLinearGradient(200, 0, 800, 0);
    gradient2.addColorStop("0", "red");
    gradient2.addColorStop("0.5", "magenta");
    gradient2.addColorStop("1.0", "cyan");
    ctx.strokeStyle = gradient2;
    ctx.lineWidth = 5;
    ctx.fillStyle = "transparent";
    ctx.arc(x, y, r, 1.5*Math.PI, 4 * Math.PI); // điểm bắt đầu của hình tròn: là
    ctx.stroke();
    ctx.fill();
}
function drawLine()
{
    ctx.beginPath();
    // Create gradient
    var gradient = ctx.createLinearGradient(200, 0, 800, 0);
    gradient.addColorStop("0", "red");
    gradient.addColorStop("0.5", "magenta");
    gradient.addColorStop("1.0", "cyan");
    // Fill with gradient
    ctx.strokeStyle = gradient;
    //ctx.strokeStyle = "green";
    ctx.moveTo(190, 265);
    ctx.lineTo(310, 265);
    ctx.stroke();
}
