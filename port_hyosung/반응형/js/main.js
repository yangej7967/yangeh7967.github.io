$(document).ready(function() {
  //language
  $('header .lang_wrap span').hover(function() {
    $('header .lang_wrap ul').stop().slideDown();
  }, function() {
    $('header .lang_wrap ul').stop().slideUp();
  })

  //메인비주얼 - swiper
  const swiper1 = new Swiper('.visual_wrap', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.visual-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.visual-next',
      prevEl: '.visual-prev',
    },
  
  });

  const swiper2 = new Swiper('.prod_wrap .contents', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.prod_tabs',
      type: 'custom'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.visual-next',
      prevEl: '.visual-prev',
    },
  
  });
})//ready()