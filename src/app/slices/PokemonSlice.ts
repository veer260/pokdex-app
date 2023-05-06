import { createSlice } from "@reduxjs/toolkit";
import {
  GeneratedPokemonType,
  PokemonTypeInitialState,
} from "../../utils/type";
import getInitialPokemonData from "../reducers/getInitialPokemonData";
import getPokemonsData from "../reducers/getPokemonsData";
import { getUserPokemons } from "../reducers/getUserpokemons";
import { removePokemonFromUserList } from "../reducers/removePokemonFromUserlist";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
  currentPokemon: undefined,
};

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: GeneratedPokemonType) => {
          return pokemon.id == action.payload.id;
        }
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
      // console.log(action.payload);
      let queue = [...state.compareQueue];
      // console.log({ queue });
      // console.log("removed :", queue.splice(index, 1));

      queue.splice(index, 1);
      state.compareQueue = queue;
    },
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonsData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
    builder.addCase(getUserPokemons.fulfilled, (state, action) => {
      //@ts-ignore
      state.userPokemons = action.payload;
    });
    builder.addCase(removePokemonFromUserList.fulfilled, (state, action) => {
      //@ts-ignore
      let userPokemons = [...state.userPokemons];
      //@ts-ignore
      console.log({ "id from payload:": action.payload.id });
      const index = userPokemons.findIndex(
        (pokemon) => pokemon.firebaseId == action.payload?.id
      );
      console.log({ index });
      userPokemons.splice(index, 1);
      state.userPokemons = userPokemons;
    });
  },
});

export const { addToCompare, removeFromCompare, setCurrentPokemon } =
  PokemonSlice.actions;

export default PokemonSlice;
