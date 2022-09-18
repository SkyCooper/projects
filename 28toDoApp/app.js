// const delBtn = document.querySelector("#delete");
const addBtn = document.querySelector("#add");
const input = document.querySelector("#input");
const ul = document.querySelector("#ul");
const totalTask = document.querySelector("#totalTask");
const completedTask = document.querySelector("#completedTask");

const checked = document.querySelector(".checked");
const deleted = document.querySelectorAll("#del1");

let array = [];
let sum = 0;
let completed = 0;

window.addEventListener("load", () => {
  input.focus();
});

addBtn.addEventListener("click", function () {
  if (!input.value) {
    alert(`Enter a task`);
  } else {
    ul.innerHTML += ` <li> <button class="check" id="checked"><i class="fa-solid fa-check"></i></button> <span id="value"> ${input.value}</span> <button class="trash" id="del1"><i class="fa-solid fa-trash"></i></button> </li>`;
    input.value = "";
    input.focus();
    array.push("input.value");
    sum += 1;
    totalTask.innerText = `${sum}`;
  }
});

// delBtn.addEventListener("click", () => {
//   ul.childElementCount > 0
//     ? ul.removeChild(ul.lastElementChild)
//     : alert(`All tasks deleted`);
//   input.focus();
//   array.pop();
//   sum -= 1;
//   totalTask.innerText = `${sum}`;
//   if (document.querySelectorAll("sapan").className =="line-through") {
//     completed--;
//     completedTask.innerText = `${completed}`;
//   }
// });

input.addEventListener("keydown", (e) => {
  e.key === "Enter" && addBtn.click();
  // e.key === "Delete" && delBtn.click();
});

ul.addEventListener("click", (event) => {
  if (event.target.className == "check") {
    event.target.nextElementSibling.classList.toggle("line-through");
    if (event.target.nextElementSibling.className === "line-through") {
      completed++;
      completedTask.innerText = `${completed}`;
    } else {
      completed--;
      completedTask.innerText = `${completed}`;
    }
  } else if (event.target.className == "trash") {
    event.target.parentElement.remove();
    if (event.target.previousElementSibling.className === "line-through") {
      sum -= 1;
      totalTask.innerText = `${sum}`;
      completed--;
      completedTask.innerText = `${completed}`;
    } else {
      event.target.parentElement.remove();
      sum -= 1;
      totalTask.innerText = `${sum}`;
    }
  }
});
