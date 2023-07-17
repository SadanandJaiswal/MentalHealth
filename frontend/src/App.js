import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import Home from "./pages/Home";
import About from "./pages/About";
import Meditaion from "./pages/Meditaion";
import Music from "./pages/Music";
import Profile from "./pages/Profile";
import Sleep from "./pages/Sleep";
import Sidebar from "./components/Sidebar";
import MentalDisorder from './pages/MentalDisorder';
import Login from "./pages/Login/index";
import Register from "./pages/Signup/index";
import Logout from "./pages/Logout/index";


// import music1 from "./components/songs/yt1s.com - Relaxing Sounds.mp3"
import Introduction from "./components/sleepComp/Introduction";
import SleepBasics from "./components/sleepComp/SleepBasics";
import Disorders from "./components/sleepComp/Disorders";
import BetterSleep from "./components/sleepComp/BetterSleep";
import Disorder from "./pages/Disorder";
import Quotes from "./pages/Quotes";
import MeditationDetails from './components/meditation/meditationDetatil'


function App() {
  return (
    <>

      <Router>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meditation" element={<Meditaion />} />
          <Route path="/meditation/:id" element={<MeditationDetails/>} />
          <Route path="/music" element={<Music />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/affirmation" element={<Quotes />} />
          <Route path="/Disorder/:disorder" element={<Disorder />} />
          <Route path='/MentalDisorder' element={<MentalDisorder/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path="/sleep/intro" element={<Introduction />} />
          <Route path="/sleep/basics" element={<SleepBasics />} />
          <Route path="/sleep/disorder" element={<Disorders />} />
          <Route path="/sleep/tips" element={<BetterSleep />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        </Sidebar>
      </Router>
      {/* <h2>Thanks for Visiting</h2> */}
    </>
  );
}

export default App;