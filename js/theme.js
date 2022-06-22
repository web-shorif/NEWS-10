(function($) {
    "use strict";  
 
    /* AOS is item animation js */
    AOS.init({
        duration: 1000,
        delay: 0,
    }); 
 
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.menu-fixed').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 120) {
                    $(".menu-fixed").addClass("navbar-fixed").fadeIn();
                } else {
                    $(".menu-fixed").removeClass("navbar-fixed");
                }
            });
        };
    };
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.menu-fixed').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 120) {
                    $(".menu-fixed").addClass("navbar-fixed").fadeIn();
                } else {
                    $(".menu-fixed").removeClass("navbar-fixed");
                }
            });
        };
    };
    // Show or hide the sticky footer button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to Top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 800);
    });
    
    // sidebar_menu All Page/
    $("#menu-opener").on('click', function () {
        $(".sidebar-menus").toggleClass("active");
    });
    $(".remove-one").on('click', function () {
        $(".sidebar-menus").removeClass("active");
    });  
     
     
    // Menu Search from 
    $(".js-search-dropdown-toggle").on("click", function () {
        $(".mnmd-search-full").toggleClass("On");
    });
    $("#mnmd-search-remove").on("click", function () {
        $(".mnmd-search-full").removeClass("On");
    });
 
    // maan Languages nice selector
    $(document).ready(function() {
        $('select').niceSelect();
    });

    //* Magnificpopup js
    function magnificPopup() {
        if ($('.play-btn').length) { 
            //Video Popup
            $('.play-btn').magnificPopup({
                disableOn: 200,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });   
        };
    }; 


    var swiper = new Swiper(".related-item", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 1000,
        autoplay:{
            delay:5000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            570: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
    }); 
        
    /*Function Calls*/ 
    new WOW().init(); 
    navbarFixed ();  
    magnificPopup();  
})(jQuery); 


