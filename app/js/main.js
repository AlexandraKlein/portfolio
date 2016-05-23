/**
 * Created by alexandraklein on 5/7/16.
 */
$( document ).ready(function() {

    console.log( "ready!" );

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


    var hi = new Vivus('machine', {type: 'scenario-sync', duration: 7}, function () {
        if (console) {
            console.log('Animation finished. [log triggered from callback]');
        }
    });
    var hello = new Vivus('responsive', {type: 'scenario-sync', duration: 7}, function () {
        if (console) {
            console.log('Animation finished. [log triggered from callback]');
        }
    });
});