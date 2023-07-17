import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { meditationTypes } from "./meditationData";
import "./Navbar.css";

const MeditationCard = () => {
  const categories = [
    ...new Set(meditationTypes.map((meditation) => meditation.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <><div className="fixed">
      <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
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
      </div></div>
      <div className="main mt-4">
        <div className="row row-lg-4">
          {meditationTypes
            .filter((meditation) =>
              selectedCategory ? meditation.category === selectedCategory : true
            )
            .map((meditation) => (
              <div className="col-md-4 col-lg-4 col-sm-4 mb-4" key={meditation.id}>
                <Link to={`/meditation/${meditation.id}`} className="card-link">
                  <div className="card p-3">
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
                      style={{ color: "azure", fontFamily: "Lumanosimo" }}
                    >
                      {meditation.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))
            }
        </div>
      </div>
    </>
  );
};

export default MeditationCard;
