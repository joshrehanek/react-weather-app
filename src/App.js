// imports react and react-hook 'useState'
import React, { useState } from "react"
//imports css
import "../src/styles.css";

//sets up API key which contains personal key and base URL
const apiKey = {
  key: "1236caef6b9134318c4caad26620bb42",
  base: "https://api.openweathermap.org/data/2.5/"
}

//declares and exports App function 
export default function App() {

  // declare query as value and setQuery as function to maniputlate query
  const [query, setQuery] = useState("");
  //declare weather as value and setWeather as function to mainpulate weather
  const [weather, setWeather] = useState({});

  // 
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${apiKey.base}weather?q=${query}&units=imperial&APPID=${apiKey.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery("");
          setWeather(result);
          console.log(result);
        })
    }
  }

  const handleDate = (d) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className= {
      (typeof weather.main != "undefined" ) 
        ? ((weather.weather[0].main === "Clear") 
        ? 'App sunny'
        : (weather.weather[0].main === "Clouds")
        ? 'App clouds' 
        : (weather.weather[0].main === 'Rain')
        ? 'App rain'
        : (weather.weather[0].main === 'Snow')
        ? 'App snow'
        : 'App')
        : 'App'}>
      <main>
        <div className="search-area">
          <input type="text" className="search-bar" placeholder="City" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (  
          <div>
        <div className="location-area">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{handleDate(new Date())}</div>
        </div>
        <div className="weather-area">
          <div className="temp">
              {Math.round(weather.main.temp)}F
          </div>
          <div className="weather">
              {weather.weather[0].main}
          </div>
        </div>
        </div>
        ) : ("")}  
      </main>
    </div>
  );
}

