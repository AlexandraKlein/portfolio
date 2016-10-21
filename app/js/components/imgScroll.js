$(function() {
    var picture = $('.sequence img');
    var pictureCount = picture.length;
    var scrollResolution = 75;

    function animateSequence() {
        $('.sequence img:gt(0)').hide();

        setInterval(function() {
            $('.sequence :first-child').hide()
               .next('img').show()
               .end().appendTo('.sequence');
        }, 100);
    }

    function animateScroll() {
        var currentScrollPosition = window.pageYOffset;
        var imageIndex = Math.round(currentScrollPosition / scrollResolution);

        if (imageIndex >= pictureCount) {
            imageIndex = pictureCount - 1;
        }

        picture.hide();
        picture.eq(imageIndex).show();
    }

    //function findScrollPosition() {
    //    var fixedPositionY = $('.divider.map'),
    //        hT = fixedPositionY.offset().top,
    //        hH = fixedPositionY.outerHeight(),
    //        wH = $(window).height(),
    //        wS = $(this).scrollTop();
    //
    //    if (wS > (hT + hH - wH)){
    //        picture.css({
    //            bottom: 500
    //        });
    //    }
    //}

    animateSequence();
    animateScroll();

    $(window).bind('scroll', function() {
        animateScroll();
        findScrollPosition();
    });

});