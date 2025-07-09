import React from "react";

const Timeline = () => {
  return (
    <div className="bg-yellow-400 py-16">
      <h2 className="text-center text-4xl font-extrabold mb-12">ROADMAP 1.0</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-red-600"></div>
        <div className="mb-16 flex justify-start">
          <div className="w-1/2 pr-10 text-right">
            <div className="bg-white p-5 rounded shadow-md inline-block">
              <h3 className="font-bold mb-2 mr-70">Q4 2021</h3>
              <ul className="text-left list-disc ml-5">
                <li>Launch SFFB</li>
                <li>SELL OUT</li>
                <li>Apply for secondary marketplace listings</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-16 flex justify-end">
          <div className="w-1/2 pl-10 text-left">
            <div className="bg-white p-5 rounded shadow-md inline-block">
              <h3 className="font-bold mb-2">Q1 2022</h3>
              <ul className="list-disc ml-5">
                <li>Charity Giveaway</li>
                <li>Launch Adopt-A-Penguin Program</li>
                <li>Secure Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-1/2 pr-10 text-right">
            <div className="bg-white p-5 rounded shadow-md inline-block">
              <h3 className="font-bold mb-2 mr-70">Q2 2022</h3>
              <ul className="text-left list-disc ml-5">
                <li>SFFB Merch Release</li>
                <li>Stay tune for Roadmap 2.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

