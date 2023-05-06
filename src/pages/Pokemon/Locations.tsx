import React from "react";
import { useAppSelector } from "../../app/hooks";

const Locations = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-12 p-8 ">
        {currentPokemon?.encounters.map((encounter) => {
          return (
            <div className="flex items-center justify-center p-4 font-medium rounded-lg bg-opacity-70 bg-slate-500">
              <span>{encounter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;
