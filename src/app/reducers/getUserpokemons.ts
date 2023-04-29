import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getDocs, query, where } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";
import { pokemonTypes } from "../../utils/PokemonTypes";
import { PokemonTypeInterface, UserPokemonsType } from "../../utils/type";
import { images, defaultImages } from "../../utils/getPokemonImages";

export const getUserPokemons = createAsyncThunk(
  "pokemons/userList",
  async (args, { getState }) => {
    try {
      const {
        app: { userInfo },
      } = getState() as RootState;
      if (!userInfo?.email) {
        return;
      }

      const firebaseQuery = query(
        pokemonListRef,
        where("email", "==", userInfo.email)
      );
      const pokemons = await getDocs(firebaseQuery);
      const userPokemons: UserPokemonsType[] = [];

      if (pokemons.docs.length) {
        // const userPokemons: UserPokemonsType[] = [];
        // pokemons.forEach(async (fetchedPokemon) => {
        //   const pokemon = await fetchedPokemon.data();
        //   console.log(pokemon.email, pokemon.pokemon);
        // });
        // console.log({ pokemons });
        // const types: PokemonTypeInterface[] = [];
        pokemons.forEach(async (fetchedPokemon) => {
          const types: PokemonTypeInterface[] = [];
          const pokemonData = await fetchedPokemon.data();
          //   console.log({ pokemon: pokemonData });
          // @ts-ignore
          let image = images[pokemonData.pokemon.id];
          if (!image) {
            // @ts-ignore
            image = defaultImages[pokemonData.pokemon.id];
          }
          pokemonData.pokemon.types.forEach((type: any) => {
            // @ts-ignore
            types.push({ [type]: pokemonTypes[type] });
          });

          userPokemons.push({
            name: pokemonData.pokemon.name,
            id: pokemonData.pokemon.id,
            image: image,
            types: types,
            firebaseId: fetchedPokemon.id,
          });

          //   console.log({ types });
        });
        // console.log({ userPokemons });
      }
      return userPokemons;
    } catch (error) {
      console.log({ error });
    }
  }
);
