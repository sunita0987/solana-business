import React from "react";

const Team = () => {
  return (
    <div className="bg-[#F4241E] text-white text-center py-10">
      <h2 className="text-3xl font-bold mb-6">Supplies</h2>
      <div className="flex justify-center space-x-10 text-xl font-semibold">
        <div>
          <p className="text-3xl">3,313</p>
          <p className="text-sm font-light">Public Sale</p>
        </div>
        <div>
          <p className="text-3xl">15</p>
          <p className="text-sm font-light">Community Giveaways</p>
        </div>
        <div>
          <p className="text-3xl">5</p>
          <p className="text-sm font-light">Marketing / Influencers</p>
        </div>
        <div>
          <p className="text-3xl">15</p>
          <p className="text-sm font-light">Maximum Supply</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
