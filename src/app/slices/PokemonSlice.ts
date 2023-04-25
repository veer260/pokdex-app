import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../utils/type";
import getInitialPokemonData from "../reducers/getInitialPokemonData";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
};

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
  },
});

export default PokemonSlice;
