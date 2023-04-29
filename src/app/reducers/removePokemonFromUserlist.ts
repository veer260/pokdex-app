import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";

export const removePokemonFromUserList = createAsyncThunk(
  "pokemons/removeFromList",
  async ({ id }: { id: string }) => {
    try {
      await deleteDoc(doc(pokemonListRef, id));
      return { id };
    } catch (error) {
      console.log({ error });
    }
  }
);
