import React from "react";
import banner from "../assets/images/herosection.png";
import burger from "../assets/images/burgers.png";
import logo from "../assets/images/logo2.png";
import open from "../assets/images/open.png";
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FFF03F] overflow-hidden">
      <div className="w-full">
        <img
          src={banner}
          alt="Factory Banner"
          className="w-full object-cover"
        />
        <img src={burger} alt="burgers"></img>
      </div>
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-black px-4">
        <h2 className="text-lg font-semibold uppercase mt-50">Welcome To</h2>
        <img src={logo} alt="logo-2" className="w-130 h-40 ml-80 mt-30"></img>
        <img src={open} alt="logo-2" className="w-70 h-45 ml-100"></img>
      </div>
    </section>
  );
};
export default HeroSection;
