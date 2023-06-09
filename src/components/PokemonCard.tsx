import React from "react";
import { GeneratedPokemonType } from "../utils/type";
import CardNav from "./CardNav";
import { useLocation, useNavigate } from "react-router";
import TypesFooter from "./TypesFooter";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemonTab } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/Constants";

interface PokemonCardProp {
  pokemon: GeneratedPokemonType;
}

const PokemonCard: React.FC<PokemonCardProp> = ({ pokemon }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  // const { types } = useAppSelector((state) => state.pokemon.randomPokemons)
  return (
    <div className="flex flex-col  items-center cursor-pointer bg-gray-700 bg-opacity-70 bg-[rgba(14, 5, 5, 0.8)] p-4 text-white rounded-2xl">
      <CardNav pathname={pathname} pokemon={pokemon} />
      <h1 className="text-sm font-bold tracking-widest text-center uppercase lg:text-xl font-raleway">
        {pokemon.name}
      </h1>
      <div className="">
        <img
          // style={{filter: drop-shadow(20px 10px 10px rgba(20, 18, 18, 0.5058823529))}}
          className="min-w-[80px] lg:w-[200px] drop-shadow-imageShadow "
          src={pokemon.image}
          onClick={() => {
            dispatch(setPokemonTab(pokemonTabs.description));
            navigate(`/pokemon/${pokemon.id}`);
          }}
          // src={
          //   pokemon.id < 10
          //     ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemon.id}.png`
          //     : pokemon.id < 100
          //     ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pokemon.id}.png`
          //     : `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`
          // }
          alt=""
          loading="lazy"
        />
      </div>

      <TypesFooter types={pokemon.types} />
    </div>
  );
};

export default PokemonCard;
