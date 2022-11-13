import logo from './logo.svg';
import './App.css';
import React from 'react';
import Humidity from './humidity.js';
import Temperature  from './temperature.js';
import Light from './light.js';

function App() {
  return (
    <div className="App">
      <h1> Plant Enclosure </h1>
      const 
      <h2> Humidity (%) </h2>
      <h3> current humidity here </h3>
      <button> Set target humidity </button>
      <Humidity></Humidity>
      <h2> Light Level (lx) </h2>
      <h3> current light level here </h3>
      <button> Set target light level </button>
      <Light></Light>
      <button> daylight tracking on/off </button>
      <h2> Temperature (degrees celsius) </h2>
      <button> Set target Temperature </button>
      <Temperature></Temperature>





    </div>
  );
}

export default App;
