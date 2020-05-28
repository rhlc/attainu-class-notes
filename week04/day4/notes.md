# Week 04 Day 3

## Topics

- Intro to JavaScript 
	- History
	- JS data types
	- JS operators

## Intro

- Scripting language vs programming language
- **why** do we need to learn programming language?
	- how js came to be one of the core tech of the www
- basically web concept -- file stored in another computer are fetched, then served into another computer

## History

- netscape navigator, early 1995
- it was all static, there's was no user interaction, it was bland and bording
- used primarily for acadameic purposes

### Advent of Mocha

- as web become popular there was a new need of interactive stuff
- which required a small scripting lang that could introduce interactivity of web page
- java was pretty famous back then
	- but it was kind of difficult plus it was closed community language
- so they could not use java for web purposes 
- this lent to advent of MOCHA scripting lang

### A language for Web Browsers

- scheme was dev by Brenden Eich (father of JS)
- 90s java was ruling, there was a lot of pressure on Mocha dev
	- they wanted to come up with working prototype of Mocha
	- they also wanted to take advantage of java's popularity for marketing reasons
- java was resevered to be a corporate friendly lang

### Releases of JavaScript

- dec, 1995, netscape launched Mocha, soon renamed as *LiveScript*
- IE was bubbling in dev labs at Microsoft, they were focusing more compilation/web browser part
- nov 1996, v2 of Mocha, renamed as LiveScript
- now came a new web browser netscape navigator (grandpa of firefox) which had very first JavaScript
	- this was well received amongst web development community
	- there were still a lots of bugs which were polished in v3

### Dawn of ECMAScript

- there was a need for some standards to write JS for easy maintenance
- ECMA was formed 1961 which was concerned with standardisation of information
- due to trademark reasons, JS was not the accepted name, it's offically called "ECMAScript"
- first ver of ECMAScript came live during 1997 along with Netscape 4
- critical features were missing, ECMA script v2 came in 1998
- following es2 with minor updates
- ability to connect website was a reality after AJAX was born
- netscape and IE5 supported it

### ECMAScript 6

- most accepted upgrage of JS, still in 2020, there are still some features not fully supported by web browsers
- Transpilers like **babel** compiles code into backward JS for more support across devices

### Future of JS

- web assembly
- running native assembly lang on to the web, which is low level hence much faster

## JavaScript

- console will read loaded js file from web browser and can be used to playaround

### Print

1. console.log()
	```javascript
	console.log("console logged");
	```

1. document.write()
	```javascript
	document.write("hello, world!"); // non-blocking output
	```
1. alert()
	```javascript
	alert("this is alert!"); // blocking output
	```

### Taking I/T from user

- using prompt
	```javascript
	prompt("enter name ");
	```

### Variables

1. Declaration (create) 
1. Initialization (store)

- Example
	```javascript
	var name = "rahul choudhary"; // doing declaration and init together
	```

### Data types

1. **undefined** - bucket with garbage value 
1. **null** - empty container, use when sure var is going to be empty, if not meaningful 
1. Arrays
1. Objects
1. Boolean - true(1) or false(0)
1. Number 
1. String - "Rahul Choudhary"
1. BigInt
1. Symbol
1. Object

## JS operators

### Arithmetic operators

	+ 	 Addition
	- 	 Subtraction
	* 	 Multiplication
	** 	 Exponentiation (ES2016)
	/ 	 Division
	% 	 Modulus (Division Remainder)
	++ 	 Increment
	-- 	 Decrement

### Logical operators
	||	 or (either)
	&&   and (both)
	!    not (none)

### Comparision operators

	===  strictly equal
	==   normal equal
	<=   less than or equal
	>=   greater than or equal
	!==  strict not equal
	!=   not equal


### Ternary operators
- to be continued
