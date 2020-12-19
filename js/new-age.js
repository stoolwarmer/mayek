(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// hor-vert scroll
$(document).ready(function() {
$("#fakecontent").css("height", (4000-$(window).height()));
    $(window).on('scroll', function() {
var x = $(window).width();
    if($(window).scrollTop()>(4000-x)){
    $("#realcontent").css("left", -(4000-x));
    $("#realcontent").css("top", (4000-x));
        $("#realcontent").css("position", 'absolute');
        }
        else{
        $("#realcontent").css("left", -$(window).scrollTop());
    $("#realcontent").css("position", 'fixed');
    $("#realcontent").css("top", 0);
    }
  });
 
  });


$(document).ready(function() {

  var scrollAnime = function(){

  $(".tall-container").css("height", (($('.scroll-container').width() - $(window).width()) + $(window).height() + 150));
  $(window).resize(function(){
$(".tall-container").css("height", (($('.scroll-container').width() - $(window).width()) + $(window).height() + 150));
$(".tall-container1").css("height", (($('.scroll-container1').width() - $(window).width()) + $(window).height() + 150));
});

    $(window).on('scroll', function() {

        $(".scroll-container").css("left", -($(".inner-container").offset().top - $(".tall-container").offset().top));
    
  });

// scrollerx    
$(".tall-container1").css("height", (($('.scroll-container1').width() - $(window).width()) + $(window).height() + 150));
$(".fixer").css("width", $(window).width());
$(window).on('scroll', function() {
var x = ($(".inner-container1").offset().top - $(".tall-container1").offset().top);
        $(".scroll-container1").css("left", -x);
        $(".fixer").css("left", x);
       var xx = Math.min(x, 865);
     
        $(".c3").css({"transform": "translate("+(-(xx/5))+"px, "+(-(xx/6))+"px)", marginLeft: 0});
        $(".c1").css({"transform": "translate("+((xx/5))+"px, "+((xx/6))+"px)", marginLeft: 0});
      
if(xx==865){
  var y = x-865;
  var z = 865-y;
  var zz = Math.max(z, 6);
  var yy = Math.min((y/4), 210);
  $(".c3").css({"transform": "translate("+(-(zz/5))+"px, "+(-(zz/6))+"px)", marginLeft: -(yy)});
        $(".c1").css({"transform": "translate("+((zz/5))+"px, "+((zz/6))+"px)", marginLeft: yy});
      }
    
  });
}

scrollAnime();

  });


$(document).ready(function() {

  var scrollAnime2 = function(){

  
  $(window).resize(function(){
$(".tall-container2").css("height", (($('.scroll-container2').width() - $(window).width()) + $(window).height() + 150));

});


// scrollerx    
$(".tall-container2").css("height", (($('.scroll-container2').width() - $(window).width()) + $(window).height() + 150));
$(".fixer2").css("width", $(window).width());
$(window).on('scroll', function() {
var x = ($(".inner-container2").offset().top - $(".tall-container2").offset().top);
        $(".scroll-container2").css("left", -x);
        $(".fixer2").css("left", x);
       var xx = Math.min(x, 865);
       var xxx = Math.max(x, 1);
     
  
        $(".c3x").css({"transform": "translate("+(-(xx/7))+"px, "+(-(xx/6))+"px)", marginLeft: 0});
        $(".c1x").css({"transform": "translate("+((xx/7))+"px, "+((xx/6))+"px)", marginLeft: 0});
        $(".cards-text").css("opacity", xxx/800);
      
if(xx==865){
 
if(x > ($(".inner-container2").width() * 2)) {
 /* $("#ct3").css("left", -($("#ct3").width()*3));
$("#ct2").css("left", -($("#ct3").width()*4));
$("#ct2x").css("display", "none");
$("#ct1").css("left", -($("#ct3").width()*4));*/
$(function() {
  
 
  var c = document.getElementById("fixer2").children;
  for (var i = 0; i < c.length; i++) {
    c[i].style.setProperty('--endpos', -($("#ct3").width()*4)+'px');
    c[i].style.setProperty('--startpos', -($("#ct3").outerWidth() + 40)+'px');
    var a = c[i].children[0];
    a.classList.remove('slidertext');
    a.classList.add('slidertext-out');
  }
});

}
else {


  $(function() {
  
 
  var c = document.getElementById("fixer2").children;
  for (var i = 0; i < c.length; i++) {
    c[i].style.setProperty('--startpos', -($("#ct3").width()*4)+'px');
    c[i].style.setProperty('--endpos', -($("#ct3").outerWidth() + 40)+'px');
    var a = c[i].children[0];
    a.classList.remove('slidertext-out');
    a.classList.add('slidertext');
  }
});
/*$("#ct3").css("left", -($("#ct3").outerWidth() + 20));
$("#ct2").css({"left": -($("#ct3").outerWidth() + 20)} );
$("#ct2x").css("display", "none");
$("#ct1").css("left", -($("#ct3").outerWidth() + 20));*/

      } 
    }
      else {

        $(function() {
  
 
  var c = document.getElementById("fixer2").children;
  for (var i = 0; i < c.length; i++) {
    c[i].style.setProperty('--endpos', -($("#ct3").width()*4)+'px');
    c[i].style.setProperty('--startpos', -($("#ct3").outerWidth() + 40)+'px');
    var a = c[i].children[0];
    a.classList.remove('slidertext');
    a.classList.add('slidertext-out');
  }
});
        /*$("#ct3").css("left", -($("#ct3").width()*3));
        $("#ct2").css("left", -($("#ct3").width()*4));
        $("#ct2x").css("display", "none");
        $("#ct1").css("left", -($("#ct3").width()*4));*/
      }
      
    
  });
}

scrollAnime2();

  });

 
