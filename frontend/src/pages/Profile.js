import PropTypes from "prop-types";
import React, { Component } from "react";
import './profile.css';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

const Profile= () => {

  const userName = Cookies.get('userName');
  let userData = Cookies.get('userData');

  const navigate = useNavigate();

  const AuthenticatedRoute  = () =>{
    const token = Cookies.get('token');

    if(!token)
    {
        console.log('please login to continue');
        navigate('/login');
        // window.location.href='/login';
    }
    else{
      console.log('user is authenticated')
    }
  }

  // useEffect(()=>{
  //   AuthenticatedRoute();
  // },[])


  if(userData)
  {
    userData = JSON.parse(userData);
    console.log('name is ', userData.user.name);
    console.log('email is ', userData.user.email);
    console.log('id is ', userData.user._id);
    console.log('role is ', userData.user.role);
  }
  

  return (
    <div className="container">
      <div className="imgbox">
        <img src="https://i.postimg.cc/1RWfYRf6/ph.jpg" alt="profile" />
      </div>
      
        {userData?
          <div className="intro-text">
            <h1>{userName}</h1>
            <p class="details" style={{color:"black",fontSize:"20"}}><i><b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b>
            <br/>
            Please feel free to contact me at : {userData.user.email}</i>
            <br />Role: {userData.user.role}</p>
          </div>
        :
          <div className="intro-text">
            <p class="details" style={{color:"black",fontSize:"20"}}><i><b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b></i></p>
          </div>
        }
        
       
     
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
