var mycanvas = document.getElementById("herecanvas");
mycanvas.width = 900;
mycanvas.height = 450;

var ctx = mycanvas.getContext("2d");

function drawline(ctx,startx,starty,endx,endy,color)
{
    //ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startx,starty);
    ctx.lineTo(endx,endy);
    ctx.stroke();
    //ctx.restore();
}
//function to draw a bar
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}
//upperLeftCornerX: the X coordinate of the bar's upper left corner
//upperLeftCornerY: the Y coordinate of the bar's upper left corner
var mydata = {
    "Detective Pikachu": 25,
    "John-Wick 3": 34,
    "Godzilla: The King of The Monsters": 30,
    "Dark Phoenix": 17,
    "The Secret Life Of The Pets 2": 20,
    "Aladdin": 28
}
//implement the bar chart
var barchart = function(movies)
{
    this.movies = movies;
    this.canvas = movies.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = movies.colors;
    //
    this.draw = function(){
        var maxValue = 0;
        for (var categ in this.movies.data){
            maxValue = Math.max(maxValue,this.movies.data[categ]);
        }
        //actual height 
        var canvasActualHeight = this.canvas.height - this.movies.padding * 2;
        var canvasActualWidth = this.canvas.width - this.movies.padding * 2;
        //drawing the grid lines
        var gridValue = 0;
        while (gridValue <= maxValue){
            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.movies.padding;
            drawline(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.movies.gridColor
            ); 
            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.movies.gridColor;
            this.ctx.font = "bold 15px Arial";
            this.ctx.fillText(gridValue, 5,gridY - 2);
            this.ctx.restore();
            gridValue+=this.movies.gridScale;
        }
        //drawing the bars
        var barIndex = 0;
        var numberOfBars = Object.keys(this.movies.data).length;
        var barSize = (canvasActualWidth)/numberOfBars;
        for (categ in this.movies.data){
            var val = this.movies.data[categ];
            var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
            drawBar(
                this.ctx,
                this.movies.padding + barIndex * barSize,
                this.canvas.height - barHeight - this.movies.padding,
                barSize,
                barHeight,
                this.colors[barIndex%this.colors.length]
            );
            barIndex++;
        }
    }
}
var thebarchart = new barchart(
    {
        canvas: mycanvas,
        padding:45,
        gridScale:5,
        gridColor:"#dadada",
        data: mydata,
        colors:["#FF327C","#FF8353", "#FFC248","#00AB8D","#0069FF","#D9E3DA"]
    }
);
thebarchart.draw();