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
});
