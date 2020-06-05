# WK5 D5

## Topics

- callbacks
- dom

## callbacks

- function itself as an argument

- binary trees
  - bin tree has strictly two childs
  - document is structured in a tree form in html
  - this is called document object model
  - there's one root with several childrens/branches
  - _immediate child_
  - process of converting doc into object based model

### dom selector

- tag selector is preferred - like #document
- if we edit html, the dom gets redone/rebuilt, react has virtual dom
- dom building takes time, even if one stuff changes in html, entire dom is rebuilt

- 3 types of selections
  - getElementByTagName
  - getElementsByClassName
  - getElementByID
- query selector way (prefered)

  - querySelectorAll

  ```js
  let h1Ele = querySelectorAll("h1");
  let idEle = querySelectorAll("#id");
  let classEle = querySelectorAll(".class");
  ```

- in es5 Array.from() to convert dom to array
- in es6 let h1Elements = [...h1Elements]

## events

---
