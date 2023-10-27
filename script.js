let a;
let date;
let time;
let day;
setInterval(() => {
  a = new Date();
  day = a.getDay();
  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "error";
  }
  date = a.toLocaleDateString(undefined, Option);
  time = a.toLocaleTimeString(undefined, Option);
  document.getElementById("time").innerHTML =
    time + " on<br>" + dayName + " " + date;
}, 1000);
