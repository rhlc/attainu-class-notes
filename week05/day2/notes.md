# Week 05 Day 2

## Topic

- functions

## What Are Functions

- code blocks that does a specific thing
- helps avoid repetition in code
- perform same actions with different data

## Using Functions

- syntax

  ```js
  function <functionName> () {
      // do something
  }
  ```

- steps
  - declaration
  - invocation/calling
- example

  ```js
  // function declaration
  function addTwoNumbers(num1, num2) {
    return (res = num1 + num2);
  }

  // calling function
  console.log(addTwoNumbers(2, 2));
  ```

## Functions Inside Object

- example

  ```js
  var person = {
      name: "rahul choudhary",
      profession: "web developer",
      intro : function () {
          console.log("hello");
      };
    },
  };
  ```

## Common Methods

- toLowerCase()
- stringName.length()
- stringName.slice(start, end)
- stringName.indexOf("r")
- personName.replace("n", "m")
- stringName.push("element")
- stringName.pop("element")
- numbers.unshift(1, 2, 3...)
- numbers.concat([1, 2, 3...])
- data.hasOwnProperty("name")

## Accepting Inputs

- arguments
- parameters

- example
  
  ```js
  function addTwoNumbersWithInputs (num1, num2) {
      console.log(num1, num2);
  }

  addTwoNumbersWithInputs(3, 4);
  ```

## Return

- to get output from a function use return keyword
- note - you cannot use multiple return statement

## Terms

- mutability and immutablity
- regular expression

---