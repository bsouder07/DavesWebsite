import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
// import "../styles/portfolio.css";  // Create a CSS file for styling

const Portfolio = () => {
  const isotope = useRef(null);

  // Portfolio items
  const portfolioItems = [
    { id: 1, title: "Project 1", category: "carpentry", src: "/Pics/Portfolio/carpentry_pic1.jpg" },
    { id: 2, title: "Project 2", category: "carpentry", src: "/Pics/Portfolio/carpentry_pic2.jpg" },
    { id: 3, title: "Project 3", category: "deck", src: "/Pics/Portfolio/deck_pic1.jpg" },
    { id: 4, title: "Project 4", category: "deck", src: "/Pics/Portfolio/deck_pic2.jpg" },
    { id: 5, title: "Project 5", category: "gutter", src: "/Pics/Portfolio/gutter_pic1.jpg" },
    { id: 6, title: "Project 6", category: "gutter", src: "/Pics/Portfolio/gutter_pic2.jpg" },
    { id: 7, title: "Project 7", category: "siding", src: "/Pics/Portfolio/siding_pic1.jpg" },
    { id: 8, title: "Project 8", category: "siding", src: "/Pics/Portfolio/siding_pic2.jpg" },
  ];

  useEffect(() => {
    // Initialize Isotope
    isotope.current = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
      transitionDuration: "0.4s",
      stagger: 30, 
      percentPosition: true, 
    });

    // Initialize Lightbox
    GLightbox({ selector: ".portfolio-lightbox" });

    return () => {
      isotope.current.destroy();
    };
  }, []);

  const handleFilter = (filter) => {
    isotope.current.arrange({ filter: filter === "all" ? "*" : `.${filter}` });

    // Force Isotope to recalculate layout
    setTimeout(() => {
      isotope.current.layout();
    }, 400);
  };

  return (
    <section className="portfolio">
      <div className="container ">
        {/* <h1 className="portfolio-title">Our Portfolio</h1> */}

        {/* FILTER BUTTONS */}
        <ul className="portfolio-filters ">
          {["all", "carpentry", "deck", "gutter", "siding"].map((category) => (
            <li key={category} 
            className={`px-4 py-2 rounded-md text-2xl transition-all duration-300 
              font-extrabold text-orange-400 drop-shadow-[2px_1px_0_black] 
              hover:bg-orange-500 hover:text-white`}
            
            onClick={() => handleFilter(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>

        {/* PORTFOLIO GRID */}
        <div className="portfolio-container">
          {portfolioItems.map((item) => (
            <div key={item.id} className={`portfolio-item ${item.category}`}>
              <img src={item.src} alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <a href={item.src} className="portfolio-lightbox">View</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio