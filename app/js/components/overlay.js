$(function() {
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
});