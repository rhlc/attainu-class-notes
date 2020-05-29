// Conditionals
var pocketMoney = prompt("enter your pocket money ");
var iceCream = 40;

if (pocketMoney < 40) {
    console.log("no ice cream") 
} else {
    console.log("have some ice cream")
}

// Nested conditions and isNaN check
// Check if num is valid
var isNotValidNum = isNaN(pocketMoney_1);

if (isNotValidNum === true) {
    alert("invalid num");
} else {
    alert("you have valid money");
    if (procetMoney_1 < 40) {
        alert("no ice cream");
    } else {
        alert("ice cream ice cream ice cream");
    }
}

// Using elseif 
if(isNotValidNum) {
    alert("invalid num");
} else if (iceCream > pocketMoney) {
    alert("you broke");
}
else {
    alert("you good");
}

// Switch Case
switch (day = "Friday") {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
        console.log("err");
  }

  
//   For loop

// init declaration, condition, updatation
for(var counter = 1; counter <= 10; counter++) {
    console.log(counter);
}