let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

let right = 10;

const guess = document.querySelector("#guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const qmark = document.querySelector(".qmark");
const body = document.querySelector("body");
const topScore = document.querySelector(".top-score");
const msg = document.querySelector(".msg");
const rightLeft = document.querySelector(".rightLeft");

checkBtn.addEventListener("click", function () {
  if (!guess.value) {
    alert("Please make a valid guess");
  } else if (right > 0) {
    if (guess.value == randomNumber) {
      qmark.innerText = randomNumber + "๐";
      body.style.backgroundColor = "lightseagreen";
      topScore.innerText = right;
      msg.innerText = "Congrulations you won!! โ ๐";
    } else if (guess.value < randomNumber) {
      right--;
      rightLeft.innerText = right;
      msg.innerText = "Increase the number โซ โซ โซ";
      guess.value = "";
      guess.focus();
    } else {
      right--;
      rightLeft.innerText = right;
      msg.innerText = "Decresase the number โฌ โฌ โฌ";
      guess.value = "";
      guess.focus();
    }
  } else {
    qmark.innerText = randomNumber + "๐งจ";
    body.style.backgroundColor = "lightsalmon";
    topScore.innerText = right;
    msg.innerText = "Sorry you lost!! โ ๐ค";
  }
});

againBtn.addEventListener("click", () => {
  qmark.innerText = "๐คทโโ๏ธ";
  msg.innerText = "Lets Get start..";
  right = 10;
  body.style.backgroundColor = "white";
  guess.value = "";
  guess.focus();
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  rightLeft.innerText = right;
  topScore.innerText = right;
});

guess.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkBtn.click();
  }
});

//* PUSEDUO
//? 1-100 arasinda rasgele bir sayi tut.
//? eger input girilmediyse Kullaniciya uyari ver.
//? tebrikler bildiniz.
//? background = green
//? eger score > topScore
//?     topScore = score
//? secret_number = gorunur.

//! deฤilse
//! eger score > 0
//!   score = score -1
//?   eฤer rasgele < input.value
//?     AZALT
//?   degilse
//?     ARTTIR
//! degise
//? Uzgunuz kaybetiniz.

//* againBtn basildiginda kontrolleri yap
