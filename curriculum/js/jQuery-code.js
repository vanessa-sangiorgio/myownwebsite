$(document).ready(function(){
   $(".sidebar-btn").click(function(){
     $("#sidebar").toggleClass("visible");
   });

   $(".sidebar-btn").click(function(){
     $(".sidebar-btn").toggleClass("change");
   });

$(".backtotop").click(function(event){
  event.preventDefault();
  $("html, body").animate({
    scrollTop:0
  }, 800);
});

$(".contactMe").click(function() {
  $(".modal").addClass("isactive");
});

$("#contact").click(function() {
  $(".modal").addClass("isactive");
});

$(".fa-envelope").click(function() {
  $(".modal").addClass("isactive");
});

$(".fa-times").click(function() {
  $(".modal").removeClass("isactive");
});

});
