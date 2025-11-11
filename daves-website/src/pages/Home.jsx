import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  // 1) your reviews, in the order you wanted
  const reviews = [
    {
      id: 0,
      images: [
        "/Pics/Home/Reviews/Review_Shayne_pic1.jpg",
        "/Pics/Home/Reviews/Review_Shayne_pic2.jpg",
        "/Pics/Home/Reviews/Review_Shayne_pic3.jpg",
        "/Pics/Home/Reviews/Review_Shayne_pic4.jpg",
      ],
      title: "5 STARS!",
      stars: 5,
      text: `5 STARS! David replaced my rotting porch roof eaves/soffit and made it look good as new. I had wet rot and the roof was beginning to sag and he fixed it up just right. He also installed very good quality gutter guards. ALL OF THIS IN ONE DAY!! The best part, however, was the PRICE - it couldn’t be beat! Great price, great service. 100% recommend and will use again for projects in the future.`,
      author: "- Shayne Milot",
    },
    {
      id: 1,
      images: ["/Pics/Home/Reviews/Review_Bobbie_pic1.jpg"],
      title: "Highly Recommend",
      stars: 5,
      text: `We called for an estimate to rebuild stairs and David responded promptly. I explained we were in a time crunch and he was able to accommodate our needs. His work was terrific. We plan on calling him again for other jobs after we move to our new home. We highly recommend David the Handyman!`,
      author: "- Bobbie Schwendeman",
    },
    {
      id: 2,
      images: [
        "/Pics/Portfolio/stairs_before_1.jpg",
        "/Pics/Portfolio/stairs_before_2.jpg",
        "/Pics/Portfolio/stairs_after_1.jpg",
        "/Pics/Portfolio/stairs_after_3.jpg",
      ],
      title: "Excellent Experience",
      stars: 5,
      text: `Looking for a skilled handyman to tackle your renovation projects? Look no further! I recently had the pleasure of working with Dave the Handyman, and I can't recommend him highly enough. Dave recently helped me with enclosing my office and created a closet under my stairs as well as installed new Vinyl plank flooring in my basement, and I couldn't be happier with the results. The transformation from my old open floor plan basement office and entertainment room is HUGE. He brought expertise, attention to detail, and a can-do attitude to the job, ensuring that everything was completed efficiently and to the highest standards. From the initial consultation to the final touches, Dave was a pleasure to work with. He listened carefully to my ideas, provided valuable insights, and kept me informed throughout the entire process. Plus, he completed the project on time and within budget, which was a huge relief. If you're in need of a reliable and skilled handyman for your home renovation projects, I highly recommend reaching out to Dave the Handyman. Trust me, you won't be disappointed!`,
      author: "- Happy Customer",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  // 2) AUTO-SLIDE EVERY 7 SECONDS 👇
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 7000); // 7000ms = 7 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="home">
      {/* Award, Logo, and Silhouette Section */}
      <div className="award-section">
        <div className="award-image-container">
          <img
            src="/Pics/Home/Daves_award_PennyPower.jpg"
            alt="Award"
            className="award-image"
          />
        </div>

        <div className="logo-container">
          <img
            src="/Pics/Davids_Logo_2.jpg"
            alt="David the Handyman Logo"
            className="logo-responsive"
          />
        </div>

        <div className="silhouette-container">
          <img
            src="/Pics/Home/home_sihouette_orange.jpg"
            alt="Handyman Illustration"
            className="silhouette"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="main-section text-center py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="button-box">
              <p className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black] text-4xl text-responsive-p">
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
              <p className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black] text-4xl text-responsive-p">
                Check out my Work
              </p>
              <Link
                to="/before-after"
                className="home-button text-lg md:text-xl px-6 py-3"
              >
                Before & After
              </Link>
            </div>
          </div>

          <div className="button-box">
            <Link
              to="/contact"
              className="home-button text-lg md:text-xl px-6 py-3 pulse-animation"
            >
              Contact Me
            </Link>
            <Link
              to="/contact"
              className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black] text-3xl  hover:underline hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Leave a Review
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section (slider) */}
      <div className="w-full min-h-screen bg-green-500">
        <div className="testimonials-section w-full flex justify-center py-10">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl px-6 py-8 text-center border-4 border-green-300 relative">
            {/* images at top */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              {activeReview.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`review ${activeReview.id} - ${index + 1}`}
                  className={`object-cover rounded-xl border-2 border-white shadow-md transition-all duration-300 ${
                    activeReview.images.length === 1
                      ? "w-64 h-64 sm:w-80 sm:h-80"
                      : "w-35 h-35 sm:w-45 sm:h-45"
                  }`}
                />
              ))}
            </div>

            <h2 className="text-2xl font-bold text-orange-500">
              {activeReview.title}
            </h2>

            <div className="flex justify-center mb-4">
              {[...Array(activeReview.stars)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 492.289"
                  className="w-6 h-6 mx-1"
                >
                  <defs>
                    <linearGradient
                      id={`gold-${activeReview.id}-${i}`}
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
                    fill={`url(#gold-${activeReview.id}-${i})`}
                    d="M393.868 314.547l27.71 162.547a13.5 13.5 0 01-.046 4.067l-.024.119a13.26 13.26 0 01-1.373 3.971 13.22 13.22 0 01-7.843 6.442c-3.241.986-6.87.737-10.091-.985l-145.502-77.825-144.909 77.503a13.048 13.048 0 01-4.332 1.669c-1.48.285-3.052.315-4.628.06l-.136-.027a13.254 13.254 0 01-8.502-5.321 13.247 13.247 0 01-2.336-9.882l26.741-162.275L4.215 198.002a13.304 13.304 0 01-2.707-3.567 13.263 13.263 0 01-1.376-4.276 13.257 13.257 0 012.537-9.832 13.25 13.25 0 018.745-5.175l159.774-22.883L244.819 7.353a13.313 13.313 0 012.462-3.433 13.212 13.212 0 013.44-2.495 13.276 13.276 0 0110.135-.759 13.23 13.23 0 017.696 6.631l72.978 144.982 159.074 22.869c1.363.196 2.72.617 3.987 1.241 1.218.601 2.369 1.4 3.394 2.399a13.259 13.259 0 014.014 9.335 13.256 13.256 0 01-3.755 9.434l-114.376 116.99z"
                  />
                </svg>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              {activeReview.text}
            </p>

            <h4 className="mt-4 font-bold text-gray-800">
              {activeReview.author}
            </h4>

            {/* dots */}
            <div className="flex justify-center gap-3 mt-6">
              {reviews.map((review, idx) => (
                <button
                  key={review.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    idx === activeIndex
                      ? "bg-green-500 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Show review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
