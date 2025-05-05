import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `font-nova-flat text-black text-2xl font-extrabold tracking-wide drop-shadow-[1px_1px_0_white] hover:text-orange-600 transition duration-200 ${
      isActive ? "underline underline-offset-4 text-orange-600" : ""
    }`;

  return (
    <header className="header bg-transparent backdrop-blur-md fixed w-full top-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 h-24 drop-shadow-[1px_1px_0_white]">
      <nav className="nav-links flex flex-wrap items-center justify-center gap-8">
        {/* Left Side - Home, About, Services */}
        {["Home", "About", "Services"].map((item, index) => (
          <NavLink
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={linkClasses}
          >
            {item}
          </NavLink>
        ))}

        {/* Right Side - Before & After, Contact */}
        <NavLink to="/before-after" className={linkClasses}>
          Before & After
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;