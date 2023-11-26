import React from "react";
import { formatTime } from "../../utils/timeUtils";

const Time = ({timeValue = 0}) => {
  return <p className="time">{formatTime(timeValue)}</p>
}

export default Time