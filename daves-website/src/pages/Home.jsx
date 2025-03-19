import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const testimonials = [
    {
      name: "Jillian",
      text: "Amazing job! He was reliable, responsive, and respectful.",
    },
    {
      name: "Tom",
      text: "Great Job! I would definitely recommend his work to anyone.",
    },
    {
      name: "Wendy",
      text: "We were not suspecting how satisfied we would be with his work.",
    },
  ];

  return (
    <section id="home">
      {/* Award Section */}
      <div className="award-section">
        <img
          src="/Pics/Home/Daves_award_PennyPower.jpg"
          alt="Award"
          className="award-image"
        />
        <img
          src="/Pics/Home/home_sihouette_orange.jpg"
          alt="Handyman Illustration"
          className="handyman-img"
        />
      </div>

      {/* Main Section with Background */}
      <div className="main-section">
        <h1 className="text-6xl md:text-8xl font-extrabold text-orange-500 tracking-wide drop-shadow-[2px_2px_0_black]">
          David the Handyman
        </h1>
        <div className="buttons-container">
          <div className="button-box">
            <p className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Check out our Services
            </p>
            <Link to="/services" className="home-button">
              Services
            </Link>
          </div>
          <div className="button-box">
            <p className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Contact me for a free estimate
            </p>
            <Link to="/contact" className="home-button">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonials-section">
        <h2 className="text-4xl font-extrabold text-black text-orange-500 drop-shadow-[2px_2px_0_black] text-center mb-8">
          What Our Customers Are Saying
        </h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* Star Rating */}
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 512 492.289"
                    className="star-icon"
                  >
                    <defs>
                      <linearGradient id="gold" x1="258.396" y1="19.906" x2="258.4" y2="416.813" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#FFD433" />
                        <stop offset=".471" stopColor="#FABE2B" />
                        <stop offset="1" stopColor="#F4A722" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gold)"
                      d="M393.868 314.547l27.71 162.547a13.5 13.5 0 01-.046 4.067l-.024.119a13.26 13.26 0 01-1.373 3.971 13.22 13.22 0 01-7.843 6.442c-3.241.986-6.87.737-10.091-.985l-145.502-77.825-144.909 77.503a13.048 13.048 0 01-4.332 1.669c-1.48.285-3.052.315-4.628.06l-.136-.027a13.254 13.254 0 01-8.502-5.321 13.247 13.247 0 01-2.336-9.882l26.741-162.275L4.215 198.002a13.304 13.304 0 01-2.707-3.567 13.263 13.263 0 01-1.376-4.276 13.257 13.257 0 012.537-9.832 13.25 13.25 0 018.745-5.175l159.774-22.883L244.819 7.353a13.313 13.313 0 012.462-3.433 13.212 13.212 0 013.44-2.495 13.276 13.276 0 0110.135-.759 13.23 13.23 0 017.696 6.631l72.978 144.982 159.074 22.869c1.363.196 2.72.617 3.987 1.241 1.218.601 2.369 1.4 3.394 2.399a13.259 13.259 0 014.014 9.335 13.256 13.256 0 01-3.755 9.434l-114.376 116.99z"
                    />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="testimonial-text">{testimonial.text}</p>

              {/* Customer Name */}
              <h4 className="testimonial-name">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

