import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { meditationTypes } from "./meditationData";

const MeditationCard = () => {
  const [showSteps, setShowSteps] = useState([]);
  const [showBenefits, setShowBenefits] = useState([]);
  const [showProblems, setShowProblems] = useState([]);

  const toggleSteps = (index) => {
    setShowSteps((prevShowSteps) => {
      const updatedShowSteps = [...prevShowSteps];
      updatedShowSteps[index] = !prevShowSteps[index];
      return updatedShowSteps;
    });
  };

  const toggleBenefits = (index) => {
    setShowBenefits((prevShowBenefits) => {
      const updatedShowBenefits = [...prevShowBenefits];
      updatedShowBenefits[index] = !prevShowBenefits[index];
      return updatedShowBenefits;
    });
  };

  const toggleProblems = (index) => {
    setShowProblems((prevShowProblems) => {
      const updatedShowProblems = [...prevShowProblems];
      updatedShowProblems[index] = !prevShowProblems[index];
      return updatedShowProblems;
    });
  };

  return (
    <div className="meditation-card">
      {meditationTypes.map((meditation, index) => (
       
          <Link to={`/meditation/${meditation.id}`}>
             <div className="card" key={meditation.id}>
            <div className="video-container">
              <ReactPlayer
                url={meditation.videoUrl}
                controls={true}
                light={true}
                width="100%"
                height="100%"
                className="react-player-wrapper"
              />
            </div>  </div>
            <h2 className="card-heading">{meditation.name}</h2>
          </Link>
      
      ))}
    </div>
  );
};

export default MeditationCard;
