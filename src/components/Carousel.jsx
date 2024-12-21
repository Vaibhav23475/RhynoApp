import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "LFP Battery",
      description:
        "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORB0AhEQRu-rBP0JlyEdgkDBqzWEAtT66WA&s",
    },
    {
      title: "Wider Tyres",
      description:
        "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that ensure stability on different terrains such as wet roads, mud, and sand.",
      image: "https://www.team-bhp.com/forum/attachments/tyre-alloy-wheel-section/994747d1349172932-wide-tyres-more-contact-more-grip-overrated-tyre_wear.gif",
    },
    {
      title: "Range Prediction",
      description:
        "With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZ3ftSNxYAaosSmYt4Ph8_YOgv8RBZbJ6QA&s",
    },
    {
      title: "Extraordinary Experience",
      description:
        "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and masculinity!",
      image: "https://www.pluginindia.com/uploads/2/1/8/5/21854234/founers-of-oben-electric-1-madhumita-and-dinkar-agarwal-along-with-the-rorr-2_orig.jpeg",
    },
    {
      title: "Rugged and Simple Design",
      description:
        "We took a bold step of making something raw, rugged, and practical. So simple that even your trusted local mechanic can understand and repair most of it.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5paaDdQkiCmKAT8X5YxOgeDGn3GySDro0w&s",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-card" key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-image"
            />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
