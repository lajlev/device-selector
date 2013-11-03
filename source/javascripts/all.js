$(function() {

  $('html').click(function() {
    $('.light-dropdown--selection, .light-dropdown--sort-by').removeClass('active');
  });

  $('.dropdown-link--sort-by').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.light-dropdown--sort-by').toggleClass('active');

    $('.light-dropdown--selection').removeClass('active');
  });

  $('.dropdown-link--selection').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.light-dropdown--selection').toggleClass('active');

    $('.light-dropdown--sort-by').removeClass('active');
  });

});