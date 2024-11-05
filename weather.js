

async function getWeather() {
    try {
      const city = document.querySelector("#city").value;
      const res = await fetch(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`, {
        method: "GET",
      });
  
      if (!res.ok) {
        console.log("An error occurred while fetching the weather data.");
        return;
      }
  
      const weatherDetail = await res.json();
  
      if (weatherDetail.error) {
        alert("Invalid City Name");
        return;
      }
  
      const temperatureC = weatherDetail.current.temp_c;
      const temperatureF = weatherDetail.current.temp_f;
  
   
      document.querySelector("#temp_c").textContent = `${temperatureC}°C`;
      document.querySelector("#temp_f").textContent = `${temperatureF}°F`;
      
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
