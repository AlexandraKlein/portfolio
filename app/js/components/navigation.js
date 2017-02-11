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
        var progress = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100),
            $progressBar = $('.progress .bar');

        $progressBar.width(progress + '%');
    }



    $(window).scroll(function() {
        progress();
    });


});