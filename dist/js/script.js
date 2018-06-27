$(function () {
  let menuIcon = document.querySelector('.menu-icon');
  let closeMenuIcon = document.querySelector('.fa-close');
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