import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let [appear, setAppear] = useState(false);

  function menuShow() {
    setAppear(!appear);
    console.log(appear);
  }
  function clearAppear() {
    setAppear(false);
  }
  
  
  return (
    <div className="header">

      <Link to="/" className="nav-logo text-white" onClick={clearAppear}>Logo</Link>
      <nav className={`navbar ${appear ? "max-md:block" : "max-md:hidden"}`}>
        <Link to="/" className="nav-link" onClick={clearAppear}>
          Home
        </Link>
        <Link to="/gallery" className="nav-link" onClick={clearAppear}>
          Gallery
        </Link>
        <Link to="/trainers" className="nav-link" onClick={clearAppear}>
          Trainers
        </Link>
        <Link to="/classes" className="nav-link" onClick={clearAppear}>
          Classes
        </Link>
        <Link to="/prices" className="nav-link" onClick={clearAppear}>
          Prices
        </Link>
        <Link to="/contact" className="nav-link" onClick={clearAppear}>
          Contact
        </Link>
      </nav>

      <div className="nav-btn" onClick={clearAppear}>
        <Link to="/form">Founder</Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-list menu"
        viewBox="0 0 16 16"
        onClick={menuShow}
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </div>
  );
}

export default Navbar;
