import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>123 Gym Street</p>
            <p>Exercise Town</p>
            <p>Call: (123) 456-7890</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <span role="img" aria-label="Facebook">
                  📘
                </span>{" "}
                Facebook
              </a>
              <a href="#" className="social-icon">
                <span role="img" aria-label="Twitter">
                  🐦
                </span>{" "}
                Twitter
              </a>
              <a href="#" className="social-icon">
                <span role="img" aria-label="Instagram">
                  📸
                </span>{" "}
                Instagram
              </a>
              <a href="#" className="social-icon">
                <span role="img" aria-label="YouTube">
                  ▶️
                </span>{" "}
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="footer-row">
          <p className="footer-text">
            &copy;{new Date().getFullYear()} WellnessWave - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
