$( document ).ready(function() {

    var body = $('body'),
        overlay = $('.project-overlay'),
        close = $('.close'),
        project = $('a.project-target');

    project.click(function(e){

        $(e.currentTarget).siblings('.project-overlay').addClass('open'); // adds 'height: 100%'
        body.addClass('open'); // adds 'position: fixed'
        close.addClass('open');
    });

    close.click(function (e) {
        overlay.removeClass('open');
        body.removeClass('open');
        close.removeClass('open');
    });
});
