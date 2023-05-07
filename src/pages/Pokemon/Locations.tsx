import React from "react";
import { useAppSelector } from "../../app/hooks";

const Locations = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-12 p-2 lg:grid-cols-3 lg:p-8 ">
        {currentPokemon?.encounters.map((encounter) => {
          return (
            <div className="flex items-center text-[12px] justify-center p-4 font-medium rounded-lg bg-opacity-70 bg-slate-500">
              <span>{encounter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;
