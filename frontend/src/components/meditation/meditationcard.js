import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { meditationTypes } from "./meditationData";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./Navbar.css";

const MeditationCard = () => {
  return (
    <div className="navbar-container">
      <div className="row row-lg-4">
        {meditationTypes.map((meditation) => (
          <div className="col-md-4 col-lg-4 col-sm-4" key={meditation.id}>
            <Link to={`/meditation/${meditation.id}`} className="card-link">
              <div className="card">
                <div className="video-container-card ">
                  <ReactPlayer
                    url={meditation.videoUrl}
                    controls={true}
                    light={true}
                    width="100%"
                    height="100%"
                    className="react-player-wrapper-card"
                  />
                </div>
                <div className="card-body"  style={{ fontFamily: "Roboto, sans-serif" }}>
                  
                {/* <FontAwesomeIcon icon={faPlay} className="play-icon" /> */}
                  {meditation.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MeditationCard;
