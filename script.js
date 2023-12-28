var myDate;
var currentDate;
var currentMonth;
var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
var currentYear;
var currentTime;
var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
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
  date.innerHTML =
    currentDate + " " + months[currentMonth] + " " + currentYear + " , " + days[dayNumber];
  time.innerHTML = currentTime;
}, 1000);


// -------------------------------------- Theme Changer -------------------------------------------

let homeBg = document.getElementById('backgroundImg');
let homeIcon = document.getElementById('home');
let fog = document.getElementById('fog')
let moon = document.getElementById('moon')
let squirrel = document.getElementById('squirrel')
let forest = document.getElementById('forest')
let raccon = document.getElementById('raccon')

homeIcon.addEventListener('click',()=>{
    homeBg.style.backgroundImage = 'url(assets/bg-img.avif)';
    homeIcon.style.transform = 'translateX(0px)';
    fog.style.transform = 'translateX(50px)'
    moon.style.transform = 'translateX(50px)';
    forest.style.transform = 'translateX(50px)';
    raccon.style.transform = 'translateX(50px)';
    squirrel.style.transform = 'translateX(50px)';
})

fog.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/fog.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(0px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(50px)';
})

moon.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/moon.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(0px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(50px)';
})

forest.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/forest.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(0px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(50px)';
})

raccon.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/raccon.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(0px)';
  squirrel.style.transform = 'translateX(50px)';
})

squirrel.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/squirrel.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(0px)';
})