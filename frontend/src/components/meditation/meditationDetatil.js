import React from 'react';
import { useParams } from 'react-router-dom';
import { meditationTypes } from './meditationData';
import ReactPlayer from 'react-player';
import './Navbar.css'; // Import the custom CSS file
import Timer from './timer';

const MeditationDetails = () => {
  const { id } = useParams();
  const meditation = meditationTypes.find((meditation) => meditation.id === id);

  if (!meditation) {
    return <div>Invalid Meditation ID</div>;
  }

  return (
    <div className="meditation-details">
      <h2 className="title">{meditation.name}</h2>
<Timer></Timer>      <div className="video-container">
        <div className="react-player-wrapper">
          <ReactPlayer
            url={meditation.videoUrl}
            controls
            light
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </div>

      <div className="description">
        <p>{meditation.description}</p>
      </div>

      <div className="row">
        <div className="column">
          <div className="section">
            <h3>Steps to Follow</h3>
            <ol>
              {meditation.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="section">
            <h3>Benefits of Meditation</h3>
            <ul>
              {meditation.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationDetails;
