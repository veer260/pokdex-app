import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";
import { setToast } from "../slices/AppSlice";

export const removePokemonFromUserList = createAsyncThunk(
  "pokemons/removeFromList",
  async ({ id }: { id: string }, { dispatch }) => {
    try {
      await deleteDoc(doc(pokemonListRef, id));
      dispatch(setToast("Pokemon successfully removed!"));
      return { id };
    } catch (error) {
      console.log({ error });
    }
  }
);
