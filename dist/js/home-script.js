"use strict";

$(function () {
  //function for my image slideshow
  //learned from https://www.w3schools.com/w3css/w3css_slideshow.asp
  function slideShow() {
    var images = document.getElementsByClassName('slide-show');

    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }

    index++;

    if (index > images.length) {
      index = 1;
    }

    images[index - 1].style.display = 'block';
    setTimeout(slideShow, 2000);
  }

  var menuIcon = document.querySelector('.menu-icon');
  var closeMenuIcon = document.querySelector('.fa-close');
  var index = 0;

  if ($(window).width() <= 450) {
    slideShow();
  }

  menuIcon.addEventListener('click', function (evt) {
    evt.preventDefault();
    $('.menu').toggleClass('open');
    $('.heading').toggleClass('close');
    $('html').css('touch-action', 'none');
  });
  closeMenuIcon.addEventListener('click', function (evt) {
    evt.preventDefault();
    $('.menu').toggleClass('open');
    $('.heading').toggleClass('close');
    $('html').css('touch-action', 'auto');
  });
});