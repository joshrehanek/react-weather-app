import React from "react"
import "../src/styles.css";

const apiKey = {
  key: "1236caef6b9134318c4caad26620bb42",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function App() {
  return (
    <div className="App">
      <main>
        <div className="search-area">
          <input type="text" className="search-bar" placeholder="City" />
        </div>
      </main>
    </div>
  );
}

