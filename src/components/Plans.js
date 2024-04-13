import React from "react";
import { Element } from "react-scroll";
const PlanCard = ({ emoji, title, features, price }) => {
  return (
    <div className="plan-card">
      <div className="plan-icon">{emoji}</div>
      <h2 className="plan-title">{title}</h2>
      <div className="plan-price">{`$${price}`}</div>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="join-now-button">Join Now</div>
    </div>
  );
};

function Plans() {
  const planDetails = [
    {
      emoji: "🏋️‍♀️", // Updated Emoji for Strength Training
      title: "Basic Plan",
      price: "25",
      features: [
        "2 hours of exercises",
        "Free consultation to coaches",
        "Access to The Community",
      ],
    },
    {
      emoji: "🚴", // Updated Emoji for Cardio Training
      title: "Premium Plan",
      price: "30",
      features: [
        "5 hours of exercises",
        "Free consultation of Coaches",
        "Access to minibar",
      ],
    },
    {
      emoji: "🥗", // Updated Emoji for Fat Burning, representing healthy eating
      title: "Pro Plan",
      price: "45",
      features: [
        "8 hours of exercises",
        "Consultation of Private Coach",
        "Free Fitness Merchandises",
      ],
    },
    {
      emoji: "🧘", // Updated Emoji for Health Fitness, representing wellness
      title: "Health Plan",
      price: "35",
      features: [
        "Regular health checkups",
        "Personalized fitness plans",
        "Nutrition guides",
      ],
    },
  ];

  return (
    <Element name="plans" className="plans-section">
      <div>
        <h1 className="headings">Ready to start your journey now with us</h1>
        <div className="plans-container">
          {planDetails.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Plans;
