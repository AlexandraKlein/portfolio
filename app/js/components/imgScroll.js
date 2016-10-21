$(function() {
    var picture = $('img.sequence');
    var pictureCount = picture.length;
    var scrollResolution = 75;

    animateScroll();

    function animateScroll() {
        var currentScrollPosition = window.pageYOffset;
        var imageIndex = Math.round(currentScrollPosition / scrollResolution);

        if (imageIndex >= pictureCount) {
            imageIndex = pictureCount - 1; // Select last image
        }

        picture.hide();
        picture.eq(imageIndex).show();
    }

    $(window).bind('scroll', function() {
        animateScroll();


        var height = $(window).scrollTop(),
            video = $('.bg-video');
        if (height < 50) {
            video.fadeIn(250);
        } else {
            video.fadeOut(250);
        }
    });
});