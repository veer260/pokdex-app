import React from "react";
import { useAppSelector } from "../app/hooks";
import { pokemonTypes } from "../utils/PokemonTypes";

const StrenWeak = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div>
      <div>
        <span>Strength</span>
        <div>{/* {currentPokemon?.types.} */}</div>
      </div>
    </div>
  );
};

export default StrenWeak;
