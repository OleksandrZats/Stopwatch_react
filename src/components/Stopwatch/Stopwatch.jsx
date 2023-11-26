import React, { useState, useEffect } from "react";
import Time from "../Time/Time";

const Stopwatch = ({
  addLap = () => {},
  clearLaps = () => {},
}) => {
  const [time, setTime] = useState(0);
  const [isStopwatchRun, setStopwatchRun] = useState(false);
  
  useEffect(() => {
    if(!isStopwatchRun) return;

    const timeout = setTimeout(() => setTime(time + 10), 10);
    
    return () => clearTimeout(timeout);
  }, [time, isStopwatchRun]);

  const fullStop = () => {
    setTime(0);
    clearLaps();
  };


  return (
    <div className="stopwatch">
      <Time timeValue={time} />
      <div className="stopwatch__control">
        {isStopwatchRun ?
          <button 
            className="stopwatch__button"
            onClick={() => addLap(time)}
          >
            Lap
          </button> :
          <button
            className = "stopwatch__button"
            onClick={fullStop}
          >
            Zerro
          </button>
        }
        <button
          className = {`stopwatch__button stopwatch__button${isStopwatchRun?"--stop":"--start"}`} 
          onClick={() => setStopwatchRun(!isStopwatchRun)}
        >
          {isStopwatchRun ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default Stopwatch