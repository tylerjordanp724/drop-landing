$(document).ready(function(){

	TweenMax.staggerFromTo('.logo', 1.25, {top: -100}, {top: 0, ease: Elastic.easeOut}, 1);
	TweenMax.staggerFromTo('.logo', 0.5, {opacity: 0}, {opacity: 1}, 1.5);
	TweenMax.staggerFromTo('.fade-in', 1, {opacity: 0}, {opacity: 1}, 1);
    

});


