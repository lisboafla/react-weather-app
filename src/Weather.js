import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState ({ready:false});
    const [city, setCtity] = useState(props.defaultCity);

    function handleResponse (response){ 
        console.log(response.data);
       setWeatherData({
           ready:true,
           description: response.data.weather[0].description,
           icon:  response.data.weather[0].icon, 
           temperature:response.data.main.temp,
           humidity: response.data.main.humidity,
           wind: response.data.wind.speed,
           city: response.data.name,
           date: new Date(response.data.dt*1000),
            });
      
    }

    function search (){ 
        //city
         const apiKey = "4fe8408cacda390dca3383d94a514346";
          let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

        }

    function handleSubmit(event) {  
        event.preventDefault();
       search ();
     }

function handleCityChange(event){ 
    setCtity (event.target.value);

      }

    if (weatherData.ready) {  
         return (
        <div className = "Weather"> 
        <form onSubmit= { handleSubmit}> 
    
            <div className="row">
            <div className= "col-9">
            <input type = "search"
             placeholder= "Search for a city..." 
            className= "form-control"
            autoFocus= "on"
            onChange ={ handleCityChange}
            />
            </div>
            <div className= "col-3">
            < input type= "submit" value= "search" className= "btn btn-primary w-100" />
            </div>
            </div>
         </form>
               <WeatherInfo data ={ weatherData } />
            <WeatherForecast />
        </div>
    );

     } else { 
 search();

    return "Loading...";

      }
     }