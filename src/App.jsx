import React, { useState } from "react";
import Laps from "./components/Laps/Laps";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import { addLapTimeToList } from "./utils/lapUtils";
import './styles/index.scss'

function App() {
  const [laps, setLaps] = useState([]);

  const addLap = (value) => setLaps(addLapTimeToList(laps, value));
  const clearLaps = () =>  setLaps([]);

  return (
    <div className="App">
      <Stopwatch addLap={addLap} clearLaps={clearLaps}/>
      <Laps laps={laps}/>
    </div>
  );
}

export default App;
