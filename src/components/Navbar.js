import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <span>WellnessWave</span>
      </div>
      <div className="right">
        <ul className="header-menu">
          <li>
            <Link activeClass="active" to="header" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" spy={true} smooth={true}>
              Why us
            </Link>
          </li>
          <li>
            <Link to="plans" spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="testimonials" spy={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
