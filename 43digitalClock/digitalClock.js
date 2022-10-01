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

  clock.innerHTML = `${hour} : ${minute} : ${second} <sup>${amPm}</sup>`;
  today.innerHTML = `0${day} | ${mounth} | ${year}`;
  displayDay.innerHTML = `${daysArray[day]}`;
}, 1000);


//* sadece digital saat kısa çözüm;
// const digitalClock = setInterval(() => {
//   const date = new Date();
//   clock.innerHTML = date.toLocaleTimeString("en-TR");
// }, 1000);
