import React from "react";
 import FormatteDate from "./FormatteDate";

export default function WeatherInfo(props)
{
return (

    <div className= "WeatherInfo">
 <h1> {props.data.city}</h1>
        <ul> 
            <li> <FormatteDate date= {props.data.date} /> </li>
             <li className= "text-capitalize">{props.data.description}</li>
        
        </ul>
        <div className= "Row-mt-3">
       <div className= " col-6">
           <div className = "clearfix">
           <img
           src=  { props.data.iconUrl } 
           alt= { props.data.description } 
           className= "float-left"
            />

        
            <span className ="temperature">  {Math.round (props.data.temperature)}</span>
             <span className ="units"> °C </span>
          
         </div>
       </div>
       <div className =" col-6">
           <ul>
           <li> Precipitation :15%</li>
             <li> Humidity: {props.data.humidity}%</li>
             <li> Wind: {props.data.wind} km/h</li>

           </ul>

       </div>
        </div>
        </div>
        );

} 