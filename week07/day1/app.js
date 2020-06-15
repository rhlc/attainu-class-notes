console.log('connected');
// https://www.w3schools.com/html/html5_geolocation.asp

function successCallback(position) {
  console.log(position);
}

function errCallback(err) {
  console.log(err);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errCallback);
} else {
  console.log('you underground?');
}



// storage
function fetchPosts() {
  fetch(https://jsonplaceholder.typicode.com/users).then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.data);
  }).catch(function(err) {
    console.log(err);
  });
}

localStorage.setItem('name', 'rahul');
localStorage.setItem('');
localStorage.getItem('');
localStorage.clear();
