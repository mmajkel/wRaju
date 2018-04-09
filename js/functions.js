/*$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {

      		$('html, body').animate({
                    scrollTop: $("#reservations").offset().top
                }, 1000);
  }else if ($(document).scrollTop() > 700) {
	  $('html, body').animate({
                    scrollTop: $("#aboutUs").offset().top
                }, 1000);
  }
  });
	  
});

var lastScrollTop = 0;
$(window).scroll(function(event){
	$("#test").text("scroll")
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('html, body').animate({
                    scrollTop: $("#reservations").offset().top
                }, 1000);
   } else {
       $('html, body').animate({
                    scrollTop: $("#news").offset().top
                }, 1000);
   }
   lastScrollTop = st;
});

*/

$(document).ready(function(){
    
  	$('a[href^="#"]').on('click', function (event) {
	    var target = $( $(this).attr('href') );
		if( target.length ) {
            var y = target.offset().top - 170;     
			event.preventDefault();
			$('html, body').animate({
				scrollTop: y
			}, 1000);
		}
	});
	
	$('#ania').hover(
		function(){
			$('#aniaImg').css('opacity','0.15');
	    	$('#a').css("display",'block');
  		}, function() {
			$('#a').css("display",'none');
			$('#aniaImg').css('opacity','1');
  	});
	$('#weronika').hover(
		function(){
			$('#werkaImg').css('opacity','0.15');
	    	$('#w').css("display",'block');
  		}, function() {
			$('#w').css("display",'none');
			$('#werkaImg').css('opacity','1');
  	});

	
	var webHeight = $(window).height()-200;
	
	//document.getElementById("test").innerHTML= webHeight;
	
	$("section").css("height",webHeight);
	
var newsPosition = $("#news").position();
var reservationsPosition = $("#reservations").position();
var aboutUsPosition = $("#aboutUs").position();

	$("#test").text("newsPosition: " + newsPosition.top +
					"reservationsPosition: " + reservationsPosition.top +
					"aboutUs: " + aboutUsPosition.top +
				   	"window height: "+webHeight);
	
	//sekcja do scrollowania
	
	var lastScrollTop =0;
	var offset = 15;
	const tab = [0,0,0];
	var i=0;
		var eTop = $("body").offset().top; //get the offset top of the element
		console.log(eTop - $(window).scrollTop()); //position of the ele w.r.t window
	  $(window).scroll(function() { //when window is scrolled
		  var windowPosition = $(window).scrollTop() - eTop;
			  	tab.splice(2,1,windowPosition);
				tab.shift();
				tab.unshift(windowPosition);
			 
			   console.log(i);
			   console.log(tab);
		  
////
//	   if ((windowPosition > newsPosition + offset)  ){
//	       $('html, body').animate({
//	                    scrollTop: $("#reservations").offset().top
//	                }, 1000);
//	   } else {
//	       $('html, body').animate({
//	                    scrollTop: $("#news").offset().top
//	                }, 1000);
//	   }
	//   lastScrollTop = st;
		
	});
});
