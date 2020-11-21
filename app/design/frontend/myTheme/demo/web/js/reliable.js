require(['jquery', 'jquery/jquery-migrate', 'accordion', 'slick'], function ($) {
    
    // accordian initialize
    $("#element").accordion();

    //slick initialize
    $("#related").not('.slick-initialized').slick({
        slide: 'li',
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });
});