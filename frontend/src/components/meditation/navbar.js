import React from 'react';
import './Navbar.css'; // Import the CSS file for the component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button className="nav-button">Sleep</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button className="nav-button">Anxiety</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button className="nav-button">Beginners</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button className="nav-button">Stress</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button className="nav-button">Work</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button className="nav-button">Self-Care</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <button className="nav-button">With Soundscapes</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
