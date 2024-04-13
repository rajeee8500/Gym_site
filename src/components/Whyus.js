import React from "react";
import workouts from "../assests/workouts.jpg"; // Ensure correct spelling in the import path
import { Element } from "react-scroll";

function Whyus() {
  return (
    <Element name="reasons" className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-text">
          <h1 className="headings">Why Us</h1>
          <p>
            At our gym, we believe Crossfitters come in all shapes and sizes, we
            are all on a journey towards our own personal best health and
            fitness levels. A journey that makes us better as athletes, friends,
            and people. Our facility is unlike any gym you’ve been to before. We
            pride ourselves not only in providing world-class CrossFit training,
            but we also believe in creating a motivating and dynamic environment
            filled with community spirit dedicated to human evolution, one
            workout at a time. Come in for a free trial class, lose some body
            fat, gain some friends, and get fit for life!
          </p>
        </div>
        <div className="whyus-img">
          <img src={workouts} alt="Workouts in progress at the gym" /> //
          Improved alt text for better accessibility
        </div>
      </div>
    </Element>
  );
}

export default Whyus;
