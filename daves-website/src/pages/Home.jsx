import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      {/* Award, Logo, and Silhouette Section */}
      <div className="award-section flex items-center justify-between px-8 w-full py-6 transform translate translate-x">
        <div className="flex-shrink-0 w-[17vw] ml-4 pulse-animation ">
          <img
            src="/Pics/Home/Daves_award_PennyPower.jpg"
            alt="Award"
            className="award-image small-award w-full rounded-3xl"
          />
        </div>

        <div className="flex-grow text-center">
          <img
            src="/Pics/Davids_Logo_2.jpg"
            alt="David the Handyman Logo"
            className="logo-responsive mx-auto max-w-[25vw] ml-125"
          />
        </div>

        <div className="flex-shrink-0 w-[15vw] max-w-[200px] transform -translate-x-40 translate-y-10">
          <img
            src="/Pics/Home/home_sihouette_orange.jpg"
            alt="Handyman Illustration"
            className="w-full"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="main-section text-center py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="button-box">
              <p className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
                Check out our Services
              </p>
              <Link
                to="/services"
                className="home-button text-lg md:text-xl px-6 py-3"
              >
                Services
              </Link>
            </div>

            <div className="button-box">
              <p className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
                Check out my Work
              </p>
              <Link
                to="/portfolio"
                className="home-button text-lg md:text-xl px-6 py-3"
              >
                Before & After
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className="home-button mt-5 text-lg md:text-xl px-6 py-3 pulse-animation"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section flex justify-center py-10">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl px-6 py-8 text-center border-4 border-green-300 relative">
          <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
            <img
              src="/Pics/Portfolio/deck_pic4.jpg"
              alt="Deck Work"
              className="w-45 h-45 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>

          <h2 className="text-2xl font-bold text-orange-500 mt-12">
            Excellent Experience
          </h2>

          <div className="flex justify-center mb-4">
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
                className="w-6 h-6 mx-1"
              >
                <defs>
                  <linearGradient
                    id={`gold-${i}`}
                    x1="258.396"
                    y1="19.906"
                    x2="258.4"
                    y2="416.813"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFD433" />
                    <stop offset=".471" stopColor="#FABE2B" />
                    <stop offset="1" stopColor="#F4A722" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#gold-${i})`}
                  d="M393.868 314.547l27.71 162.547a13.5 13.5 0 01-.046 4.067l-.024.119a13.26 13.26 0 01-1.373 3.971 13.22 13.22 0 01-7.843 6.442c-3.241.986-6.87.737-10.091-.985l-145.502-77.825-144.909 77.503a13.048 13.048 0 01-4.332 1.669c-1.48.285-3.052.315-4.628.06l-.136-.027a13.254 13.254 0 01-8.502-5.321 13.247 13.247 0 01-2.336-9.882l26.741-162.275L4.215 198.002a13.304 13.304 0 01-2.707-3.567 13.263 13.263 0 01-1.376-4.276 13.257 13.257 0 012.537-9.832 13.25 13.25 0 018.745-5.175l159.774-22.883L244.819 7.353a13.313 13.313 0 012.462-3.433 13.212 13.212 0 013.44-2.495 13.276 13.276 0 0110.135-.759 13.23 13.23 0 017.696 6.631l72.978 144.982 159.074 22.869c1.363.196 2.72.617 3.987 1.241 1.218.601 2.369 1.4 3.394 2.399a13.259 13.259 0 014.014 9.335 13.256 13.256 0 01-3.755 9.434l-114.376 116.99z"
                />
              </svg>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Looking for a skilled handyman to tackle your renovation projects?
            Look no further! I recently had the pleasure of working with Dave
            the Handyman, and I can't recommend him highly enough. Dave recently
            helped me with enclosing my office and created a closet under my
            stairs as well as installed new Vinyl plank flooring in my basement,
            and I couldn't be happier with the results. The transformation from
            my old open floor plan basement office and entertainment room is
            HUGE. He brought expertise, attention to detail, and a can-do
            attitude to the job, ensuring that everything was completed
            efficiently and to the highest standards. From the initial
            consultation to the final touches, Dave was a pleasure to work with.
            He listened carefully to my ideas, provided valuable insights, and
            kept me informed throughout the entire process. Plus, he completed
            the project on time and within budget, which was a huge relief. If
            you're in need of a reliable and skilled handyman for your home
            renovation projects, I highly recommend reaching out to Dave the
            Handyman. Trust me, you won't be disappointed!
          </p>

          <h4 className="mt-4 font-bold text-gray-800">- Happy Customer</h4>
        </div>
      </div>
    </section>
  );
}

export default Home;
