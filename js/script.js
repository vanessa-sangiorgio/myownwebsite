$(document).ready(function(){

 $(".sidebar-btn").click(function(){
   $("#sidebar").toggleClass("visible");
 });

/*$("#skill").click(function(){
  $("#div-skill").toggleClass("showing");
});*/

$("#skill").click(function(){
$("#skill-slider").slideToggle("slow");
});

$("#animals").click(function(){
  $("#card").toggleClass("flipped");
});

$("#environment").click(function(){
  $("#card2").toggleClass("flipped");
});

$("#drawing").click(function(){
  $("#card3").toggleClass("flipped");
});

//SLIDER SKILLS
var currentIndex = 0,
items = $(".list-slides .slide"),
itemAmt = items.length;

function cycleItems() {
  var item = $(".list-slides .slide").eq(currentIndex);
  items.hide();
  item.css('display', 'inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 6000);

$(".next").click(function() {
  clearInterval(autoSlide);
  currentIndex +=1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$(".prev").click(function() {
  clearInterval(autoSlide);
  currentIndex -=1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});

});
