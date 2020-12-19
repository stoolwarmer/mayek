var pos = position();
var particles = document.querySelectorAll("particle");
var q = 

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


/*$(document).ready(function() {

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

  }); */


$(document).ready(function() {

  var scrollAnime2 = function(){

  
  $(window).resize(function(){
$(".tall-container2").css("height", (($('.scroll-container2').width() - $(window).width()) + $(window).height() + 150));

});


// scrollerx 
$(".tall-container2").css("height", (($('.scroll-container2').width() - $(window).width()) + $(window).height() + 150));
$(".fixer2").css("width", $(window).width());
$(".cardsx").css({"boxShadow": "none"});
$(window).on('scroll', function() {
var x = ($(".inner-container2").offset().top - $(".tall-container2").offset().top); // starts from 0and goes up a tall container is scrolled upwards.
        $(".scroll-container2").css("left", -x);
        $(".fixer2").css("left", x); //move it with scroll to simulate a stationery behavior
     $(".cardsx").css({"display" : "none"});
     //$(".wrappa").css({"transform": "rotateZ("+x/5+"deg)"});
// animation 1 :
var movex = x;
var movey = x/2;

 for (let p = 0; p < 96; p++) {
  if(pos[p].start<0 && pos[p].end<0){ // --
  var axisX = Math.PI*Math.sin(Math.min(pos[p].start + movex, 0))*movex;
  var axisY = Math.PI*Math.sin(Math.min(pos[p].end + movey, 0))*movey;
    particles[p].style.transform = `translate(${axisX}px, ${axisY}px)`;
  }
  if(pos[p].start>0 && pos[p].end>0){ // ++
  var axisX = Math.PI*Math.max(pos[p].start - movex, 0);
  var axisY = Math.PI*Math.max(pos[p].end - movey, 0);
    particles[p].style.transform = `translate(${axisX}px, ${axisY}px)`;
  }
  if(pos[p].start<0 && pos[p].end>0){ //-+
  var axisX = Math.min(pos[p].start + movex, 0);
  var axisY = Math.max(pos[p].end - movey, 0);
    particles[p].style.transform = `translate(${axisX}px, ${axisY}px)`;
  }
  if(pos[p].start>0 && pos[p].end<0){ // +-
  var axisX = Math.max(pos[p].start - movex, 0);
  var axisY = Math.min(pos[p].end + movey, 0);
    particles[p].style.transform = `translate(${axisX}px, ${axisY}px)`;
  }
}
// amination 2: move the circles when x is over 1000
if(x>=1500){
  var kk = x-1500; // count start from 0
       var xx = Math.min(kk, 1865);
       var xxx = Math.max(kk, 1);
     
  
        $(".c3x").css({"transform": "translate("+(-(xx/15))+"px, "+(-(xx/13))+"px)", marginLeft: 0});
        $(".c1x").css({"transform": "translate("+((xx/15))+"px, "+((xx/13))+"px)", marginLeft: 0});
        $(".cards-text").css("opacity", xxx/2000);

      }

      else{
         $(".c3x").css({"transform": "translate("+(-(0))+"px, "+(-(0))+"px)", marginLeft: 0});
        $(".c1x").css({"transform": "translate("+((0))+"px, "+((0))+"px)", marginLeft: 0});
        $(".cards-text").css("opacity", 0);
      }


//animation 3 : trigger only when the circles have moved to maximum transform       
if(x>=2865){


  $(function() {
  
 
  var c = document.getElementById("fixer2").children;
  for (var i = 0; i < 3; i++) {
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
    
      else {

        $(function() {
  
 
  var c = document.getElementById("fixer2").children;
  for (var i = 0; i < 3; i++) {
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

 

function position () {
  // Loop to generate 30 particles at once
  var arr = [];
  for (let i = 0; i <96; i++) {
    // We pass the mouse coordinates to the createParticle() function
    var objPp = createParticle(i);
  
    arr.push(objPp);
  }
  return arr;
}

/*function createParticle (i, gapX, gapY, initX, initY ) {
  // Create a custom particle element
  const particle = document.createElement('particle');
  // Append the element into the body
  document.getElementById("fixer2").appendChild(particle);
  
  const size = 10;
  // Apply the size on each particle
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a blue/purple palette
  particle.style.background = `hsl(240, 100%, 82%)`;
  
  var originX = -(($("#scrollerx").width()/initX)-(i*gapX));
  var originY = -(($("#fixer2").height()/initY));

  if (originX > 600) {
    originX = -(($("#scrollerx").width()/initX)-((i-12)*50));
    originY = -(($("#fixer2").height()/(initY));
  }

  if (originX > 600 && originY >-190) {
    originX = -(($("#scrollerx").width()/initX)-((i-24)*100));
    originY = -(($("#fixer2").height()/6));
  }

  if (originX > 600 && originY >-120) {
    originX = -(($("#scrollerx").width()/initX)-((i-36)*100));
    originY = -(($("#fixer2").height()/20));
  }

  if (originX > 600 && originY >-40) {
    originX = -(($("#scrollerx").width()/initX)-((i-48)*100));
    originY =  (($("#fixer2").height()/17));
  }

  if (originX > 600 && originY < 40) {
    originX = -(($("#scrollerx").width()/initX)-((i-60)*100));
    originY =  (($("#fixer2").height()/5.8));
  }

  if (originX > 600 && originY < 120) {
    originX = -(($("#scrollerx").width()/initX)-((i-72)*100));
    originY =  (($("#fixer2").height()/3.5));
  }

  if (originX > 600 && originY < 220) {
    originX = -(($("#scrollerx").width()/initX)-((i-84)*100));
    originY =  (($("#fixer2").height()/2.5));
  }

  particle.style.transform = `translate(${originX}px, ${originY}px)`;
  var objP= {start : originX, end: originY};
  return objP; */


/*function createParticle (i) {
  // Create a custom particle element
  const particle = document.createElement('particle');
  // Append the element into the body
  document.getElementById("fixer2").appendChild(particle);
  
  const size = 5;
  // Apply the size on each particle
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a blue/purple palette
  particle.style.background = `hsl(240, 100%, 82%)`;
  
  var originX = -(($("#scrollerx").width()/2.45)-(i*100));
  var originY = -(($("#fixer2").height()/2.5));
  if (originX > 600) {
    originX = -(($("#scrollerx").width()/2.45)-((i-12)*100));
    originY = -(($("#fixer2").height()/3.5));
  }

  if (originX > 600 && originY >-190) {
    originX = -(($("#scrollerx").width()/2.45)-((i-24)*100));
    originY = -(($("#fixer2").height()/6));
  }

  if (originX > 600 && originY >-120) {
    originX = -(($("#scrollerx").width()/2.45)-((i-36)*100));
    originY = -(($("#fixer2").height()/20));
  }

  if (originX > 600 && originY >-40) {
    originX = -(($("#scrollerx").width()/2.45)-((i-48)*100));
    originY =  (($("#fixer2").height()/17));
  }

  if (originX > 600 && originY < 40) {
    originX = -(($("#scrollerx").width()/2.45)-((i-60)*100));
    originY =  (($("#fixer2").height()/5.8));
  }

  if (originX > 600 && originY < 120) {
    originX = -(($("#scrollerx").width()/2.45)-((i-72)*100));
    originY =  (($("#fixer2").height()/3.5));
  }

  if (originX > 600 && originY < 220) {
    originX = -(($("#scrollerx").width()/2.45)-((i-84)*100));
    originY =  (($("#fixer2").height()/2.5));
  }

  particle.style.transform = `translate(${originX}px, ${originY}px)`;
  var objP= {start : originX, end: originY};
  return objP; */
 function createParticle (i) {
  // Create a custom particle element
  var wrappah = document.querySelector('.wrappa');
  const particle = document.createElement('particle');
  // Append the element into the body
  wrappah.appendChild(particle);
  const size = Math.floor(Math.random() * 10 + 5);
  // Apply the size on each particle
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a blue/purple palette
  particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
  //Generate a random x & y destination within a distance of 75px from the mouse
  var originX = (Math.random() - 0.5) * 2 * ($(".wrappa").width()/2);// -ve sign to allow -ve axis
  var originY = (Math.random() - 0.5) * 2 * ($(".wrappa").height()/2);
  particle.style.transform = `translate(${originX}px, ${originY}px)`;
  var objP= {start : originX, end: originY};
  return objP;
}
