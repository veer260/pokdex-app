import { createSlice } from "@reduxjs/toolkit";
import {
  GeneratedPokemonType,
  PokemonTypeInitialState,
} from "../../utils/type";
import getInitialPokemonData from "../reducers/getInitialPokemonData";
import getPokemonsData from "../reducers/getPokemonsData";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
};

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: GeneratedPokemonType) => pokemon.id == action.payload.id
      );
      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: GeneratedPokemonType) => pokemon.id == action.payload.id
      );
      console.log(action.payload);
      let queue = [...state.compareQueue];
      console.log({ queue });
      // console.log("removed :", queue.splice(index, 1));

      queue.splice(index, 1);
      state.compareQueue = queue;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonsData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
  },
});

export const { addToCompare, removeFromCompare } = PokemonSlice.actions;

export default PokemonSlice;
