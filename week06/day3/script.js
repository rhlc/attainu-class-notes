// ready doesn jquery thing when page is fully loaded
$(document).ready(function () {
  console.log("ready");
});

// click event listener
$('button').bind('click', function(event) {
   console.log("getting clicked here", event);
});


// change event listener
$('input[type="text"]').change(function(event) {
  console.log("val is ", this.val);
});


