import React from "react";
import "../styles/navBar.css";

const NavBar: React.FC = () => {
  return (
    <div className="nav">
      <ul>
        <li className="home">
          <a href="https://knowyourworth.glitch.me/">
            <i className="fa-solid fa-earth-americas"></i>
            <span>Home</span>
          </a>
        </li>
        <li className="skibidy">
          <a href="https://knowyourworthrtc.glitch.me/">
            <i className="fa-solid fa-stopwatch"></i>
            <span>Countdowns</span>
          </a>
        </li>
        <li className="lessons">
          <a href="https://asteroidcollisions.glitch.me">
            <i className="fa-solid fa-meteor"></i>
            <span>Collision</span>
          </a>
        </li>
        <li className="practice">
          <a href="https://asteroid-atlas-map.glitch.me">
            <i className="fa-solid fa-map-location-dot"></i>
            <span>Map</span>
          </a>
        </li>
        <li className="contact">
          <a href="https://atlasforum.glitch.me">
            <i className="fa-solid fa-user-group"></i>
            <span>Resources</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
