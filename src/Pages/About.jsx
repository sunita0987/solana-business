import React from "react";
import penguinImage from "../assets/images/discover.png";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#FFF03F] min-h-full mt-10">
      <div className="md:w-1/2 px-8 py-12">
        <h2 className="text-3xl font-bold text-black mb-4">
          It was popularised
        </h2>
        <p className="text-sm text-gray-800 mb-6 max-w-md">
          Have you heard? We're hiring! We have 3,333 working positions to fill
          on the Solana blockchain. Once all positions are filled it's crucial
          to stay on your toes because the corporate penguins are coming! Any
          penguins caught chilling on the floor when corporate arrives will be
          immediately fired and swept away! This makes SFFB a deflationary
          collection until we reach a maximum staff of 1,666 mcnoots in total.
        </p>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
          DISCOVER MORE
        </button>
      </div>
      <div className="md:w-1/2  flex justify-center items-center py-8">
        <img src={penguinImage} alt="Penguin" className="w-[300px] h-[350px]" />
      </div>
    </section>
  );
};

export default About;
