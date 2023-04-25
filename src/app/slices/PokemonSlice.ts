import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../utils/type";

const initialState: PokemonTypeInitialState = {
  allPokemon: [],
};

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export default PokemonSlice;
