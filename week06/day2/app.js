console.log("connected");

var googleLink = document.querySelector("a");
var loginForm = document.querySelector("form");
var clickMeButton = document.querySelector(".clickme");
var wrapper = document.querySelector(".wrapper");

googleLink.addEventListener("click", function (event) {
  if(event.target.getAttribute('href') === "https://google.com") {
    // interrupts default and exec code further this line
    event.preventDefault();
    console.log("blocked");
    return;
  }
  console.log("redirected to another block");
})

// forms request - get / post, post is used, update/delete later
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submitted", event.target);
  var email = event.target.email;
  var password = event.target.password;
  console.log(email.value, password.value);
});

// event stop propogation, stop bubbling thing
window.addEventListener("click", function(event) {
  console.log("window clicked");
});

wrapper.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("wrapper clicked");
});

clickMeButton.addEventListener("click", function (event) {
  
  console.log("container clicked");
  // FIX THIS {once: true};
});

// jquery
// $ like query selector



