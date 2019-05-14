var slideshow = document.querySelectorAll(".slideshow>img");
console.log(slideshow);
// function showslide()
// {
//     if(slideindex >= slideshow.length)
//     {
//         slideindex = 0;
//     }
//     for(i=0; i<slideshow.length;i++)
//     {
//         slideshow[i].style.opacity = "0";
//     }
//     slideshow[slideindex].style.opacity = "1";
//     slideindex++;
//     console.log(slideindex);
// }
// var setting = setInterval(showslide,2500);
var slideindex  = 0;
function showslide(index)
{
    for(i=0; i<slideshow.length;i++)
    {
        slideshow[i].style.opacity = "0";
    }
    slideshow[slideindex].style.opacity = "1";
    if(slideindex >= slideshow.length - 1)
    {
        slideindex = 0;
    }else
    {
        slideindex++;
    }
    console.log(slideindex);
}
var setting = setInterval(function()
{
    showslide(slideindex);
},2500);

