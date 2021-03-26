import React, { useState }from "react"
import "../src/styles.css";

const apiKey = {
  key: "1236caef6b9134318c4caad26620bb42",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${apiKey.base}weather?q=${query}&units=metric&APPID=${apiKey.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery("");
        setWeather(result);
        console.log(result);
      })
    }
  }

  const handleDate = (d) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <main>
        <div className="search-area">
          <input type="text" className="search-bar" placeholder="City" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>
        <div className="location-area">
          <div className="location">Suva, Fiji</div>
          <div className="date">{handleDate(new Date())}</div>
        </div>
        <div className="weather-area">
          <div className="temp">
              82 F
          </div>
          <div className="weather">
              Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

