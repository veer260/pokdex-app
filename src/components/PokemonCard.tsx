import React from "react";
import { GeneratedPokemonType } from "../utils/type";
import CardNav from "./CardNav";
import { useLocation } from "react-router";
import TypesFooter from "./TypesFooter";
import { useAppSelector } from "../app/hooks";

interface PokemonCardProp {
  pokemon: GeneratedPokemonType;
}

const PokemonCard: React.FC<PokemonCardProp> = ({ pokemon }) => {
  const { pathname } = useLocation();
  // const { types } = useAppSelector((state) => state.pokemon.randomPokemons)
  return (
    <div className="flex flex-col p-4 items-center text-white bg-[#32313A] rounded-2xl">
      <CardNav pathname={pathname} />
      <h1 className="text-xl font-bold tracking-widest text-center uppercase font-raleway ">
        {pokemon.name}
      </h1>
      <div className="">
        <img
          // style={{filter: drop-shadow(20px 10px 10px rgba(20, 18, 18, 0.5058823529))}}
          className="w-[200px] drop-shadow-imageShadow "
          src={pokemon.image}
          alt=""
        />
      </div>

      <TypesFooter types={pokemon.types} />
    </div>
  );
};

export default PokemonCard;
