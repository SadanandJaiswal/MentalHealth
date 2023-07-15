import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { meditationTypes } from "./meditationData";
import ReactPlayer from "react-player";
import Timer from "./timer";
import Bton from "./Button";

const MeditationDetails = () => {
  const [showSteps, setShowSteps] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showProblems, setShowProblems] = useState(false);
  const { id } = useParams();
  const meditation = meditationTypes.find((meditation) => meditation.id === id);

  const { steps, benefits, problems } = meditation;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [highlightedStep, setHighlightedStep] = useState(null);

  useEffect(() => {
    let intervalId = null;

    const highlightNextStep = () => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    };

    if (showSteps) {
      intervalId = setInterval(highlightNextStep, 2000);
    } else {
      setCurrentStepIndex(0);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [showSteps, steps.length]);

  const toggleSteps = () => {
    setShowSteps((prevShowSteps) => !prevShowSteps);
    setHighlightedStep(null);
  };

  const toggleBenefits = () => {
    setShowBenefits((prevShowBenefits) => !prevShowBenefits);
  };

  const toggleProblems = () => {
    setShowProblems((prevShowProblems) => !prevShowProblems);
  };

  const handleStepClick = (index) => {
    setHighlightedStep(index);
  };

  if (!meditation) {
    return <div>Invalid Meditation ID</div>;
  }

  return (
    <>
    
      <div className="meditation-details">
        <div className="row">
          <div className="col-md-4 title">{meditation.name}</div>
          <div className="col-md-4 offset-md-4 timer-container">
            <Timer />
          </div>
        </div>
        <div className="row">
          <div className="section video-container">
            <div className="embed-responsive embed-responsive-1by1">
              <ReactPlayer
                url={meditation.videoUrl}
                controls
                light
                width="100%"
                height="100%"
                className="react-player"
              />
            </div>
          </div>
        </div>
        <div className="row blur">
          <div className="col-md-6">
            <div className="section steps-section">
            <Bton steps={meditation.steps} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="section">
              <button
                className={`btn btn-light ${showBenefits ? "focused" : ""}`}
                onClick={toggleBenefits}
              >
                Benefits of Meditation
                {showBenefits ? "Hide Benefits" : "Show Benefits"}
              </button>
              {showBenefits && (
                <div className="navbar-items">
                  <ul className="benefits-list">
                    {benefits.map((benefit, index) => (
                      <li className="benefit-item" key={index}>
                        <button className="btn btn-sm button-li black">
                          {benefit}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="section">
              <button
                className={`btn btn-danger ${showProblems ? "focused" : ""}`}
                onClick={toggleProblems}
              >
                Problems Meditation Can Help Overcome
                {showProblems ? "Hide Problems" : "Show Problems"}
              </button>
              {showProblems && (
                <div className="navbar-items">
                  <ul className="problems-list">
                    {problems.map((problem, index) => (
                      <li className="problem-item" key={index}>
                        <button className="btn btn-sm button-li black">
                          {problem}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeditationDetails;
