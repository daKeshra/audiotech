var myIndex = 0;

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
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

var date = new Date();
var year = date.getFullYear();
var spanYear = document.getElementById("currentYear");
spanYear.innerText = year;

var openIcon = document.getElementById("open");
var closeIcon = document.getElementById("close");
var navbar = document.querySelector(".navbar");
var li = document.getElementById("navlist");

openIcon.addEventListener("click", function () {
  navbar.style.display = "block";
  // navbar.style.transition = "0.6s";
  li.add.classList = ".active";
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

carousel();

// var { isValidElement } = require("react");

var messageBox = document.getElementById("Message");
var username = document.getElementById("name");
var email = document.getElementById("email");
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

var setError = (element, message) => {
  var inputControl = element.parentElement;
  var errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

var setSuccess = (element) => {
  var inputControl = element.parentElement;
  var errorDisplay = inputControl.querySelector(".error");

  errorDisplay, (innerText = "");
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

var isValidEmail = (email) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

var validateInput = () => {
  var messageBoxValue = messageBox.value.trim();
  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if (messageBoxValue === "") {
    setError(messageBox, "Name cannot be blank");
  } else if (messageBoxValue < 6) {
    setError(messageBox, "Enter your fullname");
  } else {
    setSuccess();
  }

  if (usernameValue === "") {
    setError(username, "Enter your username");
  } else if (usernameValue.length < 6) {
    setError(username, "must be more than 6 characters");
  } else {
    setSuccess();
  }

  if (emailValue === "") {
    setError(email, "Enter your email");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "email not valid");
  } else {
    setSuccess();
  }
};
