"use strict";

$(function () {
  var menuIcon = document.querySelector('.menu-icon');
  var closeMenuIcon = document.querySelector('.fa-close');
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