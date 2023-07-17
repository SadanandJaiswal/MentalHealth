import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { meditationTypes } from "./meditationData";
import "./Navbar.css";

const MeditationCard = () => {
  const categories = [
    ...new Set(meditationTypes.map((meditation) => meditation.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
  };
  const playerStyle = {
    position: "absolute",
    inset: "0px",
    boxSizing: "border-box",
    padding: "0px",
    border: "none",
    margin: "auto",
    display: "block",
    width: "0px",
    height: "0px",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <div className="navbar-container">
        <div className="col-12">
          <ul className="nav nav-pills justify-content-center mb-4">
            <li className="nav-item">
              <button
                className={`${!selectedCategory ? "active button-85" : "button-64"}`}
                onClick={handleAllClick}
              >
                All
              </button>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <button 
                  className={`${selectedCategory === category ? "active button-85" : "button-64"}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main mt-4">
        <div className="mrow row-lg-4">
          {meditationTypes
            .filter((meditation) =>
              selectedCategory ? meditation.category === selectedCategory : true
            )
            .map((meditation) => (
              <div className="col-md-4 col-lg-4 col-sm-4" key={meditation.id}>
                <Link to={`/meditation/${meditation.id}`} className="card-link">
                  <div className="card">
                  <div className="video-container-card">
                      <ReactPlayer
                        url={meditation.videoUrl}
                        controls={true}
                        light={true}
                        width="100%"
                        height="100%"
                        style={playerStyle}
                        className="react-player-wrapper-card"
                      />
                    </div>
                    <div
                      className="card-body"
                      style={{color: "azure", fontFamily: "Lumanosimo" }}
                    >
                      {meditation.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MeditationCard;
