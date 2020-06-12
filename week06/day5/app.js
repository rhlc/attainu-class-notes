console.log('connected');

var data = [
  { num: 5, load: 1000 },
  { num: 6, load: 1000 },
  { num: 7, load: 1000 },
];

function getProduct(numberData) {
  return new Promise(function (resolveFunction, rejectFunction) {
    setTimeout(function () {
      resolveFunction(numberData.number ** 2);
      if (square > 30) rejectFunction('val was greater than 30');
      else resolveFunction(numberData.number ** 2);
    }, numberData.load);
  });
}

// option 1 traverse first then resolve functions
// let products = [];
// for (var numberData of data) {
//   var promises = getProduct(numberData);
//   getProduct(numberData)
//     .then(function (square) {
//       console.log(square);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
//   console.log(products);
// }
// console.log(products);

var promises = [];
for (var numberData of data) {
  var promise = getProduct(numberData);
  promise.push(promise);
}
console.log(promises);

Promise.all(promises)
  .then(function (values) {
    console.log(values);
  })
  .catch(function (err) {
    console.log(err);
  });
