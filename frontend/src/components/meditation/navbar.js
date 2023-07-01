import React from 'react';
import './Navbar.css'; // Import the CSS file for the component

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#">Sleep</a></li>
        <li><a href="#">Anxiety</a></li>
        <li><a href="#">Beginners</a></li>
        <li><a href="#">Stress</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Self-Care</a></li>
        <li><a href="#">With Soundscapes</a></li>
        {/* <li><a href="#">Inner Peace</a></li>
        <li><a href="#">Focus</a></li>
        <li><a href="#">Emotions</a></li>
        <li><a href="#">Less Guidance</a></li>
        <li><a href="#">Relationships</a></li>
        <li><a href="#">Personal Growth</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">By Guest Instructors</a></li>
        <li><a href="#">Relieve Anxiety with Mindfulness</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
