import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleTimerClick = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleResetClick = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="timer-container">
      <div className="timer" onClick={handleTimerClick}>
        <div className="timer-content">
          <h1>{formatTime(seconds)}</h1>
        </div>
      </div>
      <div className="button-container">
        <button className="reset-button" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
