/**
 * Created by alexandraklein on 5/7/16.
 */
$( document ).ready(function() {

    /**
     * Logo Animation
     */

    var path = document.querySelector('.logo');
    var length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 7s ease-in-out';
    path.style.strokeDashoffset = '0';

    var $body = $('body');

    /**
     * Body Scripts
     */
    if ($body.hasClass('home')) {
        console.log('Page: Home');

    /**
     * SVG Vivus Animation
     */
        var hi = new Vivus('machine', {type: 'scenario-sync', duration: 7});
        var hello = new Vivus('responsive', {type: 'scenario-sync', duration: 7});
    }

    /**
     * About Scripts
     */
    if ($body.hasClass('about')) {
        console.log('Page: About');
    }

    var close = $('.close'),
        project = $('a.project-target');

    //Open overlay
    project.click(function(e){
        var body = $('body'),
            isOpen = body.hasClass('open'),
            scrollValue = isOpen ? -parseInt(body[0].style.top) : body.scrollTop();

        $(e.currentTarget).siblings('.project-overlay').addClass('open');
        body.addClass('open');
        close.addClass('open');

        body.css('top', -scrollValue);
    });

    //Close overlay
    close.click(function () {

        var body = $('body'),
            overlay = $('.project-overlay'),
            isOpen = body.hasClass('open'),
            scrollValue = isOpen ? -parseInt(body[0].style.top) : body.scrollTop();

        overlay.removeClass('open');
        body.removeClass('open');
        close.removeClass('open');

        body.scrollTop(scrollValue);
    });

    //$(window).load(function(){
    //    $('#preloader').fadeOut('slow',function(){$(this).remove();});
    //});

    //preloader
    //
    //var demoImgArray = ['images/video/video-1.jpg',
    //                'images/video/video-2.jpg',
    //                'images/video/video-3.jpg',
    //                'images/video/video-4.jpg',
    //                'images/video/video-5.jpg',
    //                'images/video/video-6.jpg',
    //                'images/video/video-7.jpg',
    //                'images/video/video-8.jpg',
    //                'images/video/video-9.jpg',
    //                'images/video/video-10.jpg',
    //                'images/video/video-11.jpg',
    //                'images/video/video-12.jpg',
    //                'images/video/video-13.jpg',
    //                'images/video/video-14.jpg',
    //                'images/video/video-15.jpg',
    //                'images/video/video-16.jpg',
    //                'images/video/video-17.jpg',
    //                'images/video/video-18.jpg',
    //                'images/video/video-19.jpg',
    //                'images/video/video-20.jpg',
    //                'images/video/video-21.jpg',
    //                'images/video/video-22.jpg',
    //                'images/video/video-23.jpg',
    //                'images/video/video-24.jpg',
    //                'images/video/video-25.jpg',
    //                'images/video/video-26.jpg',
    //                'images/video/video-27.jpg',
    //                'images/video/video-28.jpg',
    //                'images/video/video-29.jpg',
    //                'images/video/video-30.jpg',
    //                'images/video/video-31.jpg',
    //                'images/video/video-32.jpg',
    //                'images/video/video-33.jpg',
    //                'images/video/video-34.jpg',
    //                'images/video/video-35.jpg',
    //                'images/video/video-36.jpg',
    //                'images/video/video-37.jpg',
    //                'images/video/video-38.jpg',
    //                'images/video/video-39.jpg',
    //                'images/video/video-40.jpg',
    //                'images/video/video-41.jpg',
    //                'images/video/video-42.jpg',
    //                'images/video/video-43.jpg',
    //                'images/video/video-44.jpg',
    //                'images/video/video-45.jpg',
    //                'images/video/video-46.jpg',
    //                'images/video/video-47.jpg',
    //                'images/video/video-48.jpg',
    //                'images/video/video-49.jpg',
    //                'images/video/video-50.jpg',
    //                'images/video/video-51.jpg',
    //                'images/video/video-52.jpg',
    //                'images/video/video-53.jpg',
    //                'images/video/video-54.jpg',
    //                'images/video/video-55.jpg',
    //                'images/video/video-56.jpg',
    //                'images/video/video-57.jpg'];


});