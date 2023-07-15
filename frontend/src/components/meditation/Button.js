import React, { useState, useEffect } from 'react';
import { meditationTypes } from "./meditationData";

const Bton = ({ steps }) => {
  const [buttonCount, setButtonCount] = useState(steps.length);
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const [isAutoLoopActive, setIsAutoLoopActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isAutoLoopActive) {
      timer = setInterval(() => {
        setCurrentButtonIndex((prevIndex) => (prevIndex + 1) % buttonCount);
      }, 5000);
    }

    return () => clearInterval(timer);
  }, [isAutoLoopActive, buttonCount]);

  const handleStartClick = () => {
    setIsAutoLoopActive((prevAutoLoop) => !prevAutoLoop);
  };

  useEffect(() => {
    let newButtonTimer;
    if (isAutoLoopActive) {
      newButtonTimer = setTimeout(() => {
        if (buttonCount === steps.length) {
          setCurrentButtonIndex(0);
          setButtonCount(0);
        } else {
          setCurrentButtonIndex((prevIndex) => (prevIndex + 1) % steps.length);
          setButtonCount((prevCount) => prevCount + 1);
        }
      }, 5000);
    }

    return () => clearTimeout(newButtonTimer);
  }, [isAutoLoopActive, buttonCount, steps.length]);

  return (
    <>
    <div className="button">
        <button className={` ${isAutoLoopActive ? 'active button-li ' : ' button-29'}`} onClick={handleStartClick}>
          {isAutoLoopActive ? 'Stop' : 'Steps TO Show'}
        </button>
      </div> 
      <div className="btn-container">
      {[...Array(buttonCount)].map((_, index) => (
         <div key={index} className="mb-2">
          <button
            key={index}
            className={`btn ${index === currentButtonIndex ? 'highlight' : ''} ${index === buttonCount - 1 ? 'button-85' : 'button-li'}`}
          >
            {steps[index]}
            {index === buttonCount - 1 && <span className="toggle-btn"></span>}
          </button>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Bton;
