$(document).ready(function() {
  //language
  $('header .lang_wrap span').hover(function() {
    $('header .lang_wrap ul').stop().slideDown();
  }, function() {
    $('header .lang_wrap ul').stop().slideUp();
  })

  //gnb-mo
  $('header .gnb_wrap .gnb>li').has('ul').addClass('dep1');
  //$('header .gnb_wrap .a2>li').has('ul').addClass('dep2'); //3뎁스용

  $('header .gnb>li>a').click(function() {
    $('header .gnb>li>a').not(this).next().slideUp()
    $(this).next().slideToggle();
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

  const prod_name = ['송배전설비','시스템&<br>엔지니어링 솔루션','신재생에너지','전동기&발전기','산업기계','기어솔루션','용접솔루션','건설']
  const swiper2 = new Swiper('.prod_wrap .contents', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.prod_tabs',
      //type: 'custom'
      clickable: true,
      renderBullet: function (index, className) {
        //return '<div class="' + className + '"><span>' + (prod_name[index]) + '</span></div>';
        return '<span class="' + className + '">' + (prod_name[index]) + '</span>';
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.visual-next',
      prevEl: '.visual-prev',
    },
  
  });
 

  const swiper3 = new Swiper('.news_slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView : 1,
    spaceBetween: 20,
    breakpoints: {
      510 : {
        slidesPerView : 2,
        spaceBetween: 30,
      },
      960 : {        
        slidesPerView : 3,
        spaceBetween: 30,
      }
    },

    // If we need pagination
    pagination: {
      el: '.prod_tabs',
      type: 'custom'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.news-next',
      prevEl: '.news-prev',
    },
  
  });

  //header .mo_btn
  $('header .gnb_open').click(function() {
    $(this).hide();
    $('.gnb_close').show();
    $('.menu_wrap').show();
  })
  $('header .gnb_close').click(function() {
    $(this).hide();
    $('.gnb_open').show();
    $('.menu_wrap').hide();
  })
})//ready()