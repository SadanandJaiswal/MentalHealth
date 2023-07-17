import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../style/Home.css";
import { meditationTypes } from "../components/meditation/meditationData";
import SleepApi from "../api/SleepApi";
import disorderApi from "../api/disorderApi";
import Cookies from 'js-cookie';
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

function SliderComponent({ items, category, viewMorePath }) {
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
      <div className="homeTitle">

          <div style={{ fontFamily: "Roboto Slab " }}>
            <h2>{category}</h2>
          </div>

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
      </div>

      {/* <div className="main mt-4"> */}
        <div className="main">
          {visibleItems.map((item) => (
            <div className="row_child" key={item.name}>
              <div
                className="home_card"
                style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
              >
                <div className="video-card">
                  {item.videoUrl ? (
                    <ReactPlayer
                      url={item.videoUrl}
                      controls={true}
                      light={true}
                      width="100%"
                      // height="150px"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="slider-image"
                    />
                  )}
                </div>
                <h3>
                  <div
                    className="nme"
                    style={{ fontFamily: "Lumanosimo" }}
                  >
                    {item.name}
                  </div>
                </h3>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}

const Home = () => {
  const [greeting, setGreeting] = useState("");
  let userData = Cookies.get('userData');


  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 3 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <>
      <div>
        {userData?
        <div className="btn-33">
          <Link to="/logout">
            <button
              className="fixed-button button-33"
              style={{ fontSize: "13px" }}
            >
              LOGOUT
            </button>
          </Link>
        </div>
        :
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
      }
        <h1 className="font-bold text-left"    style={{
              fontSize: "40px",
              color: "blue",
              fontFamily: "Lugrasimo",
            }} >
          <div
            style={{
              fontSize: "40px",
              color: "blue",
              fontFamily: "Lugrasimo",
            }}
          >
            {greeting}
          </div>
        </h1>

        {/* <h2>
          <div style={{ fontFamily: "Roboto Slab " }}>Meditation</div>
        </h2> */}
        <SliderComponent items={meditationTypes} category="Meditation" viewMorePath="/meditation" />

        {/* <h2>
          <div style={{ fontFamily: "Ubuntu " }}>Sleep</div>
        </h2> */}
        <SliderComponent items={SleepApi} category="Sleep" viewMorePath="/sleep" />

        {/* <h2>
          <div style={{ fontFamily: "Ubuntu " }}>Disorders</div>
        </h2> */}
        <SliderComponent items={disorderApi} category="Disorders" viewMorePath="/MentalDisorder" />
      </div>
    </>
  );
};

export default Home;
