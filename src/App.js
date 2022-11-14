import logo from './logo.svg';
import './App.css';
import React from 'react';
import Humidity from './humidity.js';
import Temperature  from './temperature.js';
import Light from './light.js';
import {useState} from 'react';

function App() {

  const [showHumid, setShowHumid] = useState(false)
  const [showLight, setShowLight] = useState(false)
  const [showTemp, setShowTemp] = useState(false)

  
  return (
    <div className="App">
      <h1> Plant Enclosure </h1>
      <h2> Humidity (%) </h2>
      <h3> current humidity here </h3>
      <button onClick={() =>setShowHumid(!showHumid)} > Set target humidity </button>
      {showHumid && <Humidity></Humidity>}


      <h2> Light Level (lx) </h2>
      <h3> current light level here </h3>
      <button onClick={() => setShowLight(!showLight)}> Set target light level </button>
      {showLight && <Light></Light>}
      <button> daylight tracking on/off </button>



      <h2> Temperature (degrees celsius) </h2>
      <button onClick={()=> setShowTemp(!showTemp)}> Set target Temperature </button>
      {showTemp && <Temperature></Temperature>}





    </div>
  );
}

export default App;
