import React from 'react';
import '../style/Home.css'
// import axios from 'axios';
// import { useState } from 'react';
import MeditationApi from '../api/MeditationApi';
import ReactPlayer from "react-player";
import Meditation from './Meditaion';
import SleepApi from '../api/SleepApi';
import disorderApi from '../api/disorderApi';
import { Link } from 'react-router-dom';

const Home = () => {

  // const [tiralData,setData] = useState(0);

  // axios.get('/trialData')
  //   .then(response => {
  //     const data = response.data;
  //     setData(response.data);
  //     // Process the data received from the backend
  //     console.log(data);
  //     // window.confirm(data);
  //     console.log(tiralData)
  //   })
  //   .catch(error => {
  //     // Handle any errors
  //     console.error(error);
  //   });

  return (
    <div>
      <h1> Home </h1>
      <h2> Meditation </h2>
      <div className="medDiv">
        {MeditationApi.map((meditation) => (
          <div className="medCard">
              <ReactPlayer
                url={meditation.videoUrl}
                controls={true}
                light={true}
                width="100%"
                height="150px"
              />
              <h3> {meditation.name} </h3>
              <p> Problems: {meditation.problems} </p>
          </div>
          )
        )}
        <Link to='/meditation'>
          <div className="viewBTN">
            <button className='viewBTN'> <div>View More</div> </button>
          </div>
        </Link>
      </div>
      <h2> Sleep </h2>
      <div className="sleepDiv">
        {SleepApi.map((sleep) => (
          <div className="medCard">
              <img src={sleep.image} />
              <h3> {sleep.name} </h3>
              <p> Problems: {sleep.content} </p>
          </div>
          )
        )}
        <Link to='/sleep'>
          <div className="viewBTN">
            <button className='viewBTN'> <div>View More</div> </button>
          </div>
        </Link>
      </div>
      <h2> Disorders </h2>
      <div className="sleepDiv">
        {disorderApi.map((disorder, i) => i<3 ? (
          <div className="medCard">
              <img src={disorder.imageUrl} />
              <h3> {disorder.name} </h3>
              <p> {disorder.description} </p>
          </div>
          ): null
        )}
        <Link to={`/MentalDisorder`}>
          <div className="viewBTN">
            <button className='viewBTN'> <div>View More</div> </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home;