import React, { useState, useEffect } from 'react';

const Bton = ({ steps }) => {
  const [buttonCount, setButtonCount] = useState(0);
  const [currentButtonIndex, setCurrentButtonIndex] = useState(-1);
  const [isAutoLoopActive, setIsAutoLoopActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isAutoLoopActive) {
      timer = setInterval(() => {
        setCurrentButtonIndex((prevIndex) => (prevIndex + 1) % buttonCount);
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [isAutoLoopActive, buttonCount]);
  const handleStartClick = () => {
    setIsAutoLoopActive((prevAutoLoop) => !prevAutoLoop);
    if (!isAutoLoopActive) {
      setButtonCount(1);
      setCurrentButtonIndex(0);
    } else {
      setButtonCount(0);
      setCurrentButtonIndex(-1);
    }
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
      }, 3000);
    }

    return () => clearTimeout(newButtonTimer);
  }, [isAutoLoopActive, buttonCount, steps.length]);

  return (
    <>
      <div className="button">
        <button className={`${isAutoLoopActive ? 'active button-29 ' : ' button-29'}`} onClick={handleStartClick}>
          {isAutoLoopActive ? 'Stop' : 'Start'}
        </button>
      </div>
      <div className="btn-container">
        {[...Array(buttonCount)].map((_, index) => (
          <div key={index} className="mb-2">
            <button
              key={index} style={{ width: "100%", margin: "10px", padding: "5px" }}
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
