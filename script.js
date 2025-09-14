

// Твой API-ключ (замени на свой после регистрации на openweathermap.org)
const apiKey = "bfb992e0216e173b11f02b9fe263f29a";


// Элементы на странице
const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherDiv = document.getElementById("weather");

// Функция получения погоды
async function getWeather(city) {
  try {
    // Запрос к API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
    );

    if (!response.ok) {
      throw new Error("Город не найден 😢");
    }

    const data = await response.json();

    // Достаём нужные данные//
     const cityName = data.name;
     const temp = Math.round(data.main.temp);
     const desc = data.weather[0].description;
     const icon = data.weather[0].icon;

 // Отображаем результат 
    weatherDiv.innerHTML = `
        <h2>${cityName}</h2>
        <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png"></p>
        <p><b>${temp}°C</b></p>
        <p>${desc}</p>
      `;  } catch (error) {
        weatherDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }}

// Слушатель кнопки
searchBtn.addEventListener("click", () => {
      const city = searchBox.value.trim();
      if (city !== "") {
            getWeather(city);
      }});