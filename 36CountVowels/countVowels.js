const input = document.getElementById("input");
console.log(input);

const buton = document.querySelector(".btn");
console.log(buton);

function countVowels() {
  return input.value
    .split("").filter((x) => x == "a" || x == "e" || x == "i" || x == "o" || x == "u").length;
    
  // return (input.value.match(/[aeiou]/gi) || []).length;
  // return input.value.replace(/[^aeiou]/gi, "").length;
  // return input.value.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

buton.addEventListener("click", function () {
  document.getElementById(
    "result"
  ).innerText = `There are ${countVowels()} vowels in  :`;
  document.getElementById("sonuc").innerText = `"${input.value}"`;
  document.getElementsByTagName("body")[0].style.background = "green";
  document.getElementsByClassName("vowels")[0].classList.add("image")
});


console.log(document.getElementsByClassName("vowels")[0]);