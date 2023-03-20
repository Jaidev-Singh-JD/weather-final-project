window.addEventListener("DOMContentLoaded", () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
    }
    else {
        alert("Your System Does Not Support Geolocation API")
    }

    let logout = document.getElementById("logout")
    logout.addEventListener("click", () => {

        window.location = "index.html"
    })



    let temp = document.getElementById("temp")
    let weathercondition = document.getElementById("weathercondition")
    let city = document.getElementById("city")
    let country = document.getElementById("country")
    let feels_like = document.getElementById("feels_like")
    let humidity = document.getElementById("humidity")
    let infoText = document.getElementById("infoText")
    let icon = document.getElementById("img")


    let temp1 = document.getElementById("temp1")
    let weathercondition1 = document.getElementById("weathercondition1")
    let city1 = document.getElementById("city1")
    let country1 = document.getElementById("country1")
    let feels_like1 = document.getElementById("feels_like1")
    let humidity1 = document.getElementById("humidity1")
    let infoText1 = document.getElementById("infoText1")
    let icon1 = document.getElementById("img1")


    let temp2 = document.getElementById("temp2")
    let weathercondition2 = document.getElementById("weathercondition2")
    let city2 = document.getElementById("city2")
    let country2 = document.getElementById("country2")
    let feels_like2 = document.getElementById("feels_like2")
    let humidity2 = document.getElementById("humidity2")
    let infoText2 = document.getElementById("infoText2")
    let icon2 = document.getElementById("img2")

    let temp3 = document.getElementById("temp3")
    let weathercondition3 = document.getElementById("weathercondition3")
    let icon3 = document.getElementById("img3")

    let temp4 = document.getElementById("temp4")
    let weathercondition4 = document.getElementById("weathercondition4")
    let icon4 = document.getElementById("img4")

    let temp5 = document.getElementById("temp5")
    let weathercondition5 = document.getElementById("weathercondition5")
    let icon5 = document.getElementById("img5")

    let temp6 = document.getElementById("temp6")
    let weathercondition6 = document.getElementById("weathercondition6")
    let icon6 = document.getElementById("img6")

    let temp7 = document.getElementById("temp7")
    let weathercondition7 = document.getElementById("weathercondition7")
    let icon7 = document.getElementById("img7")


    let tempt1 = document.getElementById("tempt1")
    let weatherconditiont1 = document.getElementById("weatherconditiont1")
    let icont1 = document.getElementById("imgt1")

    let tempt2 = document.getElementById("tempt2")
    let weatherconditiont2 = document.getElementById("weatherconditiont2")
    let icont2 = document.getElementById("imgt2")

    let tempt3 = document.getElementById("tempt3")
    let weatherconditiont3 = document.getElementById("weatherconditiont3")
    let icont3 = document.getElementById("imgt3")

    let tempt4 = document.getElementById("tempt4")
    let weatherconditiont4 = document.getElementById("weatherconditiont4")
    let icont4 = document.getElementById("imgt4")

    let tempt5 = document.getElementById("tempt5")
    let weatherconditiont5 = document.getElementById("weatherconditiont5")
    let icont5 = document.getElementById("imgt5")


    let api;
    let api1;
    let all = document.getElementById("all")





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


        api1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=23f88dd19a408b48dc54ac3d48402709`
        fetchApi()
        fetchData()
    }

    function error(error) {
        infoText.innerHTML = error.message
        infoText1.innerHTML = error.message
        infoText2.innerHTML = error.message

    }

    //enter click
    let suggest_click = document.querySelector(".suggestion-box")
    search.addEventListener("keyup", e => {
        if (e.key == "Enter" && search.value !== "") {
            requestApi(search.value)
            suggest_click.innerHTML = " "
        }
    });
    //btn click 
    let btn = document.getElementById("mag")
    btn.addEventListener("click", () => {
        // console.log("clicked")
        if (search.value !== "") {
            requestApi(search.value)
            suggest_click.innerHTML = " "
        }
    });


    function requestApi(city) {
        api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=23f88dd19a408b48dc54ac3d48402709`;

        api1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=23f88dd19a408b48dc54ac3d48402709`
        fetchApi()
        fetchData()

    }


    function fetchApi() {
        infoText.innerHTML = "Getting Details"
        infoText1.innerHTML = "Getting Details"
        infoText2.innerHTML = "Getting Details"

        fetch(api).then(response => response.json()).then(data => weatherData(data)).catch(() => {
            infoText.innerHTML = "Some Error Occured";
            infoText1.innerHTML = "Some Error Occured";
            infoText2.innerHTML = "Some Error Occured";
        });
    }


    function weatherData(data) {
        if (data.cod == "404") {

            infoText.innerHTML = `Can't find the data for ${search.value}. Please provide a valid city name`
            infoText1.innerHTML = `Can't find the data for ${search.value}. Please provide a valid city name`
            infoText2.innerHTML = `Can't find the data for ${search.value}. Please provide a valid city name`
        }
        else {

            // console.log(data)
            document.getElementById("day").innerHTML = "Today"
            document.getElementById("day1").innerHTML = "Today"
            document.getElementById("day2").innerHTML = "Today"

            temp.innerHTML = `${Math.floor(data.main.temp + 273.15)} K`
            weathercondition.innerHTML = data.weather[0].description
            city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`
            country.innerHTML = data.sys.country
            feels_like.innerHTML = `Feels Like : ${Math.floor(data.main.feels_like + 273.15)} K`
            humidity.innerHTML = `Humidity : ${data.main.humidity}%`

            temp1.innerHTML = `${Math.floor(data.main.temp)} &#8451`
            weathercondition1.innerHTML = data.weather[0].description
            city1.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`
            country1.innerHTML = data.sys.country
            feels_like1.innerHTML = `Feels Like : ${Math.floor(data.main.feels_like)} &#8451`
            humidity1.innerHTML = `Humidity : ${data.main.humidity}%`

            temp2.innerHTML = `${Math.floor((data.main.temp * (9 / 5)) + 32)} &#8457`
            weathercondition2.innerHTML = data.weather[0].description
            city2.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`
            country2.innerHTML = data.sys.country
            feels_like2.innerHTML = `Feels Like : ${Math.floor((data.main.feels_like * (9 / 5)) + 32)} &#8457`
            humidity2.innerHTML = `Humidity : ${data.main.humidity}%`


            if (data.weather[0].id == 800) {
                icon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-sun"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-sun"></i>`;
                all.classList.add("sun")
                all.classList.remove("cloud-bolt")
                all.classList.remove("snowflake")
                all.classList.remove("smog")
                all.classList.remove("cloud")
                all.classList.remove("rain")
            } else if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
                icon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
                all.classList.add("cloud-bolt")
                all.classList.remove("sun")
                all.classList.remove("snowflake")
                all.classList.remove("smog")
                all.classList.remove("cloud")
                all.classList.remove("rain")
            } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
                icon.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
                all.classList.add("snowflake")
                all.classList.remove("cloud-bolt")
                all.classList.remove("sun")
                all.classList.remove("smog")
                all.classList.remove("cloud")
                all.classList.remove("rain")
            } else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
                icon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-smog"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-smog"></i>`;
                all.classList.add("smog")
                all.classList.remove("cloud-bolt")
                all.classList.remove("sun")
                all.classList.remove("snowflake")
                all.classList.remove("cloud")
                all.classList.remove("rain")

            } else if (data.weather[0].id >= 801 && data.weather[0].id <= 804) {
                icon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
                all.classList.add("cloud")
                all.classList.remove("cloud-bolt")
                all.classList.remove("sun")
                all.classList.remove("snowflake")
                all.classList.remove("smog")
                all.classList.remove("rain")
            } else if ((data.weather[0].id >= 500 && data.weather[0].id <= 531) || (data.weather[0].id >= 300 && data.weather[0].id <= 321)) {
                icon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
                all.classList.add("rain")
                all.classList.remove("cloud-bolt")
                all.classList.remove("sun")
                all.classList.remove("snowflake")
                all.classList.remove("smog")
                all.classList.remove("cloud")
            }

            search.value = ""
            infoText.innerHTML = ""
            infoText1.innerHTML = ""
            infoText2.innerHTML = ""



        }
    }


    function fetchData() {
        fetch(api1).then(response => response.json()).then(data1 => weatherData1(data1)).catch(() => {
            console.log("Error occured")

        });
    }



    function weatherData1(data1) {
        if (data1.cod == "404") {
            console.log(" please provide a valid city name")
        }
        else {

            console.log(data1)


            // daily forcast
            temp3.innerHTML = `${Math.floor(data1.list[8].main.temp)} &#8451`
            weathercondition3.innerHTML = data1.list[8].weather[0].description

            temp4.innerHTML = `${Math.floor(data1.list[16].main.temp)} &#8451`
            weathercondition4.innerHTML = data1.list[16].weather[0].description

            temp5.innerHTML = `${Math.floor(data1.list[21].main.temp)} &#8451`
            weathercondition5.innerHTML = data1.list[21].weather[0].description

            temp6.innerHTML = `${Math.floor(data1.list[30].main.temp)} &#8451`
            weathercondition6.innerHTML = data1.list[30].weather[0].description

            temp7.innerHTML = `${Math.floor(data1.list[38].main.temp)} &#8451`
            weathercondition7.innerHTML = data1.list[38].weather[0].description




            if (data1.list[8].weather[0].id == 800) {
                icon3.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[8].weather[0].id >= 200 && data1.list[8].weather[0].id <= 232) {
                icon3.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[8].weather[0].id >= 600 && data1.list[8].weather[0].id <= 622) {
                icon3.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[8].weather[0].id >= 701 && data1.list[8].weather[0].id <= 781) {
                icon3.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[8].weather[0].id >= 801 && data1.list[8].weather[0].id <= 804) {
                icon3.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[8].weather[0].id >= 500 && data1.list[8].weather[0].id <= 531) || (data1.list[8].weather[0].id >= 300 && data1.list[8].weather[0].id <= 321)) {
                icon3.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }


            if (data1.list[16].weather[0].id == 800) {
                icon4.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[16].weather[0].id >= 200 && data1.list[16].weather[0].id <= 232) {
                icon4.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[16].weather[0].id >= 600 && data1.list[16].weather[0].id <= 622) {
                icon4.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[16].weather[0].id >= 701 && data1.list[16].weather[0].id <= 781) {
                icon4.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[16].weather[0].id >= 801 && data1.list[16].weather[0].id <= 804) {
                icon4.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[16].weather[0].id >= 500 && data1.list[16].weather[0].id <= 531) || (data1.list[16].weather[0].id >= 300 && data1.list[16].weather[0].id <= 321)) {
                icon4.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }


            if (data1.list[21].weather[0].id == 800) {
                icon5.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[21].weather[0].id >= 200 && data1.list[21].weather[0].id <= 232) {
                icon5.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[21].weather[0].id >= 600 && data1.list[21].weather[0].id <= 622) {
                icon5.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[21].weather[0].id >= 701 && data1.list[21].weather[0].id <= 781) {
                icon5.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[21].weather[0].id >= 801 && data1.list[21].weather[0].id <= 804) {
                icon5.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[21].weather[0].id >= 500 && data1.list[21].weather[0].id <= 531) || (data1.list[21].weather[0].id >= 300 && data1.list[21].weather[0].id <= 321)) {
                icon5.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }


            if (data1.list[30].weather[0].id == 800) {
                icon6.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[30].weather[0].id >= 200 && data1.list[30].weather[0].id <= 232) {
                icon6.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[30].weather[0].id >= 600 && data1.list[30].weather[0].id <= 622) {
                icon6.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[30].weather[0].id >= 701 && data1.list[30].weather[0].id <= 781) {
                icon6.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[30].weather[0].id >= 801 && data1.list[30].weather[0].id <= 804) {
                icon6.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[30].weather[0].id >= 500 && data1.list[30].weather[0].id <= 531) || (data1.list[30].weather[0].id >= 300 && data1.list[30].weather[0].id <= 321)) {
                icon6.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }


            if (data1.list[38].weather[0].id == 800) {
                icon7.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[38].weather[0].id >= 200 && data1.list[38].weather[0].id <= 232) {
                icon7.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[38].weather[0].id >= 600 && data1.list[38].weather[0].id <= 622) {
                icon7.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[38].weather[0].id >= 701 && data1.list[38].weather[0].id <= 781) {
                icon7.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[38].weather[0].id >= 801 && data1.list[38].weather[0].id <= 804) {
                icon7.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[38].weather[0].id >= 500 && data1.list[38].weather[0].id <= 531) || (data1.list[38].weather[0].id >= 300 && data1.list[38].weather[0].id <= 321)) {
                icon7.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            let time3 = new Date(data1.list[8].dt * 1000)
            let day3 = time3.toDateString().split(" ")[0]

            let time4 = new Date(data1.list[16].dt * 1000)
            let day4 = time4.toDateString().split(" ")[0]

            let time5 = new Date(data1.list[21].dt * 1000)
            let day5 = time5.toDateString().split(" ")[0]

            let time6 = new Date(data1.list[30].dt * 1000)
            let day6 = time6.toDateString().split(" ")[0]

            let time7 = new Date(data1.list[38].dt * 1000)
            let day7 = time7.toDateString().split(" ")[0]


            document.getElementById("day3").innerHTML = day3
            document.getElementById("day4").innerHTML = day4
            document.getElementById("day5").innerHTML = day5
            document.getElementById("day6").innerHTML = day6
            document.getElementById("day7").innerHTML = day7



            // hourly Data

            tempt1.innerHTML = `${Math.floor(data1.list[0].main.temp)} &#8451`
            weatherconditiont1.innerHTML = data1.list[0].weather[0].description

            tempt2.innerHTML = `${Math.floor(data1.list[1].main.temp)} &#8451`
            weatherconditiont2.innerHTML = data1.list[1].weather[0].description

            tempt3.innerHTML = `${Math.floor(data1.list[2].main.temp)} &#8451`
            weatherconditiont3.innerHTML = data1.list[2].weather[0].description

            tempt4.innerHTML = `${Math.floor(data1.list[3].main.temp)} &#8451`
            weatherconditiont4.innerHTML = data1.list[3].weather[0].description

            tempt5.innerHTML = `${Math.floor(data1.list[4].main.temp)} &#8451`
            weatherconditiont5.innerHTML = data1.list[4].weather[0].description



            if (data1.list[0].weather[0].id == 800) {
                icont1.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[0].weather[0].id >= 200 && data1.list[0].weather[0].id <= 232) {
                icont1.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[0].weather[0].id >= 600 && data1.list[0].weather[0].id <= 622) {
                icont1.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[0].weather[0].id >= 701 && data1.list[0].weather[0].id <= 781) {
                icont1.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[0].weather[0].id >= 801 && data1.list[0].weather[0].id <= 804) {
                icont1.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[0].weather[0].id >= 500 && data1.list[0].weather[0].id <= 531) || (data1.list[0].weather[0].id >= 300 && data1.list[0].weather[0].id <= 321)) {
                icont1.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            if (data1.list[1].weather[0].id == 800) {
                icont2.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[1].weather[0].id >= 200 && data1.list[1].weather[0].id <= 232) {
                icont2.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[1].weather[0].id >= 600 && data1.list[1].weather[0].id <= 622) {
                icont2.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[1].weather[0].id >= 701 && data1.list[1].weather[0].id <= 781) {
                icont2.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[1].weather[0].id >= 801 && data1.list[1].weather[0].id <= 804) {
                icont2.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[1].weather[0].id >= 500 && data1.list[1].weather[0].id <= 531) || (data1.list[1].weather[0].id >= 300 && data1.list[1].weather[0].id <= 321)) {
                icont2.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            if (data1.list[2].weather[0].id == 800) {
                icont3.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[2].weather[0].id >= 200 && data1.list[2].weather[0].id <= 232) {
                icont3.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[2].weather[0].id >= 600 && data1.list[2].weather[0].id <= 622) {
                icont3.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[2].weather[0].id >= 701 && data1.list[2].weather[0].id <= 781) {
                icont3.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[2].weather[0].id >= 801 && data1.list[2].weather[0].id <= 804) {
                icont3.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[2].weather[0].id >= 500 && data1.list[2].weather[0].id <= 531) || (data1.list[2].weather[0].id >= 300 && data1.list[2].weather[0].id <= 321)) {
                icont3.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            if (data1.list[3].weather[0].id == 800) {
                icont4.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[3].weather[0].id >= 200 && data1.list[3].weather[0].id <= 232) {
                icont4.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[3].weather[0].id >= 600 && data1.list[3].weather[0].id <= 622) {
                icont4.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[3].weather[0].id >= 701 && data1.list[3].weather[0].id <= 781) {
                icont4.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[3].weather[0].id >= 801 && data1.list[3].weather[0].id <= 804) {
                icont4.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[3].weather[0].id >= 500 && data1.list[3].weather[0].id <= 531) || (data1.list[3].weather[0].id >= 300 && data1.list[3].weather[0].id <= 321)) {
                icont4.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            if (data1.list[4].weather[0].id == 800) {
                icont5.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            } else if (data1.list[4].weather[0].id >= 200 && data1.list[4].weather[0].id <= 232) {
                icont5.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (data1.list[4].weather[0].id >= 600 && data1.list[4].weather[0].id <= 622) {
                icont5.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (data1.list[4].weather[0].id >= 701 && data1.list[4].weather[0].id <= 781) {
                icont5.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            } else if (data1.list[4].weather[0].id >= 801 && data1.list[4].weather[0].id <= 804) {
                icont5.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            } else if ((data1.list[4].weather[0].id >= 500 && data1.list[4].weather[0].id <= 531) || (data1.list[4].weather[0].id >= 300 && data1.list[4].weather[0].id <= 321)) {
                icont5.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }


            let hour1 = data1.list[0].dt_txt
            let hourt1 = hour1.toString().split(" ")[1]

            let hour2 = data1.list[1].dt_txt
            let hourt2 = hour2.toString().split(" ")[1]

            let hour3 = data1.list[2].dt_txt
            let hourt3 = hour3.toString().split(" ")[1]

            let hour4 = data1.list[3].dt_txt
            let hourt4 = hour4.toString().split(" ")[1]

            let hour5 = data1.list[4].dt_txt
            let hourt5 = hour5.toString().split(" ")[1]

            document.getElementById("hour1").innerHTML = hourt1
            document.getElementById("hour2").innerHTML = hourt2
            document.getElementById("hour3").innerHTML = hourt3
            document.getElementById("hour4").innerHTML = hourt4
            document.getElementById("hour5").innerHTML = hourt5

            search.value = ""

        }
    }



})