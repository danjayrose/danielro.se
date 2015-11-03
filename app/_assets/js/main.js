var navBtn = document.querySelectorAll('.js-nav-open')[0],
	nav = document.querySelectorAll('.js-site-nav')[0];

var navShow = function() {
	var lastScrollTop = 0,
		delta = 5,
		navbarHeight = nav.offsetHeight;

	var hasScrolled = function() {
		var st = document.body.scrollTop;
    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        app.helpers.addClass(nav,'site-nav--hidden');
	        if (app.helpers.hasClass(nav,'site-nav--expanded')) {
	            app.helpers.removeClass(nav,'site-nav--expanded');
	        	app.helpers.removeClass(navBtn,'site-nav__btn--open');
	        }
	    } else {
	        // Scroll Up
	        if(st + window.innerHeight < document.body.scrollHeight) {
	            app.helpers.removeClass(nav,'site-nav--hidden');
	        }
	    }
	    
	    lastScrollTop = st;
	};

	window.addEventListener("optimizedScroll", function() {
		hasScrolled();
	});
};

navShow();

navBtn.addEventListener("click", function(e) {
	e.preventDefault();

	var nav = app.helpers.closestClass(this,'js-site-nav');

	app.helpers.toggleClass(nav,'site-nav--expanded');
	app.helpers.toggleClass(this,'site-nav__btn--open');
}, false);

