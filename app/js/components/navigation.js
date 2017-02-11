$(function() {

    //main hamburger nav

    $('a.open-menu').click(function(e){
        var body = $('body'),
            menu = $('.menu'),
            hamburger = $('.hamburger'),
            isOpen = body.hasClass('open'),
            scrollValue = isOpen ? -parseInt(body[0].style.top) : body.scrollTop();

        menu.toggleClass('open',!isOpen); // adds 'height: 100%'
        body.toggleClass('open',!isOpen); // adds 'position: fixed'
        hamburger.toggleClass('open');

        if(!isOpen){
            body.css('top', -scrollValue);
            menu.scrollTop(0);
        } else {
            body.scrollTop(scrollValue);
        }
    });

    //progress bar

    function progress() {
        var $progressBar = $('.progress .bar'),
            windowScrollTop = $(window).scrollTop(),
            docHeight = $(document).height(),
            windowHeight = $(window).height(),
            scrollPercent = (windowScrollTop / (docHeight - windowHeight)) * 100;

        $progressBar.width(scrollPercent + '%');
    }


    $(window).scroll(function() {
        progress();
    });


});