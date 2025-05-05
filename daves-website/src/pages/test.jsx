import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const BeforeAfter = () => {
  const isotope = useRef(null);

  const portfolioItems = [
    { id: 1, title: "Gutter Before & After 1", category: "gutter", images: [
      "/Pics/Portfolio/gutter_sofitt_1.jpeg",
      "/Pics/Portfolio/gutter_soffitt_fixed_1.jpeg"
    ]},
    { id: 2, title: "Gutter Before & After 2", category: "gutter", images: [
      "/Pics/Portfolio/gutter_sofitt_2.jpeg",
      "/Pics/Portfolio/gutter_soffitt_fixed_2.jpeg"
    ]},
    { id: 3, title: "Gutter Before & After 3", category: "gutter", images: [
      "/Pics/Portfolio/gutter_sofitt_3.jpg",
      "/Pics/Portfolio/gutter_soffitt_fixed_3.jpg"
    ]},
    { id: 4, title: "Deck Fix", category: "deck", images: [
      "/Pics/Portfolio/deck_beforefix.jpg",
      "/Pics/Portfolio/deck_afterfix.jpg"
    ]},
    { id: 5, title: "Deck Work", category: "deck", images: [
      "/Pics/Portfolio/deck_pic3.jpg",
      "/Pics/Portfolio/deck_pic4.jpg"
    ]},
    { id: 6, title: "Carpentry", category: "carpentry", images: [
      "/Pics/Portfolio/carpentry_pic1.jpg",
      "/Pics/Portfolio/carpentry_pic2.jpg"
    ]},
    { id: 7, title: "Flooring Transformation", category: "flooring", images: [
      "/Pics/Portfolio/flooring_1.jpeg",
      "/Pics/Portfolio/flooring_2.jpeg"
    ], caption: "Customer wanted walls painted and floor installed." },
    { id: 8, title: "Siding", category: "siding", images: [
      "/Pics/Portfolio/siding_pic1.jpg",
      "/Pics/Portfolio/siding_pic2.jpg"
    ]},
    { id: 9, title: "Gutter", category: "gutter", images: [
      "/Pics/Portfolio/gutter_pic1.jpg",
      "/Pics/Portfolio/gutter_pic2.jpg"
    ]},
  ];

  useEffect(() => {
    isotope.current = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      transitionDuration: "0.4s"
    });

    GLightbox({ selector: ".portfolio-lightbox" });

    return () => isotope.current.destroy();
  }, []);

  const handleFilter = (filter) => {
    isotope.current.arrange({ filter: filter === "all" ? "*" : `.${filter}` });
  };

  return (
    <section className="portfolio">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center flex-wrap gap-2 my-4 mt-12">
          {["all", "carpentry", "deck", "gutter", "flooring", "siding"].map(category => (
            <li key={category}
                className="px-4 py-2 rounded-md text-lg font-bold bg-gray-700 text-white hover:bg-orange-500 cursor-pointer"
                onClick={() => handleFilter(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>

        <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map(item => (
            <div key={item.id} className={`portfolio-item ${item.category} text-center`}>
              {/* <h4 className="mb-2 font-semibold text-white drop-shadow-md">{item.title}</h4> */}
              <div className="flex justify-center gap-2">
                {item.images.map((img, idx) => (
                  <a href={img} className="portfolio-lightbox" key={idx}>
                    <img 
                      src={img} 
                      alt={`${item.title} ${idx + 1}`} 
                      className="rounded-lg object-cover w-[50rem] h-[200px] hover:scale-105 transition-transform duration-200" 
                    />
                  </a>
                ))}
              </div>
              {item.caption && (
                <p className="mt-2 text-sm font-bold text-black italic drop-shadow-md">{item.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
