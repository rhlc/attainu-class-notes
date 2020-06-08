console.log("connected");

var h1Tag = document.querySelector("h1");

var list = document.querySelector(".list");
list.append("<h3> heading 3 </h3>");


// inserting text content or nodes
h1Tag.textContent = h1Tag.textContent + " stuff inject here";
h1Tag.innerHTML = " <h2> stuff inject here </h2>";
h1Tag.textContent = null;

// inserting html elements 
let divEle = document.createElement("h2");

// add either text content 
var ulTag = document.createElement("p");

// TODO divEle with child as ulTag

// append it or add at end, just before, closing tag
divEle.append(ulTag); 

// prepend it 
divEle.prepend(ulTag);  // since one element, there's no diff bw prepend/append here
console.log(divEle);

// insert adjacent element
// beforeBegin 
// beforeEnd 
// afterEnd 
// afterbegin

//  FIX ERR
// list.insertAdjacentElement("afterbegin", "list element 1");
// list.insertAdjacentElement("afterbegin", list);


// adding stuff using back ticks `
var name = "rahul";
console.log(`my name is ${name}. `);

// insert html as strings
var htmlBlock = `
  <div class=section>
    <p data-p="shit">stuffstuff stuff stuffstuffstuffstuff stuff stuff</p>

  </div>
`;
console.log(typeof(htmlBlock));

// select entire body
// document.body 
document.body.innerHTML = "<p>lorem lorem </p>"
document.body.insertAdjacentHTML("afterbegin", htmlBlock);

// set get 
// data attribute 
print.children.setAttribute

// update element