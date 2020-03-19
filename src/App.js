import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

import Image from "./Components/Image.js";

// const data = require('./dummyData.json')

function App() {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
      console.log('Testing useEffect hook')
      axios
          .get('https://api.nasa.gov/planetary/apod?api_key=2iaajsrajJnWc691QNh8lkowg1qqi6dgMO52IGxU')
          .then(response => {
          console.log(response);
          setApiData(response.data);
          })
          .catch(error => {
              console.log('Error ' + error);
          })
  }, [])

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day! Courtesy of NASA.</h1>
      <div className="imageWrapper">
        <Image imageData={apiData.url} data={apiData}/>
      </div>
    </div>
  );
}

export default App;
