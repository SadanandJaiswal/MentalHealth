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
          <div style={{ fontFamily: "Roboto Slab ",color:"black" }} className="col-md-4 title">{meditation.name}</div>
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
      </div>

      <div className="card-1 detail d-flex justify-content-center">
        <div className="d-flex">
          <div
            className="card  justify-content-center"
            style={{ width: "100%", margin: "10px", padding: "5px" }}
          >
            <div className="card-body text-center">
              <div className="section steps-section">
                <Bton steps={meditation.steps} />
              </div>
            </div>
          </div>

          <div
            className="card justify-content-center"
            style={{ width: "100%", margin: "10px", padding: "5px" }}
          >
            <div className="card-body d-flex flex-column align-items-center">
              <div className="head">
                <button
                  className={`btn  button-29 ${showBenefits ? "focused" : "  button-29"}`}
                  onClick={toggleBenefits}
                >
                  {showBenefits ? "Hide Benefits" : " Benefits"}
                </button>
              </div>
              <div className="section">
                {showBenefits && (
                  <div className="benefits-list">
                    {benefits.map((benefit, index) => (
                      <button
                        className="btn btn-sm button-li black"
                        key={index}
                        style={{
                          width: "100%",
                          margin: "10px",
                          padding: "5px",
                        }}
                      >
                        {benefit}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className="card justify-content-center"
            style={{ width: "100%", margin: "10px", padding: "5px" }}
          >
             <div className="card-body d-flex flex-column align-items-center">
              <div className="head">
                <button
                  className={`btn  button-29 ${showProblems ? "focused" :  "button-29 "}`}
                  onClick={toggleProblems}
                  style={{ width: "100%", margin: "10px", padding: "5px" }}
                >
                  {showProblems ? "Hide Problems" : " Problems"}
                </button>
              </div>
              {showProblems && (
                <div className="navbar-items">
                  {problems.map((problem, index) => (
                    <button
                      className="btn btn-sm button-li black"
                      key={index}
                      style={{ width: "100%", margin: "10px", padding: "5px" }}
                    >
                      {problem}
                    </button>
                  ))}
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
