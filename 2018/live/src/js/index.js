// javascript helpers
// import changeBgImg from './utils/changeBgImg';
// import NavBar from './utils/navbar';
// import carousel from './utils/scheduleOnClick';
// import switchOnWheel from './utils/switchPageOnWheel';

// scss
import 'animate.css';
import '../scss/index.scss';

// search the DOM
// const wrapper = document.querySelector('.wrapper');
// const pages = document.querySelectorAll('.page');
// const controllBtns = document.querySelectorAll('.control-btn li');
// const rocketParent = document.querySelector('.rocket');
// const headerTitle = document.querySelector('.header-title');

const navbarDOM = document.querySelector('.navbar');
const hiddenMenu = document.querySelector('.icon');
const homepageDOM = document.querySelector('.homepage');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const table1 = document.querySelector('.tb-1');
const table2 = document.querySelector('.tb-2');

<<<<<<< HEAD
// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// schedule changing
btn1.addEventListener('click', () => {
    if(table1.classList.contains("tb-inactive")) {
        tb_switch_active(btn1, table1);
        tb_switch_inactive(btn2, table2);
    }
});

btn2.addEventListener('click', () => {
    if(table2.classList.contains("tb-inactive")) {
        tb_switch_active(btn2, table2);
        tb_switch_inactive(btn1, table1);
    }
});
=======
btns.forEach(function(elem) {
  elem.addEventListener('click', function() {
    switch_active(elem);
  });
});

function switch_active(btn) {
  var btn_num = Number(btn.classList[0].substr(-1));
  tb_switch_active(btn, document.querySelector('.tb-' + btn_num));
  btn_num == 1 || btn_num == 3
    ? tb_switch_inactive(
        document.querySelector('.btn-' + (btn_num + 1)),
        document.querySelector('.tb-' + (btn_num + 1))
      )
    : tb_switch_inactive(
        document.querySelector('.btn-' + (btn_num - 1)),
        document.querySelector('.tb-' + (btn_num - 1))
      );
}
>>>>>>> 05668ae6642ac617daa69c8f9fbc08e10e94b7b9

function tb_switch_active(btn, table) {
  table.classList.add('tb-active');
  table.classList.remove('tb-inactive');
  btn.classList.add('btn-active');
  btn.classList.remove('btn-inactive');
}
function tb_switch_inactive(btn, table) {
  table.classList.add('tb-inactive');
  table.classList.remove('tb-active');
  btn.classList.add('btn-inactive');
  btn.classList.remove('btn-active');
}

<<<<<<< HEAD
// hiddenMenu.addEventListener('click', () => {
//     var x = document.getElementById("control-btns");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
// });
//
// // instantiate navbar
// const navbar = new NavBar(pages,controllBtns,rocketParent,'fadeInUp','fadeInDown');
//
// // scroll wheel
// switchOnWheel.init(controllBtns);
//
// // schedule
// carousel.init();
//
// // set current page
// let currPage = 0;
//
// // add animation
// pages.forEach((pg) => {
//   pg.classList.add('animated');
// })
//
// // change background of wrapper - need to use JS because github add a '/' to the end point of url -> cant access background image
// // EX: github/sachacks/
// changeBgImg.target(wrapper);
//
// if (window.innerWidth > 1023) {
//   navbar.init();
// } else {
//   carousel.activate();
// }
//
// window.addEventListener('resize', () => {
//   if (window.innerWidth < 1023) {
//     // initiate homepage
//     navbar.deactivate();
//     carousel.activate();
//   } else {
//     navbar.activate();
//   }
//
//   if (navbar.getCurrentPage()===2) {
//     carousel.activate();
//   }
//
// });
//
// // hide and display the sachack next to logo
// navbarDOM.addEventListener('click', () => {
//   currPage = navbar.getCurrentPage();
//   if (currPage === 0 ) {
//     headerTitle.style.display = 'none';
//   }
//   else {
//     headerTitle.style.display = 'block';
//   }
//   if (currPage === 2) {
//     carousel.activate(); // activate schedule box when user click on schedule page
//   }
// })
=======
map_overlay_button.forEach(function(elem) {
  elem.addEventListener('click', function() {
    var map_overlay = document.getElementById('map_overlay');
    if (map_overlay.style.display == 'none') {
      map_overlay.style.display = 'flex';
    } else {
      map_overlay.style.display = 'none';
    }
  });
});

function timer(date) {
  var end = new Date(date);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('days').childNodes[0].nodeValue =
      days < 10 ? '0' + days : days;
    document.getElementById('hours').childNodes[0].nodeValue =
      hours < 10 ? '0' + hours : hours;
    document.getElementById('min').childNodes[0].nodeValue =
      minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('sec').childNodes[0].nodeValue =
      seconds < 10 ? '0' + seconds : seconds;
  }

  if (
    document.getElementById('days') &&
    document.getElementById('hours') &&
    document.getElementById('min') &&
    document.getElementById('sec')
  ) {
    timer = setInterval(showRemaining, 1000);
  }
}

$(document).ready(function() {
  var hackEnd = '11/18/2018 11:00:00 AM';
  timer(hackEnd);
});
>>>>>>> 05668ae6642ac617daa69c8f9fbc08e10e94b7b9
