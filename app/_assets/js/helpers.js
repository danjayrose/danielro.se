"use strict";

var app = {};

app.helpers = {
	addClass: function(el,className) {
		if (el.classList)
		  el.classList.add(className);
		else
		  el.className += ' ' + className;
	},
	removeClass: function(el,className) {
		if (el.classList)
		  el.classList.remove(className);
		else
		  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	},
	toggleClass: function(el,className) {
		if (el.classList) {
		  el.classList.toggle(className);
		} else {
		  var classes = el.className.split(' ');
		  var existingIndex = classes.indexOf(className);

		  if (existingIndex >= 0)
		    classes.splice(existingIndex, 1);
		  else
		    classes.push(className);

		  el.className = classes.join(' ');
		}
	},
	closestClass: function(el, className) {
	    while (!el.classList.contains(className)) {
	        el = el.parentNode;
	        if (!el) {
	            return null;
	        }
	    }

	    return el;
	},
	hasClass: function(el, className) {
		if (el.classList)
		  return el.classList.contains(className);
		else
		  return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
};