import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonTypeInterface } from "../../utils/type";
import { RootState } from "../store";
import { setToast } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";

export const addPokemonToList = createAsyncThunk(
  "/pokemons/addPokemon",
  async (
    pokemon: {
      name: string;
      id: number;
      types: PokemonTypeInterface[];
      stats?: {
        name: string;
        value: string;
      }[];
    },
    { getState, dispatch }
  ) => {
    try {
      const {
        app: { userInfo },
        pokemon: { userPokemons },
      } = getState() as RootState;
      if (!userInfo?.email) {
        dispatch(
          setToast("Please login in order to add Pokemon to your collection")
        );
      }
      const index = userPokemons?.findIndex(
        (userPokemon) => userPokemon.id == pokemon.id
      );
      if (index == -1) {
        const types: string[] = [];

        pokemon.types.forEach((type) => {
          types.push(Object.keys(type)[0].toString());
        });

        await addDoc(pokemonListRef, {
          pokemon: { name: pokemon.name, id: pokemon.id, types },
          email: userInfo?.email,
        });

        dispatch(
          setToast(`${pokemon.name.toUpperCase()} added to your collection`)
        );
      } else {
        dispatch(
          setToast(
            `${pokemon.name.toUpperCase()} already part of your collection`
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
);
