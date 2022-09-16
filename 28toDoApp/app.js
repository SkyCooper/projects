console.log("**** app.js *******");

//todo selectors tanımlandı
const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");

// olmayan bir ul yapıldı ve section içine koyuldu.
const newUl = document.createElement("ul");
langList.appendChild(newUl);

//todo addBtn event handler
addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("Burası boş, bir dil yaz");
  } else if (langInput.value.toLowerCase() == "javascript") {
    newUl.innerHTML += `<li class="text-danger"> ${langInput.value}</li>`;
    langInput.value = ""; // input içini silmek için
  } else {
    newUl.innerHTML += `<li> ${langInput.value}</li>`;
    langInput.value = ""; // input içini silmek için
  }
  langInput.focus(); // eklemeden sonra focus ol
});


//todo deleteBtn event handler
deleteBtn.addEventListener("click", function () {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert(`Silinecek eleman kalmadı`);
  langInput.focus(); // sildikten sonra focus ol
});


//todo enter key / delete key  event handler
langInput.addEventListener('keydown', (event)=> {
    // console.log(event); // basılan tuşu döndürür.
    // console.log(event.target); // event nereden gelir, onu döndürür.
    // console.log(event.keyCode); // keycode --> numara
    // console.log(event.code); // code --> tuş ismi
    // console.log(event.key); // key --> tuş ismi
     if (event.key === "Enter"){addBtn.click();}
})

langInput.addEventListener("keydown", (event) => {
  event.key === "Delete" &&  deleteBtn.click() }
);

//* onLoad event handler
window.addEventListener("load", () => {
  langInput.focus(); // sayfa refresh olduğunda focus ol
});
