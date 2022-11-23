// DOM elements

const display = document.querySelector(".display");

// const b1 = document.querySelector("#calc__1");
// const b2 = document.querySelector("#calc__2");
// const b3 = document.querySelector("#calc__3");
// const b4 = document.querySelector("#calc__4");
// const b5 = document.querySelector("#calc__5");
// const b6 = document.querySelector("#calc__6");
// const b7 = document.querySelector("#calc__7");
// const b8 = document.querySelector("#calc__8");
// const b9 = document.querySelector("#calc__9");
// const b0 = document.querySelector("#calc__0");

const numButtons = Array.from(document.querySelectorAll(".numbers"));

// const bpn = document.querySelector("#calc__posneg");
// const bpercent = document.querySelector("#calc__percent");
// const bmult = document.querySelector("#calc__mult");
// const bdiv = document.querySelector("#calc__div");
// const bsub = document.querySelector("#calc__sub");
// const badd = document.querySelector("#calc__add");

const operatorButtons = Array.from(document.querySelectorAll(".operator"));

const bClear = document.querySelector("#calc__clear");
const bDec = document.querySelector("#calc__dec");
const bEqual = document.querySelector("#calc__equal");
const bPosneg = document.querySelector("#calc__posneg");

const answerBox = document.querySelector(".ansBox");
const history = document.querySelector(".history");

let num1 = "";
let num2 = "";
let operator = "";
let ans = "";

console.log(numButtons);
console.log(operatorButtons);

//adds number to display
numButtons.forEach((nums) => {
  nums.addEventListener("click", () => {
    display.innerHTML += nums.innerHTML;
    //appends number clicked to end of num1 string
    //Check if operator has value
    if (operator == "") {
      num1 += parseFloat(nums.innerHTML);
    } else {
      num2 += parseFloat(nums.innerHTML);
    }
    //If  no operator pressed, add to num1
    //else, with operator, add to num1);
  });
});

// adds operator
operatorButtons.forEach((oprtr) => {
  oprtr.addEventListener("click", () => {
    console.log(operator.innerHTML);
    // if operator is first, don't add to display
    if (operator === "-" && num1 == "") {
      display.innerHTML += operator;
      num1 = display.innerHTML;
    } else if (num1 != "") {
      operator = oprtr.innerHTML;
      display.innerHTML += oprtr.innerHTML;
    }
  });
});

//clears display + variables
bClear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  answerBox.value = "";
  return (display.innerHTML = "");
});

//perform mathematical operations
bEqual.addEventListener("click", () => {
  let result = 0;
  const firstNo = parseFloat(num1);
  const secondNo = parseFloat(num2);
  // THIS BREAKS WITH POSNEG
  // if (num1.includes("..") || num2.includes("..")) {
  //   alert("Too many decimal points!");
  // } else
  {
    console.log(parseFloat(num1), operator, parseFloat(num2));

    switch (operator) {
      case `+`:
        result = firstNo + secondNo;
        break;
      case `-`:
        result = firstNo - secondNo;
        break;
      case `*`:
        result = firstNo * secondNo;
        break;
      case `÷`:
        if (secondNo === 0) {
          alert("Cannot divide by zero!");
        } else {
          result = firstNo / secondNo;
        }
        break;
      case "%":
        if (isNaN(secondNo)) {
          result = firstNo / 100;
        } else {
          result = (firstNo / secondNo) * 100;
        }
        break;
    }
  }
  answerBox.value = parseFloat(result);
  console.log(result);
  // storing an answer for later, only helpful for history atm
  ans = parseFloat(result);
  console.log(ans);
//  //silly.
//   if (ans === 69) {
//     alert("nice.");
//   }
//   if (ans === 420) {
//     alert("👀");
//   }
//   if (ans === 1337) {
//     alert("H4X0R");
//   }
  history.innerHTML += `${num1} ${operator} ${num2} = ${ans} <br>`;
  num1 = "";
  num2 = "";
  operator = "";
  display.innerHTML = "";
});

//decimal button. It's ok if num1 starts with a decimal
//if num2 starts with a decimal it does not work
//just use parseFloat to return ie. .52354 as 0.52354
bDec.addEventListener("click", () => {
  if (num1.includes(".") && num2.includes(".")) {
    alert("No more decimals, please!");
  } else if (num2 == "") {
    display.innerHTML = `${display.innerHTML}` + ".";
    num1 += ".";
  } else {
    display.innerHTML = `${display.innerHTML}` + ".";
    num2 += ".";
  }
});

// Can only change first num to negative
bPosneg.addEventListener("click", () => {
  num1 = parseFloat(display.innerHTML);
  if (display.innerHTML.includes("-")) {
    num1 = Math.abs(num1);
    display.innerHTML = num1;
  } else {
    num1 = -Math.abs(num1);
    display.innerHTML = num1;
  }
});
