// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6A6tsqxvX-FK4AfdFAFfzzEdWntp09Ho",
  authDomain: "pokedex-c35de.firebaseapp.com",
  projectId: "pokedex-c35de",
  storageBucket: "pokedex-c35de.appspot.com",
  messagingSenderId: "794528597745",
  appId: "1:794528597745:web:7135057d97ac1555160b50",
  measurementId: "G-DEG99B3TWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
