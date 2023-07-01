import React from 'react';
// import './Music.css';
import Navbar from '../components/meditation/navbar';
import MeditationCard from '../components/meditation/meditationcard';


const Meditation = () => {
  return (
    <div>

      <div className="timer-container">
 <Navbar></Navbar>
      </div>
      <div className="meditation-container">
       <MeditationCard></MeditationCard>
      </div>
    </div>
  );
};

export default Meditation;
