// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GeneratedPokemonType, GenericPokemonType } from "../../utils/type";
import axios from "axios";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/PokemonTypes";

const getPokemonsData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: GenericPokemonType[]) => {
    const pokemonsData: GeneratedPokemonType[] = [];
    try {
      for await (const pokemon of pokemons) {
        const {
          data,
        }: { data: { id: number; types: { type: GenericPokemonType }[] } } =
          await axios.get(pokemon.url);
        let image: string = images[data.id];
        if (!image) {
          image = defaultImages[data.id];
        }

        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => ({
            [name]: pokemonTypes[name],
          })
        );

        if (image) {
          pokemonsData.push({
            image,
            types,
            name: pokemon.name,
            id: data.id,
          });
        }
      }
      //   console.log("pokemonsData:", pokemonsData);
      return pokemonsData;
    } catch (error) {
      console.log(error);
    }
    console.log("pokemons:", pokemons);
  }
);

export default getPokemonsData;
