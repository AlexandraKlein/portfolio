$( document ).ready(function() {

    var body = $('body'),
        overlay = $('.project-overlay'),
        close = $('.close'),
        project = $('a.project-target'),
        isOpen = body.hasClass('open'),
        scrollValue = isOpen ? -parseInt(body[0].style.top) : body.scrollTop();

    project.click(function(e){
        var body = $('body'),
            overlay = $('.project-overlay'),
            close = $('.close'),
            project = $('a.project-target'),
            isOpen = body.hasClass('open'),
            scrollValue = isOpen ? -parseInt(body[0].style.top) : body.scrollTop();

        $(e.currentTarget).siblings('.project-overlay').addClass('open'); // adds 'height: 100%'
        body.addClass('open'); // adds 'position: fixed'
        close.addClass('open');

        if(!isOpen){
            body.css('top', -scrollValue);
            overlay.scrollTop(0);
        } else {
            body.scrollTop(scrollValue);
        }
    });

    close.click(function (e) {

        var body = $('body'),
            overlay = $('.project-overlay'),
            close = $('.close'),
            isOpen = body.hasClass('open'),
            scrollValue = isOpen ? -parseInt(body[0].style.top) : body.scrollTop();

        overlay.removeClass('open');
        body.removeClass('open');
        close.removeClass('open');

        if(!isOpen){
            body.css('top', -scrollValue);
            overlay.scrollTop(0);
        } else {
            body.scrollTop(scrollValue);
        }
    });
});
