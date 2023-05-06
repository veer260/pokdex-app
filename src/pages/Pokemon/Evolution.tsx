import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { GenericPokemonType } from "../../utils/type";
import getPokemonsData from "../../app/reducers/getPokemonsData";
import { FaLessThan } from "react-icons/fa";
import PokemonCards from "../../components/PokemonCards";

const Evolution = () => {
  const dispatch = useAppDispatch();
  const { currentPokemon, randomPokemons } = useAppSelector(
    (state) => state.pokemon
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      //@ts-ignore
      const pokemons: GenericPokemonType[] = currentPokemon?.evolution.map(
        ({ pokemon }) => pokemon
      );
      await dispatch(getPokemonsData(pokemons));
      setIsLoading(false);
    };
    fetchPokemon();
  }, [dispatch, currentPokemon]);

  if (isLoading) {
    return <div className="text-white">Loading ...</div>;
  }
  return (
    <div>
      <PokemonCards randomPokemons={randomPokemons!} />
    </div>
  );
};

export default Evolution;
