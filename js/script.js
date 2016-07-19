$(document).ready(function(){

$("#card").click(function(){
  $("#front").animate({height: 'toggle'}, "slow");
  $("#back").animate({height: 'show'}, "slow");
});

$(".card2").click(function(){
  $("#front-draw").animate({height: 'toggle'}, "slow");
  $("#back-draw").animate({height: 'show'}, "slow");
});

 $(".sidebar-btn").click(function(){
   $("#sidebar").toggleClass("visible");
 });

$("#skill").click(function(){
  $("#div-skill").toggleClass("showing");
});

});
