import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../style/Home.css";
import { meditationTypes } from "../components/meditation/meditationData";
import SleepApi from "../api/SleepApi";
import disorderApi from "../api/disorderApi";
import { Link } from "react-router-dom";

function ViewMoreLink({ to }) {
  return (
    <Link to={to}>
      <div className="viewBTN">
        <button className="viewBTN">
          <div>View More</div>
        </button>
      </div>
    </Link>
  );
}

function SliderComponent({ items, viewMorePath }) {
  const [startIndex, setStartIndex] = useState(0);

  const handleShiftLeft = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const handleShiftRight = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const visibleItems = items.slice(startIndex, startIndex + 3);

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          className="button-85"
          onClick={handleShiftLeft}
          disabled={startIndex === 0}
        >
          left
        </button>
        <button
          className="button-85"
          onClick={handleShiftRight}
          disabled={startIndex + 3 >= items.length}
        >
          right
        </button>
        <ViewMoreLink to={viewMorePath} />
      </div>

      <div className="main mt-4">
        <div className="row">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-lg-4 col-sm-4" key={item.name}>
              <div
                className="card"
                style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
              >
                <div className="video-card">
                  {item.videoUrl ? (
                    <ReactPlayer
                      url={item.videoUrl}
                      controls={true}
                      light={true}
                      width="100%"
                      height="150px"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="slider-image"
                    />
                  )}
                </div>
                <h3>{item.name}</h3>
                {item.problems && (
                  <p className="slider-problems">
                    <b>Problems:</b> {item.problems}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const Home = () => {
  return (
    <>
      <div>
        <div className="btn-33">
          <Link to="/login">
            <button
              className="fixed-button button-33"
              style={{ fontSize: "13px" }}
            >
              LOGIN/SIGNUP
            </button>
          </Link>
        </div>

        <h1>Home</h1>
        <h2>Meditation</h2>
        <SliderComponent items={meditationTypes} viewMorePath="/meditation" />

        <h2>Sleep</h2>
        <SliderComponent items={SleepApi} viewMorePath="/sleep" />

        <h2>Disorders</h2>
        <SliderComponent items={disorderApi} viewMorePath="/MentalDisorder" />
      </div>
    </>
  );
};

export default Home;
