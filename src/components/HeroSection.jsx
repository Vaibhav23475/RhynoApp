import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style</h1>
        <p>(And the last word will keep changing: Elegance, Minimalism, Comfort)</p>
        <button className="cta-button">Explore More</button>
      </div>
    </section>
  );
};

export default HeroSection;
