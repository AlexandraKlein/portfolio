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


});