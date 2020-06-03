# wk5 d3

## topic

- es5 classes (protoypes)

## paradigms to write code

- functional programming (goes/parses code sequentially)
  - composition of functions
    - some math functions concept
  - inheritence
  - personal preference of fp ✔
- object oriented programming (tries to map real world with programming)
  - modeling of real world objects into code in oop
  - every object has something it can do - open bottle cap, drink water

## javascript's paradigm

- class based inheritance in python, c++, etc
- prototypes based inheritance, this is exclusive to js, it's non-native oop

- important -
  - *this* keyword, *new* keyword, *custom* data type
    - used to rep/call current object
    - example
  
  ```js
  // using this keyborad to rep current object
  var person = {
    name: "rahul",
    age: 23,
    pro: "web developer",
    intro: function () {
      return ("hi, there, I'm " + this.name + "of age" + this.age");
    }
  };
  ```

## creating instance of an object

- example - 

  ```js
  // use this keyword to point out current child object inside a function
  function person (name, age, pro) {
    this.name = name;
    this.age = age;
    this.pro = pro;
  }

  // protoyupe
  person.prototype.intro = function () {
    return ("hi, there, I'm " + this.name + "of age" + this.age");
  }
  
  // use new keyword to point 
  var person = new person("raman", 24, "professor");
  var person = new person("aditya", 25, "sde level 1");
  ```

## what is "__proto__"

- sharable common
- what is inheritance?
  - getting from parent, grandparent, so on...
  - ability to extend some properties from parent stuff
- constructor function
- [article ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

- protoype example
   
  ```js
  // prototype inheritence
  function car (feature1, feature2) {
    this.feature1 = feature1;
    this.feature2 = feature2;
  }

  car.prototype.drive = function () {
    return "im driving"
  }
  car.prototype.honk = function () {
    return "im honking"
  }
  car.prototype.refuel = function () {
    return "im refueling"
  }

  function audi (model, col, feature1, feature2) {
    var audi = new Car(feature1, feature2)
    audi.model = model
    audi.color = color
    return audi
  }
  // extended car's function constructor to audi's func constructer
  audi.prototype = car.prototype;
  audi.prototype.dr1 = function ( {
    return "im blwing up drl";
  };
  ```

---
