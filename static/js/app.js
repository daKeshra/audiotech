const date = new Date();
const year = date.getFullYear();
var spanYear = document.getElementById("currentYear");
spanYear.innerText = year;

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

var openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");
var navbar = document.querySelector(".navbar");

openIcon.addEventListener("click", function () {
  navbar.style.display = "block";
  navbar.style.transition = "0.6s";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  // navbar.style.
});

closeIcon.addEventListener("click", function () {
  navbar.style.display = "none";
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
  // navbar.style.
});
