//loader
let loader = document.getElementById('preloader');
window.addEventListener('load', function () {
  loader.style.display = 'none';
});
//loader
//  scroll-up 
var btn = $('#button');
var image = $('.navbar-light .navbar-brand img');
var link = $('.navbar-light .nav-item .nav-link');
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
    image.css('width', '50%');
    link.addClass('change');
  } else {
    btn.removeClass('show');
    image.css('width', '70%');
    link.removeClass('change');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
//    scroll-up 
//  chat
var btnChat = $('#chat');
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    btnChat.addClass('show-chat');
  } else {
    btnChat.removeClass('show-chat');
  }
});
//    chat
// animated hamburger icon
$(document).ready($(function () {
  let navBtn = $('.navbar-toggler');
  $(navBtn).click(function () {
    $(navBtn).toggleClass('active-hamburger');
  });
}));

// swiper type of brands
var swiper = new Swiper(".mySwiper-3", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: Infinity,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper type of brands

//   swiper instgrame
var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    357: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
//   swiper instgrame

// AOS
AOS.init();
// AOS


