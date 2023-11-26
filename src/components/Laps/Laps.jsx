import React, { useState, useEffect } from "react";
import { findExtremes } from "../../utils/lapUtils";
import Time from "../Time/Time";

const Laps = ({laps = []}) => {
  const [extremes, setExtremes] = useState({});

  useEffect(()=>{
    setExtremes(findExtremes(laps));
  }, [laps]);

  return (
    <ul className='laps'>
      {laps.map((item, index, arr) =>
        <li className={`laps__item${index === extremes.worst ? ' laps__item--worst' : ''}${index === extremes.best ? ' laps__item--best' : ''}`}>
          <p>{`Lap ${arr.length - index}`}</p>
          <Time key={index} timeValue={item.lapTime}/>      
        </li>
      )}
    </ul> 
  );
}

export default Laps