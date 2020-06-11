console.log('connected');

// execs works after all code execs
// setTimeout(function() {
//   console.log('hello, world');
// }, 2000);

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// setInterval
// setInterval(function () {
//   console.log('im repeated');
// }, 2000);

// problem 
// define a func, which add two num, wait 5000 then return result
// function addNumSlowly(callbackFunction, a, b) {
//   setTimeout (function () {
//     var sum = a + b;
//     if (sum > 20) {
//       callbackFunction('sum is greater than 20', null);
//     } else {
//       callbackFunction(null, sum);
//     }
//   }, 5000);
// }

// addNumSlowly(function(err, result) {
//   if (err !== null) alert(err)
//   else console.log(`${result}`);
// }, 10, 20);

// promises

// create promise
function addNumPromise(a, b) {
  return new Promise(function (resFunc, rejFunc) {
    setTimeout(function() {
      var sum = a + b;
      if (sum > 20) {
        // err
        rejFunc('sum is greater than 20');
      } else {
        resFunc(`sum: ${sum}`);
      }
    }, 3000);
  });
};

// consume promise
var sum = addNumPromise(20, 0).then(function (result) {
  console.log(result);
}).catch(function (err) {
  alert(`err: ${err}`);
});
// console.log(sum);


console.log('process end');
