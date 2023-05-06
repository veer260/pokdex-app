import React from "react";
import PokemonContainer from "../../components/PokemonContainer";
import { useAppSelector } from "../../app/hooks";
import StatComponent from "../../components/StatComponent";
import NextEvolModal from "../../components/NextEvolModal";

const Description = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div className="h-[100%] flex justify-center relative">
      <PokemonContainer image={currentPokemon?.image!} />
      <NextEvolModal />
      <StatComponent />
    </div>
  );
};

export default Description;
