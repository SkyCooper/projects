const container = document.querySelector(".container")
const clock = container.querySelector("p"); 


const digitalClock = setInterval(()=>{
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  
  let amPm = "AM"

  if(hour >= 12){ amPm = "PM" }

  if(hour > 12) {hour = `${hour%12}`}
  if(hour < 10){hour = `0${hour}`}
  if(minute < 10){minute = `0${minute}`}
  if(second < 10){second = `0${second}`}
  

  // clock.innerText = `${hour} : ${minute} : ${second} ${amPm} `;
  clock.innerHTML = `${hour} : ${minute} : ${second} <sup>${amPm}</sup>`;
},1000);
