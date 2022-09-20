const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

const btnSubmit = document.querySelector("#submit");
const btnReset = document.querySelector("#reset");

const output = document.querySelector(".output");

btnSubmit.addEventListener("click", function () {
  let w = Number(weight.value);
  let h = Number(height.value);
  let bmi = (w / (h * h)).toFixed(2);
  console.log(bmi);
  if (bmi <= 18.5) {
    result = `( BMI : ${bmi} ) You are underweight, eat some 🤦‍♂️`;
    output.innerHTML = `<span class="underweight"> ${result} </span>`;
  } else if (bmi > 18.5 && bmi <= 24.9) {
    result = `( BMI : ${bmi} ) You are normal, Congrulations ✌`;
    output.innerHTML = `<span class="normal"> ${result} </span>`;
  } else if (bmi > 25 && bmi <= 29.9) {
    result = `( BMI : ${bmi} ) You are overweight, be carufal 😉`;
    output.innerHTML = `<span class="overweight"> ${result} </span>`;
  } else if (bmi > 30) {
    result = `( BMI : ${bmi} ) You are obese, go on a diet 🤬`;
    output.innerHTML = `<span class="obese"> ${result} </span>`;
  }
});

btnReset.addEventListener("click", () => {
  output.innerHTML = ``;
  weight.focus();
});

window.addEventListener("load", () => {
  weight.focus();
});
