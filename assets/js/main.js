/*
	Projection by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

// Load header and footer
window.onload = function() {
	// Load header
	fetch("assets/js/header.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("header").innerHTML = data;
			setNavigation(); // Call setNavigation after the header is loaded
		});

	// Load footer
	fetch("assets/js/footer.html")
		.then(response => response.text())
		.then(data => document.getElementById("footer").innerHTML = data);
}

function setNavigation() {
	var path = window.location.pathname;
	path = path.replace(/\//g, ""); // Replace all occurrences of "/"
	path = decodeURIComponent(path);

	$("#nav a").each(function () {
		var href = $(this).attr('href');
		if (href !== undefined) {
			href = href.replace(/\//g, ""); // Replace all occurrences of "/" in href
			if (path.substring(path.length - href.length) === href) {
				$(this).addClass('active');
			}
		}
	});
}

(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

})(jQuery);

$(document).ready(function() {

$('.wrapper').css('display', 'none');
$('.inner').css('display', 'none');
$('.wrapper').fadeIn(500);
$('.inner').fadeIn(500);

$('.link').click(function(event) {

event.preventDefault();

newLocation = this.href;

$('.wrapper').fadeOut(500, newpage);
$('.inner').fadeOut(500, newpage);

});

var url = data.url + "&output=embed";
window.location.replace(url);


function newpage() {

window.location = newLocation;

}

});

// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 800);
//     return false;
// });

// $(document).ready(function(){
//   $("a").on('click', function(event) {

//     if (this.hash !== "") {
//       event.preventDefault();

//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//       });
//     } // End if
//   });
// });