import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `font-nova-flat text-black text-2xl font-extrabold tracking-wide drop-shadow-[1px_1px_0_white] hover:text-orange-600 transition duration-200 ${
      isActive ? "underline underline-offset-4 text-red-700" : ""
    }`;

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Before & After", to: "/before-after" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="header bg-[#ff8c00] fixed w-full top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-24">
      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-wrap items-center justify-center gap-8 mx-auto">
        {navItems.map(({ label, to }, index) => (
          <NavLink key={index} to={to} className={linkClasses}>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <img src="/Pics/menu.png" alt="Menu" className="w-10 h-10 cursor-pointer" />
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white bg-opacity-95 z-50 flex flex-col items-center py-6 space-y-4 shadow-md md:hidden">
          {navItems.map(({ label, to }, index) => (
            <NavLink
              key={index}
              to={to}
              className={linkClasses}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;