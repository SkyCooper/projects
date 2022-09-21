//! Mastermind Oyunu

// Mastermind isimli oyun iki kişi ile oynanan bir sayı bulmaca oyunudur. Oyunculardan biri, [1000 - 9999] kümesinden basamak değerleri birbirinden farklı bir sayı belirler. Diğer oyuncunun amacı bu sayıyı en fazla 10 tahminde bulmaktır. Sayıyı belirleyen oyuncu, diğer oyuncunun her tahmininden sonra oyunun kuralları doğrultusunda bilgiler vermektedir.
// Tahmin edilen sayı içerisinde belirlenen sayının içerisindeki rakamlardan biri varsa fakat basamak değeri tutmuyorsa - işareti ile, basamak değeride tutuyorsa + işareti ile bilgi verilir.

// Örnekler:
// Belirlenen sayı : 1234
// Tahmin edilen sayı : 4567
// Verilecek bilgi : -

// Belirlenen sayı : 1234
// Tahmin edilen sayı : 5674
// Verilecek bilgi : +

// Belirlenen sayı : 1234
// Tahmin edilen sayı : 4237
// Verilecek bilgi : ++ -

// Not: Verilecek olan bilgide + ve - 'lerin sırasının bir önemi yoktur.
// Bir sayı belirleyerek mastermind oyununu oynatan programı yazınız.

// let randomNumber = "" + Math.round(Math.random() * 9000 + 1000);
// console.log(randomNumber);
// console.log(typeof randomNumber);

const randomNum = () => {
  let sayi = "" + Math.round(Math.random() * 9000 + 1000);
  if (new Set(sayi).size == 4) {
    return sayi;
  } else {
    return randomNum();
  }
};

let randomNumber = randomNum();
console.log(randomNumber);

let sum;
let number;

// for (let i = 0; i < 10; i++) {
//   number = prompt("sayı gir");
//   if (new Set(number).size < 4) {
//     alert("Rakamları tamamı farklı olan sayı gir");
//   } else {
//     if (9 - i === 0) {
//       console.log("Hakkınız bitti, Sayı: ", randomNumber);
//       break;
//     }
//     sum = 0;
//     if (number == randomNumber) {
//       console.log("Tebrikler bildiniz.");
//       break;
//     }
//     for (let j = 0; j < 4; j++) {
//       for (let k = 0; k < 4; k++) {
//         if (number[j] == randomNumber[k]) {
//           if (j == k) {
//             console.log("+");
//           } else {
//             console.log("-");
//           }
//         }
//       }
//     }
//     console.log("Kalan hak:", 9 - i);
//   }
// }


const btnEnter = document.getElementById("enter")
const guessNumber = document.getElementById("number")
const ol = document.getElementById("result")
console.log(btnEnter);

btnEnter.addEventListener("click", ()=>{
  // confirm("Are you ready to start?")
  // alert("Enter uniq four digit number")
  guessNumber.focus()

  for (let i = 0; i < 10; i++) {
    number = guessNumber.value;
    if (new Set(number).size < 4) {
      alert("Rakamları tamamı farklı olan sayı gir");
    } else {
      if (9 - i === 0) {
        alert("Hakkınız bitti, bilemedin");
        ol.innerHTML = `<li>THE hidden number is ${randomNumber} </li>`
        break;
      }
      sum = 0;
      if (number == randomNumber) {
          ol.innerHTML = `<li>Tebrikler bildiniz. ${randomNumber} </li>`;
        break;
      }
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          if (number[j] == randomNumber[k]) {
            if (j == k) {
              console.log("+");
            } else {
              console.log("-");
            }
          }
        }
      }
      console.log("Kalan hak:", 9 - i);
    }
  }
})