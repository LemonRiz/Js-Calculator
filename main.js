// DOM elements

const display = document.querySelector(".calculation");

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

let num1 = "";
let num2 = "";
let operator = "";

console.log(numButtons);
console.log(operatorButtons);

//adds number to display
numButtons.forEach((nums) => {
  nums.addEventListener("click", () => {
    display.innerHTML += nums.innerHTML;
    //appends number clicked to end of num1 string
    num1 += nums.innerHTML;
    console.log(num1);
  });
});

// adds operator
operatorButtons.forEach((oprtr) => {
  oprtr.addEventListener("click", () => {
    operator += operatorButtons.innerHTML;
    display.innerHTML += oprtr.innerHTML;
  });
});

//clears display
bClear.addEventListener("click", () => {
  return (display.innerHTML = "");
});

//decimal button but cannot add a second decimal. It's ok if it starts with a decimal
// use parseFloat to return .52354 as 0.52354
bDec.addEventListener("click", () => {
  if (display.innerHTML.includes(".")) {
  } else {
    display.innerHTML = `${display.innerHTML}` + ".";
  }
});

answerBox.value = "Answer goes here!";
