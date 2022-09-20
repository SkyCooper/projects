const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");

const btnExecute = document.querySelector("#execute");
const btnReset = document.querySelector("#reset");

const add = document.querySelector("#add")
const sub = document.querySelector("#sub")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")

const output = document.querySelector("#output")


console.log(number1);

btnExecute.addEventListener("click", ()=>{
  let n1 = Number(number1.value);
  let n2 = Number(number2.value);
  let result = 0;
  if(!number1.value || !number2.value){
    alert("Enter a valid number")
  } else if (add.checked){
result = n1 + n2
  } else if(sub.checked){
    result = n1 - n2
  } else if(multiply.checked){
    result = n1 * n2
  } else if(divide.checked){
    result = (n1 / n2).toFixed(2)
    console.log(result);
  } else{
    alert("Please select your operation")
  }
output.innerHTML = ` <span> Result is  : ${result}</span>`;
})

btnReset.addEventListener("click", ()=>{
  output.innerHTML = ` `;
  number1.focus()
})

window.addEventListener("load", ()=>{
  number1.focus()
})