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
//  swiper in stikey header 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
//  swiper in stikey header 
// swiper type of brands
// var swiper = new Swiper(".mySwiper-3", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   breakpoints: {
//     375: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 1.3,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 2.5,
//       spaceBetween: 10,
//     },
//   },
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   loop: Infinity,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// swiper type of brands

//   swiper instgrame

//   swiper instgrame

// AOS
// AOS.init();
// AOS

// search box
const autoBox = document.getElementById('autocom-box');
const clearAll = document.getElementById('clear-all'); // for clear all search
 function showSearch(){
   console.log('ssss');
    autoBox.classList.toggle('active'); // show search box
 }
//  document.body.addEventListener('click', function(){
//   autoBox.classList.remove('active'); // show search box
//  }, true); 
  function clearAl(){
    console.log('ddd')
    clearAll.style.display= "none"; //clear all items
  }
function removeSearch(id){
  $(`#clear-item${id}`).remove();  //clear item
}
// search box
//  sweet alert for register 
    function signOutAlert() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You will log out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff5700',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout !'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logout!',
            'success'
          )
        }
      })
    }
  
  //  sweet alert for register 
    // sweet alert for register 
  
    function successAlertRegister() {
      Swal.fire({
        title: 'Your email has been saved',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        showConfirmButton: false,
        timer: 1500
      })
    };
  //  sweet alert for register 
  // delete item from cart 
      function deleteCartModel(id) {
          $(`#cartProductModel${id}`).remove();
      }
  // delete item from cart 