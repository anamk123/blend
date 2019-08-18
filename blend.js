// getting the API code (js and tutirial help for json) using let this time isntead of var
const appKey = "46f184c3e1706939cb694857a1cfc1f6";
let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let toggleButton = document.getElementsByClassName("toggleButton");

// adding event key listeners
searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

// using enterkey on search bar same as clicking search
function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}
// if value is equal to (search input is user text here)
function findWeatherDetails() {
  if (searchInput.value === "") {
  
    
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }


 // getting the array/json data to display the objects in the indivdual divs made
function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
  
}
// this I think is the request call back when changed however I need to research more on this
function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText)
            
            
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

//testing to see if it works

$('.containerTemp').click(function()
{
    console.log('working');

})

// hiding and showing the weather finder
$('.toggleButton').click(function()

{
    $('.containerTemp').toggle('.hide');
    $('.toggleButton').toggle('.hide');

    
})

// crossing out the weather out to bring back the button
$('.cross').click(function()

{
    $('.containerTemp').toggle('.hide');
    $('.toggleButton').toggle('.hide');

    
})

// display the button little later to the header text
setTimeout(function(){ $(".toggleButton").delay(4000).fadeIn(1000)});

setTimeout(function(){ $(".sfImg").delay(5000).fadeIn(1000)});
