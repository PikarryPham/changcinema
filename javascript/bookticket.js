var book_ticket = document.getElementById("cinema");
console.log(book_ticket);
var seat = document.getElementById("seat");
console.log(seat);
var index = 0;

var vedachon = [3,26,10,20,35,40];
// function showseat()
// {
//     for(i=1;i<=14;i++)
//     {
//         var newseat = document.createElement("div");
//         newseat.classList.add("seat");
//         if(vedachon.indexOf(i) !=-1)
//         {
//             newseat.classList.add("seat-choose");
//         }
//         else {
//             newseat.addEventListener("click", function() {
//                 if (this.classList.value.indexOf("seat-choose") != -1) {
//                   this.classList.remove("seat-choose");
//                   index--;
//                 } else {
//                   this.classList.add("seat-choose");
//                   index++;
//                 }
//                 document.getElementById("chair").innerHTML = "Số vé: " + index;
//                 document.getElementById("total").innerHTML =
//                 "Tổng tiền: " + index * 50;
//         });
//     }
// }
//     newseat.id = "seat" + i;
//     var total = document.getElementById("cinema").appendChild(newseat);
//     newseat.innerHTML = i;
// }
//showseat();