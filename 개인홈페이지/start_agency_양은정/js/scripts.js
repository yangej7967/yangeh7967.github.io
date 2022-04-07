/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(document).ready(function() {
    // 가로방향 슬라이드 ~ .ex4
    let n2 = 0;
    $('.ex4 .dot_btns button').click(function() {
    n2 = $(this).index(); 
    $('.ex4 ul').animate({'margin-left' : -800 * n2})     
    })

    $('.ex4 .prev').click(function() {//오른쪽
    if(n2 <= 0) {n2 = 0;window.alert('처음입니다.')}
    else {n2--;}
    $('.ex4 ul').animate({'margin-left' : -800 * n2})
    })
    $('.ex4 .next').click(function() {//왼쪽
    if(n2 >= 5) {n2 = n2;window.alert('마지막입니다.')}
    else {n2++;}    
    $('.ex4 ul').animate({'margin-left' : -800 * n2})
    })
})
  

