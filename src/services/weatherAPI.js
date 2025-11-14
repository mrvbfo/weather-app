const BASE = "https://api.openweathermap.org/data/2.5/weather";

export const getCurrentWeather = async (city) => {
    try{
        const url = `${BASE}?q=${encodeURIComponent(city)}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {

        if (response.status === 404) {
            throw new Error(`"${city}" could not be found. Please verify the city name and try again.`);
        } else if (response.status === 401) {
            throw new Error(`Invalid API key`);
        } else {
            throw new Error(`Weather service is temporarily unavailable (status: ${response.status})`);
        }
    }

      const json = await response.json();

      const cityData = {
        id: json.id,
        name: json.name,
        country: json.sys?.country,
        temp: json.main?.temp,
        feels_like: json.main?.feels_like,
        humidity: json.main?.humidity,
        wind_speed: json.wind?.speed,
        weather_main: json.weather?.[0]?.main,
      };

      return cityData; 

    } catch (error) {
        if (error instanceof TypeError && error.message.includes("fetch")){
            throw new Error(`Network Error, please check your internet connection`);
        }
      throw error
    }
   
}