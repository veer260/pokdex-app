import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonsRoute } from "../../utils/Constants";

const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const { data } = await axios.get(PokemonsRoute);
      const { results } = data;
      // console.log(results);
      return results;
    } catch (error) {}
  }
);

export default getInitialPokemonData;
