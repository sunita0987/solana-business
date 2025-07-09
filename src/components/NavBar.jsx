import React from "react";
import { NavLink } from "react-router-dom";
import yellow from "../assets/images/logo.png";
const Navbar = () => {
  const linkClass =
    "text-sm font-medium hover:text-red-600 transition duration-200";
  const activeClass = "text-red-600";
  return (
    <nav className="bg-[#FFF03F] shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py- text-[#000000]">
        <div className="text-red-600 font-regular text-md flex items-center ">
          <img src={yellow} alt="3rd-image" className="" />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/tokenomics"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Tokenomics
          </NavLink>
          <NavLink
            to="/roadmap"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Roadmap
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
        <button className="bg-[#FFFFFF] text-[#F4241E]  px-4 py-1 rounded hover:bg-[#f4241e] hover:text-[#ffffff] text-sm font-medium mr-60 cursor-pointer">
          Connect Wallet
        </button>
      </div>
      
    </nav>
  );
};
export default Navbar;
