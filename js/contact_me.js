$(function() {
  $('#btnSubmit').on('click', function() {
    // get values from FORM
    var name = $("input#name").val();
    var email = $("input#email").val();
    var phone = $("input#phone").val();
    var message = $("textarea#message").val();
    $.ajax({
        url: "contact_me.php",
        type: "GET",
        contentType: false,
        processData: false,
        data: {
            name: name,
            phone: phone,
            email: email,
            message: message
        },
        cache: false,
        success: function() {
            // Enable button & show success message
            $('#returnmessage').html("<strong>Your message has been sent. </strong>");

            //clear all fields
            $('#contactForm').trigger("reset");
        },
        error: function() {
            // Fail message
            $('#returnmessage').html("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later!");
            //clear all fields
            $('#contactForm').trigger("reset");
        },
    });
  })
});
