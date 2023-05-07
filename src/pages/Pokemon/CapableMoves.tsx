import React from "react";
import { useAppSelector } from "../../app/hooks";
import StatComponent from "../../components/StatComponent";

const CapableMoves = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div className="">
      <div className="p-8">
        <h3 className="mb-8 text-2xl font-semibold tracking-widest uppercase">
          Abilities
        </h3>
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-3 ">
          {currentPokemon?.pokemonAbilities.abilities.map((ability) => {
            return (
              <div className="flex text-[10px] lg:text-lg items-center justify-center p-4 font-medium tracking-wider uppercase rounded-lg bg-primary-color bg-opacity-60 ">
                <span>{ability}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-8">
        <h3 className="mb-8 text-2xl font-semibold tracking-widest uppercase">
          Moves it can learn
        </h3>
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-3 ">
          {currentPokemon?.pokemonAbilities.moves.map((move) => {
            return (
              <div className="flex items-center text-[10px] lg:text-lg justify-center p-4 font-medium tracking-wider uppercase rounded-lg bg-opacity-70 bg-slate-500">
                <span>{move}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* <StatComponent /> */}
    </div>
  );
};

export default CapableMoves;
