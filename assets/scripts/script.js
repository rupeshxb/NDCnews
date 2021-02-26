// Date below logo start //

let n = new Date();
let year = n.getFullYear();
let day = n.getDay();
const monthNames = [
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
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = n.getDate();

document.querySelector("#date-in-header").innerHTML =
  date +
  " " +
  monthNames[n.getMonth()] +
  " " +
  year +
  ", " +
  dayNames[n.getDay()];

// Date below logo ends //

// Navbar toggle start //

function navToggle() {
  console.log(navToggle);
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Navbar toggle ends //

// sticky //
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
window.onscroll = function () {
  myFunction();
};
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// sticky

// side scroll //

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNavMob() {
  document.getElementById("mySidenav").style.width = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// side scroll //

// ---------- Moment.js (time ago) starts ----------- //

// ---------- Moment.js (time ago) ends ----------- //

// ----------------- NOTHING : TEST ----------------- //
