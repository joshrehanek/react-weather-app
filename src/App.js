//parts of this app were taken from the following then mutated for my own nefarious purposes: https://github.com/TylerPottsDev/weather-react
//
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

  // search variable for API call triggered on "Enter" key press (line 61)
  const search = evt => {
    if (evt.key === "Enter") {
      //fetch request to openweather api using apiKey object key's as well a useState 'query' value
      fetch(`${apiKey.base}weather?q=${query}&units=imperial&APPID=${apiKey.key}`)
      // then take the response from the api call and convert it to json
        .then(res => res.json())
        // then take the result from that conversion set the query back to a blank string and set the weather to the result of the converted api call
        .then(result => {
          setQuery("");
          setWeather(result);
          console.log(result);
        })
    }
  }

  //this function handles our date
  const handleDate = (d) => {
    // array of months
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // arrya of day's of the week
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // get day of the week
    let day = days[d.getDay()];
    // get date
    let date = d.getDate();
    //get month
    let month = months[d.getMonth()];
    //get year
    let year = d.getFullYear();

    //return previous variables using a template literal to display
    return `${day} ${date} ${month} ${year}`
  }

  return (
    // ternary operator to change the App background based on the weather
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
        {/* this search area contains our search function that uses setQuery and sets it to the city entered (e.target.value) */}
        <div className="search-area">
          <input type="text" className="search-bar" placeholder="City" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
        </div>
        {/* if weather.main is not "undefined" then/// */}
        {(typeof weather.main != "undefined") ? (  
          //info section to house our weather data we want to display
          <div className="info">
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

