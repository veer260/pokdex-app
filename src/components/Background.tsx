import React from "react";
import pokeball1 from "../assets/pokeball.png";
import pokeball2 from "../assets/pokeball2.png";

const Background = () => {
  return (
    <div className="grid bg-black absolute h-[100vh] grid-cols-3 gap-3 p-12 mx-auto -z-10  w-[100vw]">
      <img
        src={pokeball1}
        alt="pokeball 1"
        className="object-contain w-60 h-60"
      />
      <img
        src={pokeball2}
        alt="pokeball 2"
        className="object-contain w-60 h-60"
      />
      <img
        src={pokeball1}
        alt="pokeball 1"
        className="object-contain w-60 h-60"
      />
      <img
        src={pokeball2}
        alt="pokeball 2"
        className="object-contain w-60 h-60"
      />
      <img
        src={pokeball1}
        alt="pokeball 1"
        className="object-contain w-60 h-60"
      />
      <img
        src={pokeball2}
        alt="pokeball 2"
        className="object-contain w-60 h-60"
      />
    </div>
  );
};

export default Background;
