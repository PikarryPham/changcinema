var slides = document.getElementsByClassName("slides");
console.log(slides);
var slideindex = 1; // vi tri hien tai cua slide thu i
function hienthislide()
{
    for(i=0;i<slides.length;i++) // no se chay het vong lap va cho tat ca cac slide khong hien thi, cho den khi no gap slide thu slideindex-1 thi display: block
    {
        slides[i].style.display="none";
    }
    slides[slideindex - 1].style.display="block"; // bat dau di tu 1 thay vi di tu 0;
}
hienthislide();
function hienthislideauto()
{
    hienthislide(); // hien thi slide truoc r tang slideindex
    slideindex++;
    if(slideindex > slides.length)
    {
    slideindex = 1;
    }   
    console.log(slideindex);
}
var setting = setInterval(hienthislideauto,3000);