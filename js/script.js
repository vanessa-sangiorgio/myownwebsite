$(document).ready(function(){

 $(".sidebar-btn").click(function(){
   $("#sidebar").toggleClass("visible");
 });

 $(".sidebar-btn").click(function(){
   $(".sidebar-btn").toggleClass("change");
 });

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
  $(".modal-drawing").addClass("isactive");
});

$(".fa-times").click(function(){
  $(".modal-drawing").removeClass("isactive");
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

//MODAL

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

$("#mockup").click(function() {
  $(".modal-mockup").addClass("isactive");
});

$("#exit").click(function() {
  $(".modal-mockup").removeClass("isactive");
});

$(".backtotop").click(function(event){
  event.preventDefault();
  $("html, body").animate({
    scrollTop:0
  }, 800);
});


//FORM//
$(document).ready(function() {
  $("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var contact = $("#contact").val();
    $("#returnmessage").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    // if (name == '' || email == '' || contact == '') {
    // alert("Please Fill Required Fields");
    // } else {
    // Returns successful data submission message when the entered information is stored in database.
      $.post("/js/contact_form.php", {
        name1: name,
        email1: email,
        message1: message,
        contact1: contact
      }, function(data) {
        $("#returnmessage").append(data); // Append returned message to message paragraph.
        if (data == "Your Query has been received, We will contact you soon.") {
          $("#form")[0].reset(); // To reset form fields on success.
        }
      });
    // }
  });
});
