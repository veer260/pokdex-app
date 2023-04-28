import React from "react";
import { FaPlus } from "react-icons/fa";

const AddPokemon = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full tracking-wider gap-y-4 font-raleway">
      <FaPlus className="text-4xl cursor-pointer hover:animate-grow" />
      <h3 className="font-bold uppercase ">Add Pokemon to comparison</h3>
    </div>
  );
};

export default AddPokemon;
