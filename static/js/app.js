const date = new Date();
const year = date.getFullYear();
var spanYear = document.getElementById("currentYear");
spanYear.innerText = year;

const openIcon = document.getElementsByClassName("open");
const closeIcon = document.getElementsByClassName("close");

var myIndex = 0;
// const date = new Date();
// const year = date.getFullYear();
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 6000); // Change image every 2 seconds
}

// document.getElementById("cuear").innerHTML = "hello";
// console.log(year);
// yearId.innerHTML = year;
