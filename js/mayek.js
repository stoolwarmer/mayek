jQuery(function($){

  var scrollAnime = function(){

  
    $(window).on('scroll', function() {

    	$(".letter").css("left", ((($(".inner-container2").offset().top)) - $(".tall-container2").offset().top-125));
			if (((($(".inner-container2").offset().top)) - $(".tall-container2").offset().top-125)>120)
				$(".letter").css("left", 120);

		if ($(window).width() > 767) {

        $(".scroll-container1").css("left", -((($(".inner-container1").offset().top)) - $(".tall-container1").offset().top));
     //$(".col-right").css("left", (($(".inner-container1").offset().top) - $(".tall-container1").offset().top)*2+276);
			
			
			 
		}
  
	  else {
		  $(".scroll-container1").css("left", -((($(".inner-container1").offset().top)) - $(".tall-container1").offset().top));
     //$(".col-right").css("left", (($(".inner-container1").offset().top) - $(".tall-container1").offset().top)*2);
	  }
	});
  }
scrollAnime();
});

//progress bar



// mayek canvas
var canvas = document.querySelector('canvas');

var c1 = canvas.getContext('2d');
var c2 = canvas.getContext('2d');
var c3 = canvas.getContext("2d");
canvas.width = window.innerWidth*2;
canvas.height = window.innerHeight;



c1.fillStyle = 'red';
c1.beginPath();
c1.moveTo(0, 0);
c1.lineTo(window.innerWidth/1.8, 0);
c1.lineTo(window.innerWidth*.4, window.innerHeight);
c1.lineTo(0, window.innerHeight);
c1.closePath();
c1.fill();

c2.fillStyle = 'red';
c2.beginPath();
c2.moveTo(window.innerWidth/1.8, 0);
c2.lineTo(window.innerWidth, 0);
c2.lineTo(window.innerWidth, window.innerHeight);
c2.lineTo(window.innerWidth*.4, window.innerHeight);
c2.closePath();
c2.fill();

//progress bar


//var canvas = $("#paper")[0];
    
    var startX = window.innerWidth/1.8;
    var startY = 0;
    var endX = window.innerWidth*.4;
    var endY = window.innerHeight;
    var amount = 0;
    setInterval(function() {
        amount += 0.05; 
        //c3.clearRect(0, 0, canvas.width, canvas.height);
        c3.strokeStyle = "white";
        c3.lineWidth = 1; // percentage
        //c3.translate(0.5, 0.5);
        c3.beginPath();
        //c3.lineCap = 'round';
        c3.moveTo(startX, startY);
        c3.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
        c3.closePath();
        c3.stroke();
    },30);
    



jQuery(function($){
	//$(c3.canvas).css("display", "none");
	//$(c1.canvas).css("width", "3000");
var movex= (($(".inner-container1").offset().top) - $(".tall-container1").offset().top)*4;
	var movexx = window.innerWidth/1.8 + movex;



var object = {
		x1: movexx
	}
 
	
	$(window).on('scroll', function() {
	 let c1 = canvas.getContext('2d');
let c2 = canvas.getContext('2d');
let c3 = canvas.getContext('2d');
canvas.width = window.innerWidth*2;
canvas.height = window.innerHeight;


	 
	 c1.fillStyle = 'red';
c1.beginPath();
c1.moveTo(0, 0);
c1.lineTo(window.innerWidth/1.8, 0);
c1.lineTo(window.innerWidth*.4, window.innerHeight);
c1.lineTo(0, window.innerHeight);
c1.closePath();
c1.fill();
	 
	 
 var movex= (($(".inner-container1").offset().top) - $(".tall-container1").offset().top)*2;
	
	var movex1 = window.innerWidth/1.8 + movex;
	 var movex2 = window.innerWidth + movex;
		var movex3 = window.innerWidth + movex;
		var movex4 = window.innerWidth*.4 + movex;


var object = {
		x1: movex1,
	    x2: movex2,
	    x3: movex3,
	    x4: movex4
	}


c2.fillStyle = 'red';
c2.beginPath();
c2.moveTo(object.x1, 0);
c2.lineTo(object.x2, 0);
c2.lineTo(object.x3, window.innerHeight);
c2.lineTo(object.x4, window.innerHeight);
c2.closePath();
c2.fill();
 
 
 
 });


});
