$(function(){
   
    $('.animation').css('visibility', 'hidden');
    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.animation').each(function () {
            var targetPosition = $(this).offset().top;
            if (topWindow > targetPosition - windowHeight + 100) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    $('a[href^="#"]').click(function () {
        // スクロールの速度
        var speed = 1000; // ミリ秒で記述
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });

    $('#slider').slick({
        'autoplay': true,
        'autoplaySpeed': 4000
    });

});


