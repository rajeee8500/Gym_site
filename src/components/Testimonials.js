import React, { useState } from "react";
import { Element } from "react-scroll";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <blockquote className="testimonial-quote">
        “{testimonial.quote}”
      </blockquote>
      <div className="testimonial-name">- {testimonial.name}</div>
    </div>
  );
};

const Testimonials = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted", { email, phoneNumber });
    setSubmitted(true);
  };

  const testimonials = [
    {
      quote:
        "Joining this gym has been one of the best decisions of my life. The trainers are knowledgeable and supportive, and the community is incredibly welcoming!",
      name: "Alex Smith",
    },
    {
      quote:
        "I've never felt more at home in a gym. The atmosphere is great, and the workout equipment is top-notch. Highly recommended!",
      name: "Samantha Brown",
    },
    {
      quote:
        "The personal trainers here helped me achieve my fitness goals. They're truly attentive and personalized my workout to fit my needs.",
      name: "John Doe",
    },
  ];

  return (
    <Element name="testimonials" className="testimonials-section">
      <h1 className="headings">What Our Members Say</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}

        <div className={submitted ? "hide" : "testimonial-form"}>
          {!submitted && (
            <form onSubmit={handleSubmit} className="testimonial-form">
              <h2>Submit Your Contact Info</h2>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </div>
        {submitted && <p>Thank you for submitting your info!</p>}
      </div>
    </Element>
  );
};

export default Testimonials;
