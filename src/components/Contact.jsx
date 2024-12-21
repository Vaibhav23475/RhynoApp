import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <ul>
          <li><strong>Mail:</strong> info@rhyno.in</li>
          <li><strong>Mobile no.:</strong> +91-9023987528</li>
          <li><strong>Location:</strong> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
        </p>
        <p>
          With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology.
        </p>
        <p>
          Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.
        </p>
      </div>
    </div>
  );
};

export default Contact;
