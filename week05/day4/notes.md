# WK5 D4

## Topics

- closures
- es6

## Closures

- function scope
- every code block creates an execution context (restricted area where code block can exec)
- whenever a function is created, a brand new exec context is created, it may be
  - global context (can be accessed from everywhere)
  - local context (can be accessed only from own code block)
- any code which the script doesn't specifically start up as a background task has a Window as its global object
- windows is global context area

- closure
  - returns a function
  - variable are stored and not get deleted even after invoking
