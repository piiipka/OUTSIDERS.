$('.header__burger').click(function(){
    $('.header__nav').addClass('open');
});

$('.nav__krest').click(function(){
    $('.header__nav').removeClass('open');
});

$(window).scroll(function(){
    let scrolled = $(window).scrollTop();

    if(scrolled > 700) {
        $('.main__banner').addClass('absolute');
        $('.main__comments').addClass('absolute');
    } else if(scrolled < 700){
        $('.main__banner').removeClass('absolute');
        $('.main__comments').removeClass('absolute');
    }
});

$('.contact').click( function(){
    $('.main__cont').addClass('cont__open');
    $('.main, .header, .footer').addClass('close')
});

$('.cont__krest').click( function(){
    $('.main__cont').removeClass('cont__open');
    $('.main, .header, .footer').removeClass('close')
})