import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { useAppDispatch } from "../app/hooks";
import { addToCompare } from "../app/slices/PokemonSlice";
import { GeneratedPokemonType } from "../utils/type";

interface CardNavProp {
  pathname: string;
  pokemon: GeneratedPokemonType;
}

const CardNav: React.FC<CardNavProp> = ({ pathname, pokemon }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between w-full mb-2 text-lg">
      {pathname.includes("/pokemon") || pathname.includes("/search") ? (
        <FaPlus className="text-green-500" />
      ) : (
        <FaTrash className="text-red-500" />
      )}
      <IoMdGitCompare
        onClick={() => {
          dispatch(addToCompare(pokemon));
        }}
        className="text-teal-500 cursor-pointer hover:animate-pulse"
      />
    </div>
  );
};

export default CardNav;
