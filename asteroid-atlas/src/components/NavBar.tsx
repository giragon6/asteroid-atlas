import React from "react";
import "../styles/navBar.css";

const NavBar: React.FC = () => {
  return (
    <div className="nav">
      <ul>
        <li className="home">
          <a href="https://asteroid-atlas-map.glitch.me/home.html">
            <i className="fa-solid fa-earth-americas"></i>
            <span>Home</span>
          </a>
        </li>
        <li className="skibidy">
          <a href="
https://asteroid-atlas.vercel.app/
">
            <i className="fa-solid fa-stopwatch"></i>
            <span>Countdown</span>
          </a>
        </li>
        <li className="lessons">
          <a href="https://asteriodcollisions.glitch.me/">
            <i className="fa-solid fa-meteor"></i>
            <span>Collision</span>
          </a>
        </li>
        <li className="practice">
          <a href="https://asteroid-atlas-map.glitch.me/">
            <i className="fa-solid fa-map-location-dot"></i>
            <span>Map</span>
          </a>
        </li>
        <li className="practice">
          <a href="https://atlasforum.glitch.me/">
           <i className="fa-solid fa-users"></i>
            <span>Forum</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
