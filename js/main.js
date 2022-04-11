

$(function(){
    $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1500);//800 - длительность скроллинга в мс
    return false;
    });
    });


    $(function(){
        $('.slick__map').slick({
            arrows: true,
            fade: true,
            autoplay:  1000,
        });
    });