const root = document.querySelector("#root");

const getWeatherData = async (city) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=753b22597fa744bebd0133938232205&q=${city}`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("location").textContent = data.location.name;
      document.getElementById("country").textContent = data.location.country;
      document.getElementById(
        "temperature"
      ).textContent = `${data.current.temp_c}°C`;
      document.getElementById("condition").textContent =
        data.current.condition.text;
      document.getElementById("date__time").textContent =
        data.location.localtime;
    });
};

document.getElementById("srcBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  getWeatherData(city);
});
