var clockLabel = document.querySelector(".time");
var dateLabel = document.querySelector(".date");
var date = new Date();

dateLabel.innerHTML =
  date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

dateLabel.innerHTML =
  date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

/*SAAT AYARLAMASI */
if (date.getHours() < 10) {
  clockLabel.innerHTML = "0" + date.getHours() + ":" + date.getMinutes();
} else {
  clockLabel.innerHTML = date.getHours() + ": " + date.getMinutes();
}

/*Yukarı cıkma*/

var myButton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
