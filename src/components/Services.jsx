import React from "react";
import "./Services.css";

const Services = () => {
  const specs = [
    {
      name: "Rhyno SE03 Lite",
      battery: "1.8kWh",
      batteryFeatures: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
      batteryWarranty: "3 years",
      chargingTime: "3 hours (12A)",
      motor: "1500W",
      maxSpeed: "55 km/h",
      warrantyOnElectronics: "1 year",
      maxRange: "100 km (@30 km/h)",
      maxRange45: "90 km (@45 km/h)",
      maxRangeFull: "60 km (@Full speed)",
      otherKeyBenefits: "Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1JnnPC9hCAwFDQ24K6mrF8XkjRQzJqm8wQ&s",
    },
    {
      name: "Rhyno SE03 ",
      battery: "2.7kWh",
      batteryFeatures: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
      batteryWarranty: "3 years",
      chargingTime: "4 hours (12A)",
      motor: "1500W",
      maxSpeed: "55 km/h",
      warrantyOnElectronics: "1 year",
      maxRange: "150 km (@30 km/h)",
      maxRange45: "110 km (@45 km/h)",
      maxRangeFull: "90 km (@Full speed)",
      otherKeyBenefits: "Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1JnnPC9hCAwFDQ24K6mrF8XkjRQzJqm8wQ&s",
    },
    {
      name: "Rhyno SE03 Max",
      battery: "2.7kWh",
      batteryFeatures: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
      batteryWarranty: "3 years",
      chargingTime: "4 hours (12A)",
      motor: "2000W",
      maxSpeed: "65 km/h",
      warrantyOnElectronics: "1 year",
      maxRange: "120 km (@30 km/h)",
      maxRange45: "100 km (@45 km/h)",
      maxRangeFull: "80 km (@Full speed)",
      otherKeyBenefits: "Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1JnnPC9hCAwFDQ24K6mrF8XkjRQzJqm8wQ&s",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="cart-heading">Rhyno SE03 Models Comparison</h2>
      <div className="specification-cards">
        {specs.map((spec, index) => (
          <div className="spec-card" key={index}>
            <img
              src={spec.image}
              alt={spec.name}
              className="spec-image"
            />
            <div className="spec-content">
              <h3>{spec.name}</h3>
              <div className="spec-details">
                <p><strong>Battery:</strong> {spec.battery}</p>
                <p><strong>Battery Features:</strong> {spec.batteryFeatures}</p>
                <p><strong>Battery Warranty:</strong> {spec.batteryWarranty}</p>
                <p><strong>Charging Time:</strong> {spec.chargingTime}</p>
                <p><strong>Motor:</strong> {spec.motor}</p>
                <p><strong>Max Speed:</strong> {spec.maxSpeed}</p>
                <p><strong>Warranty on Electronics:</strong> {spec.warrantyOnElectronics}</p>
                <p><strong>Max Range (@30 km/h):</strong> {spec.maxRange}</p>
                <p><strong>Max Range (@45 km/h):</strong> {spec.maxRange45}</p>
                <p><strong>Max Range (@Full Speed):</strong> {spec.maxRangeFull}</p>
                <p><strong>Other Key Benefits:</strong> {spec.otherKeyBenefits}</p>
              </div>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
