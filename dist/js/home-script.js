$(function () {
  //function for my image slideshow
  //learned from https://www.w3schools.com/w3css/w3css_slideshow.asp
  function slideShow() {
    let images = document.getElementsByClassName('slide-show');

    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }

    index++;

    if (index > images.length) {
      index = 1;
    }

    images[index - 1].style.display = 'block';
    setTimeout(slideShow, 2000);
  }

  let menuIcon = document.querySelector('.menu-icon');
  let closeMenuIcon = document.querySelector('.fa-close');
  let index = 0;

  if ($(window).width() <= 450) {
    slideShow();
  }

  menuIcon.addEventListener('click', evt => {
    evt.preventDefault();
    $('.menu').toggleClass('open');
    $('.heading').toggleClass('close');
    $('html').css('touch-action', 'none');
  });
  closeMenuIcon.addEventListener('click', evt => {
    evt.preventDefault();
    $('.menu').toggleClass('open');
    $('.heading').toggleClass('close');
    $('html').css('touch-action', 'auto');
  });
});