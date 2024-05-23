const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2027, 10, 21, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];
let day = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${day}, ${date}, ${month},${year}, ${hours}: ${min}am `

