import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";

const Portfolio = () => {
  const isotope = useRef(null);

  useEffect(() => {
    isotope.current = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    const filters = document.querySelectorAll("#portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        filters.forEach((el) => el.classList.remove("filter-active"));
        this.classList.add("filter-active");
        const filterValue = this.getAttribute("data-filter");
        isotope.current.arrange({ filter: filterValue });
      });
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Portfolio</h1>
        <ul
          id="portfolio-filters"
          className="flex justify-center space-x-4 mb-6"
        >
          <li className="filter-active" data-filter="*">
            All
          </li>
          <li data-filter=".filter-wedding">Wedding</li>
          <li data-filter=".filter-ceremony">Ceremony</li>
        </ul>

        <div className="portfolio-container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="portfolio-item filter-wedding">
            <div className="portfolio-img">
              <img
                src="/Pics/Portfolio/portfolio-1.jpg"
                className="w-full rounded-lg"
                alt="Wedding 1"
              />
            </div>
          </div>

          <div className="portfolio-item filter-ceremony">
            <div className="portfolio-img">
              <img
                src="/Pics/Portfolio/portfolio-2.jpg"
                className="w-full rounded-lg"
                alt="Ceremony 1"
              />
            </div>
          </div>

          <div className="portfolio-item filter-wedding">
            <div className="portfolio-img">
              <img
                src="/Pics/Portfolio/portfolio-3.jpg"
                className="w-full rounded-lg"
                alt="Wedding 2"
              />
            </div>
          </div>

          <div className="portfolio-item filter-ceremony">
            <div className="portfolio-img">
              <img
                src="/Pics/Portfolio/portfolio-4.jpg"
                className="w-full rounded-lg"
                alt="Ceremony 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
