const container = document.querySelector(".digitalClock");
const clock = container.querySelector("h1");
const today = container.querySelector("p");
const displayDay = document.querySelector("span");

const digitalClock = setInterval(() => {
  const date = new Date();
  //* clock
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  //*date
  let day = date.getDay();
  let mounth = date.getMonth() + 1;
  let year = date.getFullYear();

  //*day
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let amPm = "AM";

  if (hour >= 12) {
    amPm = "PM";
  }

  if (hour > 12) {
    hour = `${hour % 12}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }

  // clock.innerText = `${hour} : ${minute} : ${second} ${amPm} `;
  clock.innerHTML = `${hour} : ${minute} : ${second} <sup>${amPm}</sup>`;
  today.innerHTML = `0${day} | 0${mounth} | ${year}`;
  displayDay.innerHTML = `${daysArray[day]}`;
}, 1000);
