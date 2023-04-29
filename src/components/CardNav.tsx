import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { useAppDispatch } from "../app/hooks";
import { addToCompare } from "../app/slices/PokemonSlice";
import { GeneratedPokemonType, UserPokemonsType } from "../utils/type";
import { setToast } from "../app/slices/AppSlice";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { removePokemonFromUserList } from "../app/reducers/removePokemonFromUserlist";

interface CardNavProp {
  pathname: string;
  pokemon: UserPokemonsType;
}

const CardNav: React.FC<CardNavProp> = ({ pathname, pokemon }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between w-full mb-2 text-lg">
      {pathname.includes("/pokemon") || pathname.includes("/search") ? (
        <FaPlus
          onClick={() => {
            dispatch(addPokemonToList(pokemon));
          }}
          className="text-green-500 transition-all duration-200 cursor-pointer hover:animate-grow"
        />
      ) : (
        <FaTrash
          onClick={() => {
            //@ts-ignore
            dispatch(removePokemonFromUserList({ id: pokemon.firebaseId }));
          }}
          className="text-red-500"
        />
      )}
      <IoMdGitCompare
        onClick={() => {
          dispatch(addToCompare(pokemon));
          dispatch(
            setToast(
              `You can now compare ${pokemon.name.toUpperCase()} with other pokemons`
            )
          );
        }}
        className="text-teal-500 cursor-pointer hover:animate-pulse"
      />
    </div>
  );
};

export default CardNav;
