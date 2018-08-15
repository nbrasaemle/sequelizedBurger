//$(document).ready(function () {
    $("button.hasDevoured").on("click", function(event) {
        event.preventDefault();
        console.log("click")

        var id = $(this).data("id");
        var objColVals = {
            devoured: true
        };
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "put",
            data: objColVals
        }).then(
            function() {
                console.log("devoured burger!", id);
                location.reload();
            }
        );
    });
    
    $(".create-form").submit(function (event) {
        console.log("something");
        event.preventDefault();

        //     $.post("/api/burgers",
        //     {
        //         burger_name: $("#newBurger").val().trim()
        //     },
        //     function(data, status){
        //         // alert("Data: " + data + "\nStatus: " + status);
        //         location.reload();
        //     });
        //   });

        $.ajax({
            url: "/api/burgers",
            type: "post",
            data: {
                burger_name: $("#newBurger").val().trim()
            },
            success: function (response) {
                // you will get response from your php page (what you echo or print)                 
                console.log(response);
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
        // $.ajax({
        //     url: "/api/burgers",
        //     type: "put",
        //     data: {
        //         burger_name: $("#hasDevoured").val()
        //     },
        //     success: function (response) {
        //         // you will get response from your php page (what you echo or print)                 
        //         console.log(response);
        //         location.reload();
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //         console.log(textStatus, errorThrown);
        //     }
        // });
        
    });
//});