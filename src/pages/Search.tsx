//@ts-nocheck
import React, { useEffect } from "react";
import Wrapper from "../sections/WrapperHOC";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import getInitialPokemonData from "../app/reducers/getInitialPokemonData";
import getPokemonsData from "../app/reducers/getPokemonsData";
import PokemonCards from "../components/PokemonCards";

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

  return (
    <div className={styling}>
      <div>
        {randomPokemons && randomPokemons.length > 0 && (
          <PokemonCards randomPokemons={randomPokemons} />
        )}
      </div>
    </div>
  );
};

export default Wrapper(Search);
