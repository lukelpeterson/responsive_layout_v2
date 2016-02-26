$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#mobile_menu'),
    $menulink = $('.menu_button');

$menulink.click(function() {
  $menulink.toggleClass('nav');
  $menu.toggleClass('nav');
  return false;
});});
