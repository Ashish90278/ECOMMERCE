import React from "react";
import { useState, useEffect } from "react";

export const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (ms) => {
    let totalSeconds = parseInt(Math.floor(ms / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let totalDays = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);

    return `${totalDays}days : ${hours}hours : ${minutes}minutes : ${seconds}seconds`;
  };

  return <div>{getFormattedTime(time)}</div>;
};
