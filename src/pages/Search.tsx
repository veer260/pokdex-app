//@ts-nocheck
import React, { useEffect } from "react";
import Wrapper from "../sections/WrapperHOC";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import getInitialPokemonData from "../app/reducers/getInitialPokemonData";
import getPokemonsData from "../app/reducers/getPokemonsData";
import PokemonCards from "../components/PokemonCards";
import { debounce } from "../utils/debounce";

export type Props = {
  styling: string;
};

const Search: React.FC<Props> = ({ styling }) => {
  const dispatch = useAppDispatch();

  const { allPokemon, randomPokemons } = useAppSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemons = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemons));
      // console.log("random20Pokemons:", randomPokemons);
    }
  }, [dispatch, allPokemon]);

  const getPokemons = (query: string) => {
    if (query.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(query.toLowerCase())
      );
      dispatch(getPokemonsData(pokemons));
    } else {
      const clonedPokemons = [...allPokemon];
      const randomPokemons = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemons));
    }
  };

  const betterFunction = debounce((value: string) => {
    getPokemons(value);
  }, 400);

  return (
    <div className={styling}>
      <div className="flex flex-col h-full ">
        <input
          type="text"
          className="w-full h-12 p-2 font-medium outline-none bg-opacity-70 bg-slate-700 font-raleway caret-teal-600"
          placeholder="Search Pokemon"
          onChange={(e) => {
            betterFunction(e.target.value);
          }}
        />
        <div className="max-h-[90%] overflow-y-scroll">
          {randomPokemons && randomPokemons.length > 0 && (
            <PokemonCards randomPokemons={randomPokemons} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wrapper(Search);
