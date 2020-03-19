import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Button, Fade } from "reactstrap";
import styled from "styled-components";

import Image from "./Components/Image.js";
import Card from "./Components/Card.js";

// const data = require('./dummyData.json')

function App() {
  const [apiData, setApiData] = useState({});
  const [fade, setFade] = useState(false);

  const toggle = () => setFade(!fade);

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

  // styled components
  const Background = styled.div`
    background-color: black;
  `;
  const ButtonWrapper = styled.div`
    margin: 3%;
  `;
  const Title = styled.h1`
    color: white;
  `;


  return (
    <div className="App">
      <Background>
        <Title>Astronomy Picture of the Day! Courtesy of NASA.</Title>
        <ButtonWrapper><Button color='primary' onClick={toggle}>Illuminate the night</Button></ButtonWrapper>
          <Fade in={fade}>
            <Image imageData={apiData.url} data={apiData}/>
            <Card cardTitle={apiData.title} cardDesc={apiData.explanation}/>
          </Fade>
      </Background>
    </div>
  );
}

export default App;
