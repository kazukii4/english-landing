
// function currentTime() {
//   var date = new Date(); 
//   var hour = date.getHours();
//   hour = document.body.classList.add('hour');
//   var min = date.getMinutes();
//   min = document.body.classList.add('min');
//   var sec = date.getSeconds();
//   sec = document.body.classList.add('sec');
//   var midday = "AM";
//   midday = (hour >= 7) ? "PM" : "AM";
//   hour = (hour == 0) ? 7 : ((hour > 7) ? (hour - 7): hour); 
//   hour = updateTime(hour);
//   min = updateTime(min);
//   sec = updateTime(sec);
//   document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
//     var t = setTimeout(currentTime, 1000);
// }

// function updateTime(k) { 
//   if (k < 10) {
//     return "0" + k;
//   }
//   else {
//     return k;
//   }
// }

// currentTime();