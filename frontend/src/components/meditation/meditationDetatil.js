import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { meditationTypes } from "./meditationData";
import ReactPlayer from "react-player";
import "./Navbar.css"; // Import the custom CSS file
import Timer from "./timer";

const MeditationDetails = () => {
  const [showSteps, setShowSteps] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showProblems, setShowProblems] = useState(false);
  const [highlightedStep, setHighlightedStep] = useState(null); // Track the currently highlighted step
  const { id } = useParams();
  const meditation = meditationTypes.find((meditation) => meditation.id === id);

  useEffect(() => {
    let intervalId = null;

    const highlightNextStep = () => {
      setHighlightedStep((prevStep) => {
        const nextStep = prevStep === null ? 0 : prevStep + 1;
        if (nextStep < meditation.steps.length) {
          return nextStep;
        } else {
          clearInterval(intervalId); // Stop the interval when all steps are highlighted
          return null;
        }
      });
    };

    if (highlightedStep === null && showSteps) {
      intervalId = setInterval(highlightNextStep, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [highlightedStep, meditation.steps.length, showSteps]);

  const toggleSteps = () => {
    setShowSteps((prevShowSteps) => !prevShowSteps);
    setHighlightedStep(null); // Reset the highlighted step when showing/hiding steps
  };

  const toggleBenefits = () => {
    setShowBenefits((prevShowBenefits) => !prevShowBenefits);
  };

  const toggleProblems = () => {
    setShowProblems((prevShowProblems) => !prevShowProblems);
  };

  if (!meditation) {
    return <div>Invalid Meditation ID</div>;
  }

  const { steps, benefits, problems } = meditation;

  return (
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
      </div></div>
      <div className="row blur">
        <div className="col-md-6">
          <div className="section steps-section">
            <button
              className={`btn btn-warning ${showSteps ? "focused" : ""}`}
              onClick={toggleSteps}
            >
              Steps to Follow
              {showSteps ? "Hide Steps" : "Show Steps"}
            </button>
            {showSteps && (
              <div className="navbar-items">
                <ol className="step-list">
                  {steps.map((step, index) => (
                    <li
                      className={`step-item ${
                        highlightedStep === index ? "highlighted" : ""
                      }`}
                      key={index}
                    >
                      <button className=" btn-sm button-li">{step}</button>
                    </li>
                  ))}
                </ol>
              </div>
            )}
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
                      <button className="benefit- btn-sm button-li">
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
                      <button className="benefit- btn-sm button-li">
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
  );
};

export default MeditationDetails;
