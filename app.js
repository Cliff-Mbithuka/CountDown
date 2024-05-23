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

let futureDate = new Date(2024, 10, 21, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];
let day = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${day}, ${date}, ${month},${year}, ${hours}: ${min}am `

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  //value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours =  Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values Array
  const values = [days,hours,minutes,seconds];

  items.forEach(function(item, index) {
    item.innerHTML = values[index];
  });
if(t < 0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired"> Sorry this give away has expred</h4>`;
}
}
//countdown
let countdown = setInterval(getRemainingTime, 1000 )


getRemainingTime();