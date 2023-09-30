import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [Mseconds, setMseconds] = useState(0);
  const [stop, setStop] = useState(true);

  const onStart = () => {
    setStop(false);
  };

  const onStop = () => {
    setStop(true);
  };

  const onReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMseconds(0);
  };

  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (minutes > 59) {
          setHours(hours + 1);
          setMinutes(0);
          clearInterval(interval);
        }
        if (seconds > 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
          clearInterval(interval);
        }
        if (Mseconds > 999) {
          setSeconds(seconds + 1);
          setMseconds(0);
          clearInterval(interval);
        }
        if (Mseconds <= 999) {
          setMseconds(Mseconds + 1);
        }
         
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div id="stopwatch">
      <div id="watch">
        <div id="display">
          <h2>{hours} </h2>
          <h2>{minutes}</h2>
          <h2>{seconds}</h2>
          <h2>{Mseconds} </h2>
        </div>
      </div>
      <div id="buttons">
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
