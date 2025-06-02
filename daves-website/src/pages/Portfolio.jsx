import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const BeforeAfter = () => {
  const isotope = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const groupedItems = [
    {
      category: "gutter",
      title: "Gutter Before & After 1",
      images: [
        "/Pics/Portfolio/gutter_sofitt_1.jpeg",
        "/Pics/Portfolio/gutter_soffitt_fixed_1.jpeg",
      ],
    },
    {
      category: "gutter",
      title: "Gutter Before & After 2",
      images: [
        "/Pics/Portfolio/gutter_sofitt_2.jpeg",
        "/Pics/Portfolio/gutter_soffitt_fixed_2.jpeg",
      ],
    },
    {
      category: "gutter",
      title: "Gutter Before & After 3",
      images: [
        "/Pics/Portfolio/gutter_sofitt_3.jpg",
        "/Pics/Portfolio/gutter_soffitt_fixed_3.jpg",
      ],
    },
    {
      category: "deck",
      title: "Deck Fix",
      images: [
        "/Pics/Portfolio/deck_beforefix.jpg",
        "/Pics/Portfolio/deck_afterfix.jpg",
      ],
    },
    {
      category: "deck",
      title: "Deck Work",
      images: [
        "/Pics/Portfolio/deck_pic3.jpg",
        "/Pics/Portfolio/deck_pic4.jpg",
      ],
    },
    {
      category: "carpentry",
      title: "Carpentry",
      images: [
        {
          src: "/Pics/Portfolio/stairs_before_1.jpg",
          caption: "Built closet underneath the stairs",
        },
        {
          src: "/Pics/Portfolio/stairs_before_2.jpg",
          caption: "Built closet underneath the stairs",
        },
        {
          src: "/Pics/Portfolio/stairs_before_3.jpg",
          caption: "Built closet underneath the stairs",
        },
        {
          src: "/Pics/Portfolio/stairs_after_1.jpg",
          caption: "Built closet underneath the stairs",
        },
        {
          src: "/Pics/Portfolio/stairs_after_2.jpg",
          caption: "Built closet underneath the stairs",
        },
        {
          src: "/Pics/Portfolio/stairs_after_3.jpg",
          caption: "Built closet underneath the stairs",
        },
        { src: "/Pics/Portfolio/carpentry_wall_1.jpg" },
        { src: "/Pics/Portfolio/carpentry_wall_2.jpg" },
        { src: "/Pics/Portfolio/carpentry_wall_3.jpg" },
        { src: "/Pics/Portfolio/replacement_stairs_1.jpg" },
        { src: "/Pics/Portfolio/replacement_stairs_2.jpg" },
      ],
    },
    {
      category: "flooring",
      title: "Flooring Transformation",
      images: [
        {
          src: "/Pics/Portfolio/flooring_1.jpeg",
          caption: "Customer wanted walls painted and floor installed.",
        },
        {
          src: "/Pics/Portfolio/flooring_2.jpeg",
          caption: "Customer wanted walls painted and floor installed.",
        },
      ],
    },
    {
      category: "siding",
      title: "Siding",
      images: [
        "/Pics/Portfolio/siding_before_1.jpg",
        "/Pics/Portfolio/siding_after_1.jpg",
        "/Pics/Portfolio/soffit_1.jpg",
        "/Pics/Portfolio/siding_pic3.jpg",
        "/Pics/Portfolio/siding_pic4.jpg",
        "/Pics/Portfolio/siding_pic5.jpg",
        "/Pics/Portfolio/siding_pic6.jpg",
        "/Pics/Portfolio/siding_pic7.jpg",
      ],
    },
    {
      category: "pressure-washing",
      title: "Pressure Washing",
      images: [
        "/Pics/Portfolio/pressurewashing_1.jpg",
        "/Pics/Portfolio/pressurewashing_2.jpg",
        "/Pics/Portfolio/pressurewashing_3.jpg",
        "/Pics/Portfolio/pressurewashing_4.jpg",
      ],
    },
    {
      category: "misc",
      title: "Miscellaneous",
      images: [
        "/Pics/Portfolio/pizza_shelf_1.jpg",
        "/Pics/Portfolio/pizza_shelf_2.jpg",
        "/Pics/Portfolio/shed_1.jpg",
        "/Pics/Portfolio/shed_2.jpg",
      ],
    },
    {
      category: "all",
      title: "Extra Soffit Work",
      images: ["/Pics/Portfolio/soffit_2.jpg"],
    },
  ];
  
  const portfolioItems = groupedItems.flatMap((item) =>
    item.images.map((img, idx) => {
      const isObject = typeof img === "object";
      return {
        src: isObject ? img.src : img,
        caption: isObject ? img.caption : null,
        category: item.category,
        title: `${item.title} ${idx + 1}`,
      };
    })
  );

  useEffect(() => {
    isotope.current = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      transitionDuration: "0.4s",
    });

    GLightbox({ selector: ".portfolio-lightbox" });

    return () => isotope.current.destroy();
  }, []);

  const handleFilter = (filter) => {
    setActiveCategory(filter);
    isotope.current.arrange({ filter: filter === "all" ? "*" : `.${filter}` });
  };

  const categories = [
    { key: "all", label: "All" },
    { key: "carpentry", label: "Carpentry" },
    { key: "deck", label: "Deck" },
    { key: "gutter", label: "Gutter" },
    { key: "flooring", label: "Flooring" },
    { key: "siding", label: "Siding" },
    { key: "pressure-washing", label: "Pressure Washing" },
  ];

  return (
    <section
  className="portfolio bg-center bg-cover min-h-[150vh] bg-fixed sm:bg-scroll"
  style={{
    backgroundImage: "url('/Pics/Portfolio/portfolio_wood_background.jpg')",
  }}
>
      <div className="container mx-auto px-4">
        <ul className="flex justify-center flex-wrap gap-2 my-4 mt-12">
          {categories.map(({ key, label }) => (
            <li
              key={key}
              className={`px-4 py-2 rounded-md text-lg font-bold cursor-pointer transition-all duration-200 ${
                activeCategory === key
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-white hover:bg-orange-500"
              }`}
              onClick={() => handleFilter(key)}
            >
              {label}
            </li>
          ))}
        </ul>

        <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio-item ${item.category} text-center`}
            >
              <a href={item.src} className="portfolio-lightbox">
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-lg object-cover w-full h-40 min-h-[160px] hover:scale-105 transition-transform duration-200"
                />
              </a>
              {item.caption && (
                <p className="portfolio-caption mt-2">{item.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
