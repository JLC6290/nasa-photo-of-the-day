import React from "react";
import "./App.css";

import Image from "./Components/Image.js";

const data = require('./dummyData.json')

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1>Astronomy Picture of the Day! Courtesy of NASA.</h1>
      <div className="imageWrapper">
        <Image props={data}/>
      </div>
    </div>
  );
}

export default App;
