





//header fixed
$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('header').addClass('fixed-header');
   
  }
  else {
      $('header').removeClass('fixed-header');
     
  }
});

 



 
 /*Accordion-tabs-jQuery
==================================================  */
$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});

 
$(document).ready(function(){
	
	$(' .tabs .tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs .tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
 

$('.menu-icon').click(function(){
 $('.menu').addClass('active');
 $('.overlay').addClass('active');
 $('body').addClass('active');
}); 



$('.overlay').click(function(){
 $('.menu').removeClass('active');
 $('.overlay').removeClass('active');
 $('body').removeClass('active');
}); 



