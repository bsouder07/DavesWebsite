import React from "react";

const serviceData = [
  {
    title: "Carpentry",
    image: "Pics/Services/carpentry_services.jpg",
    description: (
      <ul>
        <li>Custom Woodwork</li>
        <li>Trim & Molding</li>
        <li>Cabinet Installation</li>
      </ul>
    ),
  },
  {
    title: "Gutter Cleaning",
    image: "Pics/Services/gutter_services.jpg",
    description: <p>Prevent water damage with regular gutter maintenance.</p>,
  },
  {
    title: "Deck Repair",
    image: "Pics/Services/deckrepair_services.jpg",
    description: (
      <ul>
        <li>Wood Rot Fixing</li>
        <li>Structural Repairs</li>
        <li>Staining & Sealing</li>
      </ul>
    ),
  },
  {
    title: "Pressure Washing",
    image: "Pics/Services/pressurewashing_services.jpg",
    description: (
      <p>Remove dirt, grime, and stains from your home's exterior.</p>
    ),
  },
  {
    title: "Aluminum Work",
    image: "Pics/Services/aluminumwork_services.jpg",
    description: (
      <ul>
        <li>Custom Fabrication</li>
        <li>Repairs & Installation</li>
        <li>Trim & Flashing</li>
      </ul>
    ),
  },
  {
    title: "Siding & Soffit",
    image: "Pics/Services/soffits_services.jpg",
    description: (
      <p>
        Upgrade your home’s exterior with durable siding and soffit solutions.
      </p>
    ),
  },

  {
    title: "Interior Remodeling",
    image: "Pics/Services/remodeling_services.jpg",
    description: (
      <p>Repairing and upgrading any aspect of your home's interior.</p>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="services w-full min-h-screen  py-16 relative">
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

        {/* Cards */}
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-12">
          {serviceData.map((service, index) => (
            <div key={index} className="card-container">
              <div className="card">
                {/* Front */}
                <div className="img-box">
                  <img src={service.image} alt={service.title} />
                </div>

                {/* Back */}
                <div className="details">{service.description}</div>
              </div>

              {/* Service Title */}
              <div className="card-title">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
