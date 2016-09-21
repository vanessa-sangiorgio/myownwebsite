$(function() {
  $('#btnSubmit').on('click', function() {
    // get values from FORM
    var name = $("input#name").val();
    var email = $("input#email").val();
    var phone = $("input#phone").val();
    var message = $("textarea#message").val();
    $.ajax({
        url: "../mail/contact_me.php",
        type: "POST",
        crossOrigin: true,
        crossDomain: true,
        //contentType: false,
        //processData: false,
        data: {
            name: name,
            phone: phone,
            email: email,
            message: message
        },
        cache: false,
        success: function() {
            // Enable button & show success message
            $('#returnmessage').html("<i class='fa fa-check' aria-hidden='true'></i>Your message has been sent.");

            //clear all fields
            $('#contactForm').trigger("reset");
        },
        error: function() {
            // Fail message
            $('#returnmessage').html("<strong><i class='fa fa-exclamation' aria-hidden='true'></i>Sorry " + name + ", it seems that my mail server is not responding. Please try again later!");
            //clear all fields
            $('#contactForm').trigger("reset");
        },
    });
  })
});
