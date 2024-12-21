import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Eco-Friendly",
      description: "Zero emissions for a cleaner environment.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YwSV0pudKeTr3IwCg3V1eqruPtq-Hm6tjQ&s",
      extraContent: "Our vehicles contribute to reducing your carbon footprint.",
    },
    {
      title: "High Performance",
      description: "Experience unmatched power and acceleration.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHqKxWd40OLZG14IbpCHpmnzXsIiaJ9qMjw&s",
      extraContent: "Feel the thrill of instant torque and dynamic driving.",
    },
    {
      title: "Smart Technology",
      description: "Stay connected with advanced IoT features.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQGjVtQZtKx9mmLdGC72W1_PMCOM2Mi0wmA&s",
      extraContent: "Control your vehicle remotely with cutting-edge apps.",
    },
  ];

  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <p className="extra-content">{feature.extraContent}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
