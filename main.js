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
// const bequal = document.querySelector("#calc__equal");

const operandButtons = Array.from(document.querySelectorAll(".operator"));

const bclear = document.querySelector("#calc__clear");
const bdec = document.querySelector("#calc__dec");

console.log(numButtons);
console.log(operandButtons);

numButtons.forEach((nums) => {
  nums.addEventListener("click", () => {
    return (display.innerHTML += nums.innerHTML);
  });
});
