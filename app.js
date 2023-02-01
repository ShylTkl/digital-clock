
function play(){

let objectDate = new Date();
let hrs = objectDate.getHours();
let min = objectDate.getMinutes();
let sec = objectDate.getSeconds();

let hr = document.getElementById("hrs")
let mi = document.getElementById("min")
let se = document.getElementById("sec")

hr.innerHTML=hrs
mi.innerHTML=min
se.innerHTML=sec

}

// Burayı internetten https://stackoverflow.com/questions/50690499/digital-clock-in-javascript
var interval = setInterval(play,1000);







