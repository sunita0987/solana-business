import React from "react";
import penguin1 from "../assets/images/slider1.png";
import penguin2 from "../assets/images/slider2.png";
import penguin3 from "../assets/images/slider3.png";
import penguin4 from "../assets/images/slider4.png";
import penguin5 from "../assets/images/slider5.png";
import penguin6 from "../assets/images/slide6.png";
import penguin7 from "../assets/images/slider7.png";
import penguin8 from "../assets/images/slider8.png";
import penguin9 from "../assets/images/slider9.png";
import penguin10 from "../assets/images/slider10.png";
import penguin11 from "../assets/images/slider11.png";
import penguin12 from "../assets/images/slider12.png";

const penguins = [
  penguin1,
  penguin2,
  penguin3,
  penguin4,
  penguin5,
  penguin6,
  penguin7,
  penguin8,
  penguin9,
  penguin10,
  penguin11,
  penguin12,
];
const Tokenomics = () => {
  return (
    <section className="bg-[#F6E300] py-13 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {penguins.map((img, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={img}
              alt={`penguin-${index}`}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;
