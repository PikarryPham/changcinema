
var canvas = document.getElementById("loading");
var ctx = canvas.getContext("2d");
var opacity = document.getElementsByClassName("opacity")[0];
var percent  = 0;
function loadinganimate(value)
{
    if(percent == 101)
    {
        clearInterval(animate);
        alert("Loading Successful");
        opacity.style.display = "none";
        canvas.style.display = "none";
    }
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.font = "20px sans-serif";
    ctx.lineWidth = 10;
    var gradient = ctx.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","#fb900b");
    gradient.addColorStop("0.25","#ffa22f");
    gradient.addColorStop("0.5","#009fff");
    gradient.addColorStop("0.75","#0086d6");
    gradient.addColorStop("1","#3014ea");
    ctx.strokeStyle = gradient;
    ctx.fillStyle = gradient;
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.fillText(`${value}%`,150,150);
    ctx.arc(150,150,90,1.5*Math.PI, (value * 2 * Math.PI)/100 + 1.5*Math.PI);
    ctx.stroke();
}
var animate = setInterval(function(){
    loadinganimate(percent)
    percent++;
},50);
