import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header bg-transparent backdrop-blur-md fixed w-full top-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 h-24">
      <nav className="nav-links flex items-center space-x-8">

        {/* YOU NEED TO ADD A SEPARATE SECTION FOR THE HOME PAGE BECAUSE IT SHOULD HAVE A TO='/' */}
        {/* Left Side - Home, About, Services */}
        {["Home", "About", "Services"].map((item, index) => (
          <NavLink
            key={index}
            to={item==="Home" ? "/":`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item}
          </NavLink>
        ))}

        {/* Centered Logo */}
        <div className="flex-shrink-0 mx-4">
          <NavLink to="/">
            <img
              src="/Pics/Davids_Logo_2.jpg"
              alt="David the Handyman Logo"
              className="h-25 w-auto"
              to="/"
            />
          </NavLink>
        </div>

        {/* Right Side - Portfolio, Contact */}
        {["Portfolio", "Contact"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
