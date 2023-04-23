/*
* hoverFlow - A Solution to Animation Queue Buildup in jQuery
* Version 1.00
*
* Copyright (c) 2009 Ralf Stoltze, http://www.2meter3.de/code/hoverFlow/
*/
(function( $ ){

	$.fn.hoverFlow = function(type, prop, speed, easing, callback) {
		// only allow hover events
		if ($.inArray(type, ['mouseover', 'mouseenter', 'mouseout', 'mouseleave']) == -1) {
			return this;
		}
	
		// build animation options object from arguments
		// based on internal speed function from jQuery core
		var opt = typeof speed === 'object' ? speed : {
			complete: callback || !callback && easing || $.isFunction(speed) && speed,
			duration: speed,
			easing: callback && easing || easing && !$.isFunction(easing) && easing
		};
		
		// run immediately
		opt.queue = false;
			
		// wrap original callback and add dequeue
		var origCallback = opt.complete;
		opt.complete = function() {
			// execute next function in queue
			$(this).dequeue();
			// execute original callback
			if ($.isFunction(origCallback)) {
				origCallback.call(this);
			}
		};
		
		// keep the chain intact
		return this.each(function() {
			var $this = $(this);
		
			// set flag when mouse is over element
			if (type == 'mouseover' || type == 'mouseenter') {
				$this.data('jQuery.hoverFlow', true);
			} else {
				$this.removeData('jQuery.hoverFlow');
			}
			
			// enqueue function
			$this.queue(function() {				
				// check mouse position at runtime
				var condition = (type == 'mouseover' || type == 'mouseenter') ?
					// read: true if mouse is over element
					$this.data('jQuery.hoverFlow') !== undefined :
					// read: true if mouse is _not_ over element
					$this.data('jQuery.hoverFlow') === undefined;
					
				// only execute animation if condition is met, which is:
				// - only run mouseover animation if mouse _is_ currently over the element
				// - only run mouseout animation if the mouse is currently _not_ over the element
				if(condition) {
					$this.animate(prop, opt);
				// else, clear queue, since there's nothing more to do
				} else {
					$this.queue([]);
				}
			});

		});
	};

})( jQuery );


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});




/*
 * CUSTOM FUNCTIONS
 */

/* 
* Function to animate content details
*/
function animateContent() { 

	// show the rest of the content		
	$('#content-detail').css({'opacity':'0', 'top':'50px'}).stop().animate({'opacity':'1', 'top':'0px'}, 500, 'easeOutExpo');
	$('#footer').css({'opacity':'0', 'top':'50px'}).stop().animate({'opacity':'1', 'top':'0px'}, 500, 'easeOutExpo');
};

/* 
* Function to switch face on browser resize
*/
$.fn.resizeFace = function() { 

	$(window).resize(function() {

		var pageWidth = window.innerWidth || document.body.clientWidth;
		//console.log(pageWidth);	

	  	// Show large face
	  	if(pageWidth >= 1140) {
	  		
	  		$('#designer-img').css({'opacity':'1'});
	  		$('#coder-img').css({'opacity':'1'});
	  		$('#designer-bg').css({'opacity':'1'});
	  		$('#coder-bg').css({'opacity':'1'});
	  		$('#designer').css({'opacity':'1'});
	  		$('#coder').css({'opacity':'1'});

	  	} else { // Show smaller face image

	  		$('#face-img').css({'opacity':'1'});
	  		$('#designer').css({'opacity':'1'});
	  		$('#coder').css({'opacity':'1'});
	  	}

	});
};

/* 
* Function to animate home page
*/
$.fn.animateHome = function() { 

	// only animate for large desktop browsers
	var pageWidth = window.innerWidth || document.body.clientWidth;

	if(pageWidth >= 1140){

	      $('#content').animate({'opacity':'1'}, 500, 'easeOutExpo');
	      $('#designer-img').css({'left':'-500px'}).stop().animate({'opacity':'1', 'left':'100px'}, 1000, 'easeOutExpo');
	      $('#coder-img').css({'right':'-500px'}).stop().animate({'opacity':'1', 'right':'100px'}, 1000, 'easeOutExpo');
	      $('#designer-bg').css({'left':'-500px'}).stop().animate({'opacity':'1', 'left':'100px'}, 1500, 'easeOutBack');
	      $('#coder-bg').css({'right':'-500px'}).stop().animate({'opacity':'1', 'right':'100px'}, 1500, 'easeOutBack');
	      $('#designer').delay(1500).animate({'opacity':'1'}, 500, 'easeOutExpo');
	      $('#coder').delay(1500).animate({'opacity':'1'}, 500, 'easeOutExpo', function(){ animateFace(); });

	}else{
	    
	    $('#content').animate({'opacity':'1'}, 500, 'easeOutExpo');
	    $('#face-img').animate({'opacity':'1'}, 2000, 'easeOutExpo');
	    $('#designer').delay(1000).animate({'opacity':'1'}, 500, 'easeOutExpo');
	    $('#coder').delay(1000).animate({'opacity':'1'}, 500, 'easeOutExpo', function(){ animateContent(); });

	}
}; 

/* 
* Function to animate face
*/
function animateFace() {

	var designerImg 	= $('#designer-img');
	var coderImg 		= $('#coder-img');
	var designerHover	= $('#designer');
	var coderHover		= $('#coder');
	var designerDesc	= $('#designer-desc');
	var coderDesc		= $('#coder-desc');	
	var designerArrow	= $('#designer-arrow');
	var coderArrow		= $('#coder-arrow');		
	var designerBg		= $('#designer-bg');
	var coderBg			= $('#coder-bg');
	var face 			= $('#face');
	var section 		= $('#section');
	var duration 		= 500;

	var mouseX = 0;
	var relMouseX = 520;
	var xp = 520;
	var loop = 0;
	frameRate =  30;
	timeInterval = Math.round( 1000 / frameRate );		

	// Firstly animate the bottom content onto the page
	animateContent();

	section.mouseenter(function(e){

		// Get mouse position
		section.mousemove(function(e){

		   	// raw mouse position
		   	mouseX = e.pageX;

		   	// mouse position relative to face div
		   	relMouseX = mouseX - face.offset().left;

		});
		
		// Animate the face based on mouse movement
		loop = setInterval(function(){

			// zeno's paradox dampens the movement
			xp += (relMouseX - xp) / 12;

			designerImg.css({width:420 + (520 - xp) * 0.5, left: 100 + (520 - xp) * 0.1});
		    coderImg.css({width:420 + (xp - 520) * 0.5, right: 100 - (520 - xp) * 0.1});

		    designerBg.css({left: 100 + (520 - xp) * 0.05, opacity: ((1040 - xp)/520)});
		    coderBg.css({right:  100 + (xp - 520) * 0.05, opacity: (xp/520)});

		    designerDesc.css({opacity: ((1040 - xp)/520)});
		    coderDesc.css({opacity: (xp/520)});

		}, timeInterval );

	}).mouseleave(function(e){ 

		// reset the face to initial state
		clearInterval(loop);
		xp 			= 520;
		mouseX 		= 0;
		relMouseX 	= 520;

		designerImg.hoverFlow(e.type, {width: 420, left: 100}, duration, 'easeOutQuad');
		coderImg.hoverFlow(e.type, {width: 420, right: 100}, duration, 'easeOutQuad');
		coderDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		designerDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		coderBg.hoverFlow(e.type, {right:100, opacity: 1}, duration, 'easeOutQuad');
		designerBg.hoverFlow(e.type, {left:100, opacity: 1}, duration, 'easeOutQuad');

	}); 
	
}; 

