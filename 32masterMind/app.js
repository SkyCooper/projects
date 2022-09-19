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

let randomNumber = "" + Math.round(Math.random() * 9089 + 1000);
console.log(randomNumber);
console.log(typeof randomNumber);

let sum;
let number;

for (let i = 0; i < 10; i++) {
  number = prompt("sayı gir");
  if (9 - i === 0) {
    console.log("Hakkınız bitti, Sayı: ", randomNumber);
    break;
  }
  sum = 0;
  if (number == randomNumber) {
    console.log("Tebrikler bildiniz.");
    break;
  }
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      // console.log(number[k], randomNumber[j]);
      if (number[k] == randomNumber[k]) {
        console.log(number[k], randomNumber[k]);
        console.log(k, j);
        console.log("+");
        k++
        break;
      } else if (number[k] == randomNumber[j]) {
        console.log("-");
        break;
      }
    }
  }
  console.log("\nKalan hak:", 9 - i);
}
