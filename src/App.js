import "./App.css"
import Search from "./components/search/search";
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const[currentWeather,setCurrentWeather ] = useState(null);
  const[forcast, setForcast ] = useState(null);
   
  const handleOnSearchChange = (searchData) =>{
    const [lat, lon] = searchData.value.split(/[, ]+/); 

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    const forcastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    Promise.all([currentWeatherFetch,forcastFetch]).then(async(Response)=> {
      const weatherResponse = await Response[0].json();
      const forcastResponse = await Response[1].json()

      setCurrentWeather({city:searchData.label, ...weatherResponse})
      setForcast({city: searchData.label, ...forcastResponse})
    })
    .catch((err)=> console.log(err))
  }

  console.log(currentWeather);
  console.log(forcast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} /> 
      {currentWeather && <CurrentWeather data = {currentWeather}/>}   
      {forcast && <Forecast data = {forcast}/>}   
      
    </div>
  );
}

export default App;
