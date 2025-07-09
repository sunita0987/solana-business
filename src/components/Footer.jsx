import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-yellow-400 text-center py-10">
      <img src={logo} alt="Penguin" className="items-center ml-130" />
      <div className="flex justify-center gap-6 text-3xl mb-4 text-[#FF0000]">
        <FaDiscord className=" cursor-pointer" />
        <FaTwitter className=" cursor-pointer" />
      </div>
      <p className="text-sm text-[#000000] opacity-70">©Copyright 2021</p>
    </div>
  );
};

export default Footer;
