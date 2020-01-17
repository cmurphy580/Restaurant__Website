//--------------------------------------------------------------------------------------------
$(function() {
  smoothScroll(1776);
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('ontouchstart onclick', function(event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, duration);
    }
  });
}
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
const menuBars = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');
const styleDot = document.querySelectorAll('.style-dot');
let flag = true;

function menuDrop () {
    if (flag) {
    navbar.style.display = 'flex';
    styleDot.forEach(dot => dot.style.display = 'none');
    flag = !flag;
  } else {
    navbar.style.display = 'none';
    flag = !flag;
  }
}
if (menuBars !== null) {
  menuBars.addEventListener('click', menuDrop);
}
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
// first + third objects slide in (tablet + mobile)
const sliderImages = document.querySelectorAll('.slide-in');
const title = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const menuItemsTwo = document.querySelectorAll('.menuItemTwo');

function checkWidth() {
  const viewport = document.querySelector('.viewport');
  console.log(viewport.offsetWidth);
  if (viewport.offsetWidth <= 768) {
    sliderImages.forEach(sliderImage => {
      sliderImage.classList.add('active');
    });
    title.style.transform = 'scale(1)';
    title.style.opacity = '1';
    menuItems.forEach(item => {
      item.style.transform = 'translateY(0) scale(1)';
      item.style.opacity = '1';
    });
    menuItemsTwo.forEach(item => {
      item.style.transform = 'translateY(0) scale(1)';
      item.style.opacity = '1';
    });
  }
}
window.addEventListener('load', checkWidth);
//--------------------------------------------------------------------------------------------
// first objects slide in
const marker = document.querySelector('.long');
// const marker = document.getElementById('long');
const aboutWrap = document.querySelector('.about-wrap');

function slideIn() {
  let scrollPt = (window.scrollY + window.innerHeight);
  const animationCue = (marker.offsetTop + (marker.height * 1.2));

      if (scrollPt >= animationCue) {
        sliderImages.forEach(sliderImage => {
          // sliderImage.style.transform = 'translateY(0) scale(1)';
          // sliderImage.style.opacity = '1.0';
          sliderImage.classList.add('active');
        });
        setTimeout(function() {
          aboutWrap.style.boxShadow = '0px 0px 3px 0px rgba(0,0,0,0.1)';
        }, 700);
    }
}
window.addEventListener('scroll', debounce(slideIn));
//--------------------------------------------------------------------------------------------
// second group of objects slide in
const animatedContent = document.querySelectorAll('.animate-in');
const specialsWrap = document.querySelector('.specials-wrap')

function slideInTwo() {
  const triggerImage = document.querySelector('.trigger');
  let scrollPt = (window.scrollY + window.innerHeight);
  const slideInPt = triggerImage.offsetTop + triggerImage.height / 4;

  if (scrollPt >= slideInPt) {
    animatedContent.forEach(animation => {
      animation.style.transform = 'translate(0) scale(1)';
      animation.style.opacity = '1.0';
    });
    setTimeout(function() {
      specialsWrap.style.boxShadow = '0px 0px 3px 0px rgba(0,0,0,0.1)';
    }, 1000);
  }

}

window.addEventListener('scroll', debounce(slideInTwo));
//--------------------------------------------------------------------------------------------
// third group of objects slide in
const menu = document.querySelector('.food');
const lateSlideInImages = document.querySelectorAll('.late-slide-in');

function lateSlideIn() {
  let scrollPt = (window.scrollY + window.innerHeight);
  const slideInPoint = menu.offsetTop + ~~menu.height / 3;
  if (scrollPt >= slideInPoint) {
    title.style.transform = 'scale(1)';
    title.style.opacity = '1';
    menuItems.forEach(item => {
      item.style.transform = 'translateY(0) scale(1)';
      item.style.opacity = '1';
    });
    setTimeout(() => {
      console.log("here2");
      menuItemsTwo.forEach(item => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.opacity = '1';
      });
    }, 500);
  }
}

window.addEventListener('scroll', debounce(lateSlideIn));

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
