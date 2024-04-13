import React from "react";
import { Element } from "react-scroll";

function Programs() {
  return (
    <Element name="programs" className="programs-section">
      <h1 className="headings">Programs</h1>
      <div className="programs-container">
        <div className="program-card">
          <div className="program-icon">💪</div>
          <h5>Strength Training</h5>
          <p>
            In this program, you are trained to improve your strength through
            many exercises.
          </p>
          <div className="join-now">Join Now</div>
        </div>
        <div className="program-card">
          <div className="program-icon">🏃‍♂️</div>
          <h5>Cardio Training</h5>
          <p>
            In this program, you are trained to do sequential moves in range of
            20 until 30 minutes.
          </p>
          <div className="join-now">Join Now</div>
        </div>
        <div className="program-card">
          <div className="program-icon">🔥</div>
          <h5>Fat Burning</h5>
          <p>
            This program is suitable for you who wants to get rid of your fat
            and lose their weight.
          </p>
          <div className="join-now">Join Now</div>
        </div>
        <div className="program-card">
          <div className="program-icon">❤️</div>
          <h5>Health Fitness</h5>
          <p>
            This programs is designed for those who exercise only for their body
            fitness not body building.
          </p>
          <div className="join-now">Join Now</div>
        </div>
      </div>
    </Element>
  );
}

export default Programs;
