import React, { useState, useRef } from 'react';
import './App.css'; // Stellen Sie sicher, dass die CSS-Datei korrekt verlinkt ist

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <div className="time-display">Time: {formatTime(time)}</div>
      <div className="button-container">
        <button className="start-button" onClick={startTimer}>Start</button>
        <button className="stop-button" onClick={stopTimer}>Stop</button>
        <button className="reset-button" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
