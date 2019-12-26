$(document).ready(function(){

    $('#submitButton').on('click', function(){

        console.log("button was clicked");
        var city = $("#city").val();

        if(city != " "){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + 
                "&APPID=0f811edb1ef54f07062c6e3574da2120", api.openweathermap.org/data/2.5/weather?q=London
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(data);
                }
            });

        }else{
            $("#error").html("Please submit a proper city name")

        }

    });

});

