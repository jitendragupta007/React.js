

// //menu js =======
$(".menu_icon").click(function(){
  $(".menu").addClass("active");
  $(".overlay").addClass("active"); 
  $("body").addClass("active");
});

$(".overlay").click(function(){
  $(".menu").removeClass("active");
  $(".overlay").removeClass("active"); 
  $("body").removeClass("active");
});


 
$(".modify_search_btn").click(function(){
  $(".modify_search").addClass("active");
  $(".overlay").addClass("active"); 
  $("body").addClass("active");
});

$(".filter_btn").click(function(){
  $(".filter_list").addClass("active");
  $(".overlay").addClass("active"); 
  $("body").addClass("active");
});

$(".overlay,.closebtn").click(function(){
  $(".modify_search").removeClass("active");
  $(".filter_list").removeClass("active");
  $(".overlay").removeClass("active"); 
  $("body").removeClass("active");
});






// $("#pricefilter").ionRangeSlider({
//   type: "double",
//   skin: "round",
//   force_edges: true,
//   min: 0,
//   max: 2000,
//   onFinish: function (data) {
       
//   }
// });



// $( function() {
//   $( "#datepicker" ).datepicker({
//     changeMonth: true,
//     changeYear: true
//   });
// } );

// $( function() {
//   $( "#datepicker1" ).datepicker({
//     changeMonth: true,
//     changeYear: true
//   });
// } );


// var swiper = new Swiper(".air", {
//   slidesPerView: 2,
//   spaceBetween: 10,
//   loop:true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });