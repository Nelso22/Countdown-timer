const timeVariables = document.querySelectorAll(".time");
const today = new Date();
const tempYear = today.getFullYear();
const tempMonth = today.getMonth();
const tempDay = today.getDate();
const tempHour = today.getHours();
const tempMinute = today.getMinutes();
const tempSecond = today.getSeconds();

const futureDate = new Date(
  tempYear,
  tempMonth + 2,
  tempDay + 10,
  tempHour,
  tempMinute,
  tempSecond
);

const futureTime = futureDate.getTime();

function displayTime() {
  let currentDay = new Date().getTime();
  let milli = futureDate - currentDay;

  const month = 30 * 24 * 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const days = milli / month;

  let monthsLeft = Math.floor(days);
  let daysLeft = Math.floor((milli % month) / day);
  let hoursLeft = Math.floor((milli % day) / hour);
  let minutesLeft = Math.floor((milli % hour) / minute);
  let secondsLeft = Math.floor((milli % minute) / 1000);

  const values = [monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft];

  function format(item) {
    return item < 10 ? `0${item}` : item;
  }

  timeVariables.forEach(function (item, idx) {
    item.innerHTML = format(values[idx]);
  });
}

setInterval(displayTime, 1000);
displayTime();
