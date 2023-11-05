var myDate;
var currentDate;
var currentMonth;
var currentYear;
var currentTime;
var dayNumber;
var date = document.getElementById("date");
var time = document.getElementById("time");
setInterval(() => {
  myDate = new Date();
  currentDate = myDate.getDate();
  currentMonth = myDate.getMonth();
  currentYear = myDate.getFullYear();
  currentTime = myDate.toLocaleTimeString();
  dayNumber = myDate.getDay();
  switch (dayNumber) {
    case 1: {
      currentDay = "MON";
      break;
    }
    case 2: {
      currentDay = "TUE";
      break;
    }
    case 3: {
      currentDay = "WED";
      break;
    }
    case 4: {
      currentDay = "THU";
      break;
    }
    case 5: {
      currentDay = "FRI";
      break;
    }
    case 6: {
      currentDay = "SAT";
      break;
    }
    case 0: {
      currentDay = "SUN";
      break;
    }
    default: {
      currentDate = "ERR";
      break;
    }
  }
  date.innerHTML =
    currentYear + "-" + currentMonth + "-" + currentDate + " " + currentDay;
  time.innerHTML = currentTime;
}, 1000);
