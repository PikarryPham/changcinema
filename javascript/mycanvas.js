var canvas = document.getElementById("mycanvas");
console.log(canvas);
canvas.width = 200;
canvas.height = 200;

var ctx = canvas.getContext("2d");
function drawline(ctx, startX, startY, endX, endY)
{
    ctx.beginPath();
    ctx.moveto(startX,startY);
    ctx.lineto(endX, endY);
    ctx.stroke();
};
function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
};
function drawcircle(ctx, centerX, centerY, radius, startAngle, endAngle)
{
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius,startAngle,endAngle);
    ctx.stroke();
};
//radius: toa do X cua diem cuoi tren truc hoanh
//centerX:toa do X cua trung tam duong tron( x cua tam I)
//centerY:toa do Y cua trung tam duong tron( y cua tam I)
//startAngle: goc khoi dau noi 1 phan circle start
//endAngle: goc ket thuc noi 1 phan circle end
function drawpie(ctx,centerX,centerY,radius,startAngle,endAngle,color)
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}
var myvinyls = {
    "Aladdin": 20,
    "Pikachu Detective": 10,
    "Godizlla 2019": 25,
    "Endgame": 35,
    "The Secret Life of Pets": 25,
};
var Piechart = function(options){
 
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
 
    var total_value = 0;
 
    var color_index = 0;
 
    for (var categ in this.options.data){
 
    var val = this.options.data[categ];
        total_value += val;
    }
    var start_angle = 0;
    for (categ in this.options.data){
        val = this.options.data[categ];
        var slice_angle = 2 * Math.PI * val / total_value;
            drawpie(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
            start_angle += slice_angle;
            color_index++;
        }
    }
};
var mypiechart = new Piechart(
    {
        canvas:canvas,
 
        data:myvinyls,
 
        colors:["#FF327C","#FF8353", "#FFC248","#00AB8D","#0069FF"],
    }
);
mypiechart.draw();