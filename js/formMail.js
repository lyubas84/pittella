$("#sendMail").on("click", function(){
    var email = $("#email").val();
    console.log(email);

    $.ajax({
        url: 'mail.php',
        type: 'GET',
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