import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="services w-full py-16 bg-gray-100 relative"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 p-12">
          <h1 className="text-6xl md:text-8xl font-extrabold text-orange-500 tracking-wide drop-shadow-[2px_2px_0_black]">
            Our Services
          </h1>
          <h3 className="text-3xl md:text-3xl font-extrabold text-orange-500 tracking-wide drop-shadow-[2px_2px_0_black]">
            (And so much more..)
          </h3>
        </div>

        {/* Service Cards */}
        <div className="flex justify-center flex-wrap gap-6">
          {/* Carpentry */}
          <div className="card-container">
            <div className="card">
              <div className="img-box">
                <img
                  src="Pics/Services/carpentry_services.jpg"
                  alt="Carpentry"
                />
              </div>
              <div className="details">
                <h4 className="font-extrabold text-5xl text-black drop-shadow-[2px_2px_0_white]">
                  Carpentry
                </h4>
                <ul className="text-black text-2xl leading-relaxed">
                  <li>Custom Woodwork</li>
                  <li>Furniture Repair</li>
                  <li>Trim & Molding</li>
                  <li>Cabinet Installation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gutter Cleaning */}
          <div className="card-container">
            <div className="card">
              <div className="img-box">
                <img
                  src="Pics/Services/gutter_services.jpg"
                  alt="Gutter Cleaning"
                />
              </div>
              <div className="details">
                <h4 className="font-extrabold text-5xl text-black drop-shadow-[2px_2px_0_white]">
                  Gutter Cleaning
                </h4>
                <p className="text-black text-2xl leading-relaxed">
                  Prevent water damage with regular gutter maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Deck Repair */}
          <div className="card-container">
            <div className="card">
              <div className="img-box">
                <img
                  src="Pics/Services/deckrepair_services.jpg"
                  alt="Deck Repair"
                />
              </div>
              <div className="details">
                <h4 className="font-bold text-5xl text-black drop-shadow-[2px_2px_0_white]">
                  Deck Repair
                </h4>
                <ul className="text-black text-2xl">
                  <li>Wood Rot Fixing</li>
                  <li>Structural Repairs</li>
                  <li>Staining & Sealing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pressure Washing */}
          <div className="card-container">
            <div className="card">
              <div className="img-box">
                <img
                  src="Pics/Services/pressurewashing_services.jpg"
                  alt="Pressure Washing"
                />
              </div>
              <div className="details">
                <h4 className="font-bold text-5xl text-black drop-shadow-[2px_2px_0_white]">
                  Pressure Washing
                </h4>
                <p className="text-black text-2xl">
                  Remove dirt, grime, and stains from your home's exterior.
                </p>
              </div>
            </div>
          </div>

          {/* Aluminum Work */}
          <div className="card-container">
            <div className="card">
              <div className="img-box">
                <img
                  src="Pics/Services/aluminumwork_services.jpg"
                  alt="Aluminum Work"
                />
              </div>
              <div className="details">
                <h4 className="font-bold text-5xl text-black drop-shadow-[2px_2px_0_white]">
                  Aluminum Work
                </h4>
                <ul className="text-black text-2xl">
                  <li>Custom Fabrication</li>
                  <li>Repairs & Installation</li>
                  <li>Trim & Flashing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Siding & Soffit */}
          <div className="card-container">
            <div className="card">
              <div className="img-box">
                <img
                  src="Pics/Services/soffits_services.jpg"
                  alt="Siding & Soffit"
                />
              </div>
              <div className="details">
                <h4 className="font-bold text-5xl text-black drop-shadow-[2px_2px_0_white]">
                  Siding & Soffit
                </h4>
                <p className="text-black text-2xl">
                  Upgrade your home’s exterior with durable siding and soffit
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
