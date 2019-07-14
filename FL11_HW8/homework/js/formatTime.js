const minutesInHour = 60;
const hoursInDay = 24;
const minutesInDay = hoursInDay * minutesInHour;

function formatTime(time) {
  let days = Math.floor(time / (minutesInDay));
  let totalMinutes = time - days * minutesInDay;

  let hours = Math.floor(totalMinutes / minutesInHour);
  let minutes = totalMinutes - hours * minutesInHour;

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

formatTime(3690);