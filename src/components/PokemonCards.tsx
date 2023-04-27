import React from "react";
import { GeneratedPokemonType } from "../utils/type";
import PokemonCard from "./PokemonCard";
interface PokemonCardsProps {
  randomPokemons: GeneratedPokemonType[];
}

const PokemonCards: React.FC<PokemonCardsProps> = ({ randomPokemons }) => {
  return (
    <div className="grid grid-cols-3 bg-[#19191f] bg-opacity-80 p-16 gap-x-36 gap-y-20 ">
      {randomPokemons.map((pokemon: GeneratedPokemonType) => {
        return <PokemonCard pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonCards;
