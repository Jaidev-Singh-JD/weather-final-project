window.addEventListener("DOMContentLoaded", () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
    }
    else {
        alert("Your System Does Not Support Geolocation API")
    }

    let login = document.getElementById("login")
    login.addEventListener("click", () => {
        window.location = "login.html"
    })



    let temp = document.getElementById("temp")
    let weathercondition = document.getElementById("weathercondition")
    let city = document.getElementById("city")
    let country = document.getElementById("country")
    let feels_like = document.getElementById("feels_like")
    let humidity = document.getElementById("humidity")
    let infoText = document.getElementById("infoText")
    let icon = document.querySelector("#img")
    let btn = document.querySelector("#mag")
    let suggest_click = document.querySelector(".suggestion-box")
    let container = document.querySelector(".container")



    let api;





    // current location
    let currentloc = document.getElementById("currentlocation")
    currentloc.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        }
        else {
            alert("Your System Does Not Support Geolocation API")
        }
    })


    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=23f88dd19a408b48dc54ac3d48402709`
        fetchApi()
    }

    function error(error) {
        infoText.innerHTML = error.message

    }


    // by city
    let search = document.getElementById("search")
    search.addEventListener("keyup", e => {
        if (e.key == "Enter" && search.value !== "") {
            requestApi(search.value)
            suggest_click.innerHTML=" "       
        }
    });
    //btn click 
    btn.addEventListener("click", () => {
        // console.log("clicked")
        if (search.value !== "") {
            requestApi(search.value)
            suggest_click.innerHTML=" "  
        }
    });
    


    function requestApi(city) {
        api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=23f88dd19a408b48dc54ac3d48402709`;
        fetchApi()
    }




    function fetchApi() {
        infoText.innerHTML = "Getting Details"

        fetch(api).then(response => response.json()).then(data => weatherData(data)).catch(() => {
            infoText.innerHTML = "Some Error Occured";
        });
    }


    function weatherData(data) {
        if (data.cod == "404") {
            console.log("reached")
            infoText.innerHTML = `Can't find the data for ${search.value}. Please provide a valid city name`
        }
        else {

            console.log(data)
            temp.innerHTML = `${Math.floor(data.main.temp)}&#8451`
            weathercondition.innerHTML = data.weather[0].description
            city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`
            country.innerHTML = `Country Code: ${data.sys.country}`
            feels_like.innerHTML = `Feels Like : ${Math.floor(data.main.feels_like)}&#8451`
            humidity.innerHTML = `Humidity : ${data.main.humidity}%`

            if (data.weather[0].id == 800) {
                icon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
                container.classList.add("sun")
                container.classList.remove("cloud-bolt")
                container.classList.remove("snowflake")
                container.classList.remove("smog")
                container.classList.remove("cloud")
                container.classList.remove("rain")
            } else if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
                icon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
                container.classList.add("cloud-bolt")
                container.classList.remove("sun")
                container.classList.remove("snowflake")
                container.classList.remove("smog")
                container.classList.remove("cloud")
                container.classList.remove("rain")
            } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
                icon.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
                container.classList.add("snowflake")
                container.classList.remove("sun")
                container.classList.remove("cloud-bolt")
                container.classList.remove("smog")
                container.classList.remove("cloud")
                container.classList.remove("rain")
            } else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
                icon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
                container.classList.add("smog")
                container.classList.remove("sun")
                container.classList.remove("cloud-bolt")
                container.classList.remove("snowflake")
                container.classList.remove("cloud")
                container.classList.remove("rain")
            } else if (data.weather[0].id >= 801 && data.weather[0].id <= 804) {
                icon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
                container.classList.add("cloud")
                container.classList.remove("sun")
                container.classList.remove("cloud-bolt")
                container.classList.remove("snowflake")
                container.classList.remove("smog")
                container.classList.remove("rain")
            } else if ((data.weather[0].id >= 500 && data.weather[0].id <= 531) || (data.weather[0].id >= 300 && data.weather[0].id <= 321)) {
                icon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
                container.classList.add("rain")
                container.classList.remove("sun")
                container.classList.remove("cloud-bolt")
                container.classList.remove("snowflake")
                container.classList.remove("smog")
                container.classList.remove("cloud")
            }
            infoText.innerHTML = ""
            search.value =""
        }
    }




})




