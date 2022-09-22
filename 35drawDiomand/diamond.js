
const input = document.querySelector("#input");
// console.log(input);

const result = document.querySelector("#result");
// console.log(result);


const diamond = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
      string += "&nbsp;&nbsp;&nbsp;";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      } else {
        string += "&nbsp;&nbsp;&nbsp;";
      }
    }
    string += "<br>";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      string += "&nbsp;&nbsp;&nbsp;";
    }
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        string += "*";
      } else {
        string += "&nbsp;&nbsp;&nbsp;";
      }
    }
    string += "<br>";
  }
  return string;
};


input.addEventListener("change", function () {
  result.innerHTML = diamond(input.value);
});


















// function diamondOfWidth(n) {
//   var i,
//     diamonds = "*";
//   for (i = 1; i < 2 * n; i++) {
//     document.write("<pre>" + diamonds + "</pre>");
//     diamonds += i < n ? "  *" : "";
//     diamonds = i >= n ? diamonds.slice(3) : diamonds;
//   }
//   document.body.style.textAlign = "center";
//   document.body.style.lineHeight = 0.5;
// }
// console.log(diamondOfWidth(8));