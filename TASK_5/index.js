const apiKey = '981c980f4cf8b8242f641481943d6545';

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        let weatherInfo = document.querySelector('#weatherInfo');
        weatherInfo.style.display = "flex";

        if (data.cod === 200) {
            weatherInfo.innerHTML = `
                <div class="left">
                    <p>Weather :</p>
                    <p>Temprature : </p>
                    <p>Feels Like : </p>
                    <p>Humidity :</p>
                    <p>Pressure :</p>
                    <p>Wind Speed : </p>
                </div>
                <div class="right">
                    <p>${data.weather[0].description}</p>
                    <p>${data.main.temp}<sup>o</sup>C</p>
                    <p>${data.main.feels_like}<sup>o</sup>C</p>
                    <p>${data.main.humidity}</p>
                    <p>${data.main.pressure}</p>
                    <p>${data.wind.speed}</p>
                </div>
            `;
        } else {
            document.querySelector('#weatherInfo').innerHTML = 'Location not found';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
