import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App"> 
    <div className = "container">
    
     < Weather defaultCity= "New York" />
        <footer>
          This project was coded by Flavia Lisboa and is {" "}
      
        <a
          href="https://github.com/lisboafla/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
         and{" "}
          <a
            href="https://focused-swanson-398988.netlify.app//"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
     </footer>
    </div>
    </div>
    
  );
}

export default App;
