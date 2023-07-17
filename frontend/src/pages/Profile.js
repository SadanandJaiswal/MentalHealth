import PropTypes from "prop-types";
import React, { Component } from "react";
import './profile.css';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const Profile= () => {

  const [toggleUpdate,setToggleUpdate] = useState(false);
  const [updateData,setUpdateData] = useState({})

  let userData = Cookies.get('userData');
  let token = Cookies.get('token');

  const navigate = useNavigate();

  useEffect(()=>{
    if(!userData)
    {
      navigate('/login');
    }
  },[])

  const handelToggle = ()=>{
    setToggleUpdate(!toggleUpdate);
    // alert('toggle is ', toggleUpdate);
  }
    
    if(userData)
    {
      userData = JSON.parse(userData);
      console.log('name is ', userData.user.name);
    }


    const updateProfile=()=>{
      if(updateData.updatedName || updateData.updatedEmail)
      {
        axios.put('/me/update ',{
          name:updateData.updatedName,
          email:updateData.updatedEmail
        })
        .then((response)=>{
          if(response.data)
          {
            Cookies.set('userData', JSON.stringify(response.data) ,  { expires: 10*86400*1000 });
            alert('Data Successfully Updated');
            setToggleUpdate(!toggleUpdate);
          }
        })
        .catch((e)=>{
          alert('Error please check the updated fields');
          console.log('error ',e);
        })
      }
      else{
        setToggleUpdate(!toggleUpdate);
      }
      console.log(updateData);
    }

    const handelUPdateData = (e)=>{
      setUpdateData({...updateData, [e.target.name]: e.target.value })
    }

  

  return (
    <div className="profile_container">
      <div className="container">
        <div className="imgbox">
          <img src="https://i.postimg.cc/1RWfYRf6/ph.jpg" alt="profile" />
        </div>
        
          {userData?toggleUpdate?
            <div className="profile">
              <div className="intro-text">
                <p class="details" style={{color:"black",fontSize:"20"}}><i><b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b></i></p>
              </div>
              <div className="profileField">
                <h4>Name </h4>
                <input type="text" onChange={handelUPdateData} name="updatedName" id="updatedName"/>
              </div>
              <div className="profileField">
                <h4>Email </h4>
                <input type="text" onChange={handelUPdateData} name="updatedEmail" id="updatedEmail"/>
              </div>
              <div className="updateBtn" onClick={updateProfile}>
                Update Changes
              </div>
            </div>
            :
            <div className="profile">

              <div className="intro-text">
                <h3>Hi {userData.user.name},</h3>
                <p class="details" style={{color:"black",fontSize:"20"}}><i><b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b></i></p>
              </div>

              <div className="profileField">
                <h4>Role:</h4>
                <h4>{userData.user.role}</h4>
              </div>

              <div className="profileField">
                <h4>Name:</h4>
                <h4>{userData.user.name}</h4>
              </div>

              <div className="profileField">
                <h4>Email:</h4>
                <h4>{userData.user.email}</h4>
              </div>

              <div className="updateBtn" onClick={handelToggle}>
                Update Profile
              </div>
              
            </div>
            
          :
            <div className="intro-text">
              <p class="details" style={{color:"black",fontSize:"20"}}><i><b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b></i></p>
            </div>
          }
          
        
      
        {/* <div id="bh"className="btn-group">
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
        </div> */}
      </div>
    </div>
  );
};

export default Profile;


// <---------------------------------------------------------->


// import React, { useState, useEffect } from "react";
// import './profile.css';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const Profile = () => {
//   const userName = Cookies.get('userName');
//   let userData = Cookies.get('userData');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const AuthenticatedRoute = () => {
//       const token = Cookies.get('token');
//       if (!token) {
//         console.log('Please login to continue');
//         navigate('/login');
//         // window.location.href='/login';
//       } else {
//         console.log('User is authenticated');
//       }
//     }

//     AuthenticatedRoute();
//   }, [navigate]);

//   if (userData) {
//     userData = JSON.parse(userData);
//     console.log('Name is ', userData.user.name);
//     console.log('Email is ', userData.user.email);
//     console.log('ID is ', userData.user._id);
//     console.log('Role is ', userData.user.role);
//   }

//   return (
//     <div className="container">
//       <div className="imgbox">
//         <img src="https://i.postimg.cc/1RWfYRf6/ph.jpg" alt="profile" />
//       </div>

//       {userData ? (
//         <div className="intro-text">
//           <h1>{userName}</h1>
//           <p className="details" style={{ color: "black", fontSize: "20" }}>
//             <i>
//               <b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b>
//               <br />
//               Please feel free to contact me at : {userData.user.email}
//             </i>
//             <br />
//             Role: {userData.user.role}
//           </p>
//         </div>
//       ) : (
//         <div className="intro-text">
//           <p className="details" style={{ color: "black", fontSize: "20" }}>
//             <i>
//               <b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b>
//             </i>
//           </p>
//         </div>
//       )}

//       <div id="bh" className="btn-group">
//         <button id="bh" type="button" style={{ backgroundColor: "black", color: "white" }}>Contact Us</button>
//       </div>
//       <div className="social-links">
//         <button>
//           <i id="bh" className="fab fa-facebook-f"></i>
//         </button>
//         <button>
//           <i id="bh" className="fab fa-twitter"></i>
//         </button>
//         <button>
//           <i id="bh" className="fab fa-pinterest"></i>
//         </button>
//         <button>
//           <i id="bh" className="fab fa-instagram"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// <----------------------------------------------------------->



// import React, { useState, useEffect } from "react";
// import './profile.css';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const Profile = () => {
//   const userName = Cookies.get('userName');
//   let userData = Cookies.get('userData');

//   const navigate = useNavigate();

 
//   // if (!userData) {
//   //   navigate('/login');
//   //   return null; // Redirect the user to the login page and exit the component rendering
//   // }

//   if(userData)
//   {
//       userData = JSON.parse(userData);
//       console.log('Name is ', userData.user.name);
//       console.log('Email is ', userData.user.email);
//       console.log('ID is ', userData.user._id);
//       console.log('Role is ', userData.user.role);
//   }

//   return (
//     <div className="container">
//       <div className="imgbox">
//         <img src="https://i.postimg.cc/1RWfYRf6/ph.jpg" alt="profile" />
//       </div>

//       <div className="intro-text">
//         <h1>{userName}</h1>
//         <p className="details" style={{ color: "black", fontSize: "20" }}>
//           <i>
//             <b>" Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. "</b>
//             <br />
//             Please feel free to contact me at : {userData.user.email}
//           </i>
//           <br />
//           Role: {userData.user.role}
//         </p>
//       </div>

//       <div id="bh" className="btn-group">
//         <button id="bh" type="button" style={{ backgroundColor: "black", color: "white" }}>Contact Us</button>
//       </div>
//       <div className="social-links">
//         <button>
//           <i id="bh" className="fab fa-facebook-f"></i>
//         </button>
//         <button>
//           <i id="bh" className="fab fa-twitter"></i>
//         </button>
//         <button>
//           <i id="bh" className="fab fa-pinterest"></i>
//         </button>
//         <button>
//           <i id="bh" className="fab fa-instagram"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
