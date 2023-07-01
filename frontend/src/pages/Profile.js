import PropTypes from "prop-types";
import React, { Component } from "react";
import './profile.css';

const Profile= () => {
  return (
    <div className="container">
      <div className="imgbox">
        <img src="https://i.postimg.cc/1RWfYRf6/ph.jpg" alt="profile" />
      </div>
      <div className="intro-text">
        <h1>Mishti</h1>
        <p class="details" style={{color:"black",fontSize:"20"}}><i>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</i></p>
      </div>
     
      <div id="bh"className="btn-group">
      <button id="bh"type="button" style={{backgroundColor:"black",color:"white"}}>Contact Us</button>
      </div>
      <div className="social-links">
        <button>
          <i id="bh"className="fab fa-facebook-f"></i>
        </button>
        <button>
          <i id="bh" className="fab fa-twitter"></i>
        </button>
        <button>
          <i id="bh"className="fab fa-pinterest"></i>
        </button>
        <button>
          <i id="bh"className="fab fa-instagram"></i>
        </button>
      </div>
    </div>
  );
};

export default Profile;
