var button = document.querySelector("/submit")
var inputValue = document.querySelector(".inputType")
var name = document.querySelector("name")


.button.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&
,appid="81422bbb32515a09b5683222c3eb76b2")
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var temp = data['main']['temp'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;

    })
.catch(err => ("Please enter a valid city name"))
})
