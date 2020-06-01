# Week 05 Day 1

## Topics

- arrays
- objects

## 0. Data Types Refresher

- primitive data types (*reference by copy*)
  - numbers
  - string
  - boolean
  - null
- reference data types (*reference by address*)
  - arrays
  - pointers

## 1. Arrays

- allows you store collection of data of any type
- created using square brackets
- code snippet 1

  ```js
  array_1 = [1, "hello", "c", 123];

  // access first element
  console.log(array_1[0]); //  displays 1

  // chainging/updating value at index 0
  array_1[0] = 2;

  ```

- indexing - each element in array has location starting from 0 index, this is true for all programming languages as well as cs, in general
- starting to find out js is weird

### 1.1 Nesting of Arrays

- arrays inside arrays is nesting of arrays, used to rep data in matrix form, combination of rows and columns
- code snippet 2

  ```js
  matrix = [[r1c1, r1c2, r1c3], [r2c1, r2c2, r2c3], [r3c1, r3c2, r3c3]];
  
  // output row 2 element 2
  console.log(matrix[1][1]);
  ```

### 1.2 Traversal of Arrays

- code snippet 3
  
  ```js
  // manual method
  arr[3] = "something-something";
  console.log(arr[0]); // displays s
  
  // 1.2.1 automating using loop
  var oneDimArray = [1 ,2, 3];
  for (var i = 0; i < oneDimArray.length - 1; i++) {
    console.log(oneDimArray[i]); // output all values in 1 d array
  }

  // 1.2.2 for all loop
  for (value of oneDimArray) {
      console.log(value);
  }
  ```

## 2. Objects

- denoted using curly braces, data rep using key-value pair, also know as dictionaries in other programming languages

- code snippet 4
  
  ```js
  // init a object
  var person {
      name: "rahul choudhary",
      age: 25,
      location: "nainital",
      isSingle: true,
  }
  // accessing using dot notation
  console.log(person.name); // output "rahul choudhary"

  // accesing using array notation
  console.log("name"); // output "rahul choudhary"
  
  // traverse in objects
  for (fieldNames of person) {
      console.log(fieldNames); // display key values
  }
  ```

---
