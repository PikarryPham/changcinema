var checkout = document.getElementById("checkout");
var notifi = document.getElementById("noti");
function shownoti()
{
    console.log("ahihi");
    if(notifi.classList[1] != "activated")
    {
        notifi.classList.add("activated");          
    }
 }
checkout.onclick = shownoti;
notifi.onclick = function(){
    if(notifi.classList[1] === "activated")
    {
        notifi.classList.remove("activated");          
    }
}