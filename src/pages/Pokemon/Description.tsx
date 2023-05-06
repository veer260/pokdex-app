import React from "react";
import PokemonContainer from "../../components/PokemonContainer";
import { useAppSelector } from "../../app/hooks";
import StatComponent from "../../components/StatComponent";

const Description = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div className="h-[100%] flex justify-center relative">
      <PokemonContainer image={currentPokemon?.image!} />
      <StatComponent />
    </div>
  );
};

export default Description;
