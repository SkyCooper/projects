const bagPlus = document.querySelector(".bagplus");
const bagMinus = document.querySelector(".bagminus");
const bagSum = document.querySelector("#bagSum");
const bagTotal = document.querySelector("#bagtotal");

const shoePlus = document.querySelector(".shoeplus");
const shoeMinus = document.querySelector(".shoeminus");
const shoeSum = document.querySelector("#shoeSum");
const shoeTotal = document.querySelector("#shoetotal");

const clockPlus = document.querySelector(".clockplus");
const clockMinus = document.querySelector(".clockminus");
const clockSum = document.querySelector("#clockSum");
const clockTotal = document.querySelector("#clocktotal");

const subTotal = document.querySelector("#subtotalPrice");
const taxPrice = document.querySelector("#taxPrice");
const totalPrice = document.querySelector("#totalPrice");

//!bag

let sum1 = Number(bagSum.innerText);
const plus1 = () => {
  sum1 += 1;
  return sum1;
};

const minus1 = () => {
  sum1 <= 0 ? 0 : (sum1 -= 1);
  return sum1;
};

bagPlus.addEventListener("click", function () {
  bagSum.innerText = plus1();
  bagTotal.innerText = +bagSum.innerText * 25;
  subTotal.innerText = bagTotal.innerText;
  taxPrice.innerText = +subTotal.innerText * 0.18;
  totalPrice.innerText = (
    +subTotal.innerText +
    +taxPrice.innerText +
    15
  ).toFixed(2);
});

bagMinus.addEventListener("click", function () {
  bagSum.innerText = minus1();
  bagTotal.innerText = +bagSum.innerText * 25;
  subTotal.innerText = bagTotal.innerText;
  taxPrice.innerText = +subTotal.innerText * 0.18;
  +totalPrice.innerText < 45
    ? (totalPrice.innerText = 0)
    : (totalPrice.innerText = (
        +subTotal.innerText +
        +taxPrice.innerText +
        15
      ).toFixed(2));
});

//!shoe

let sum2 = Number(shoeSum.innerText);
const plus2 = () => {
  sum2 += 1;
  return sum2;
};

const minus2 = () => {
  sum2 <= 0 ? 0 : (sum2 -= 1);
  return sum2;
};

shoePlus.addEventListener("click", function () {
  shoeSum.innerText = plus2();
  shoeTotal.innerText = +shoeSum.innerText * 50;
  subTotal.innerText = shoeTotal.innerText;
  taxPrice.innerText = +subTotal.innerText * 0.18;
  totalPrice.innerText = (
    +subTotal.innerText +
    +taxPrice.innerText +
    15
  ).toFixed(2);
});

shoeMinus.addEventListener("click", function () {
  shoeSum.innerText = minus2();
  shoeTotal.innerText = +shoeSum.innerText * 50;
  subTotal.innerText = shoeTotal.innerText;
  taxPrice.innerText = +subTotal.innerText * 0.18;
  +totalPrice.innerText < 45
    ? (totalPrice.innerText = 0)
    : (totalPrice.innerText = (
        +subTotal.innerText +
        +taxPrice.innerText +
        15
      ).toFixed(2));
});


//! Clock

let sum3 = Number(shoeSum.innerText);
const plus3 = () => {
  sum3 += 1;
  return sum3;
};

const minus3 = () => {
  sum3 <= 0 ? 0 : (sum3 -= 1);
  return sum3;
};

clockPlus.addEventListener("click", function () {
  clockSum.innerText = plus3();
  clockTotal.innerText = +clockSum.innerText * 100;
  subTotal.innerText = clockTotal.innerText;
  taxPrice.innerText = +subTotal.innerText * 0.18;
  totalPrice.innerText = (
    +subTotal.innerText +
    +taxPrice.innerText +
    15
  ).toFixed(2);
});

clockMinus.addEventListener("click", function () {
  clockSum.innerText = minus3();
  clockTotal.innerText = +clockSum.innerText * 100;
  subTotal.innerText = clockTotal.innerText;
  taxPrice.innerText = +subTotal.innerText * 0.18;
  +totalPrice.innerText < 45
    ? (totalPrice.innerText = 0)
    : (totalPrice.innerText = (
        +subTotal.innerText +
        +taxPrice.innerText +
        15
      ).toFixed(2));
});