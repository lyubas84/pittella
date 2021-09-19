$("#sendMail").on("click", function(){
    var email = $("#email").val();
    console.log(email);

    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache: false,
        data: {'email': email},
        dataType: 'html',
        beforeSend: function() {
            console.log("BEFORE");
        },
        success: function(data) {
            console.log(data);
        }
    });
});