import React, { useState } from "react";
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
  const [add, setAdd] = useState(false);
  const [trash, setTrash] = useState(false);
  const [compare, setCompare] = useState(false);
  // const handle = () => {
  //   // console.log("currently Over")
  //   setAdd(true);
  // };

  // const handleLeave = () => {
  //   setAdd(false);
  // };
  return (
    <div className="flex justify-between w-full mb-2 text-lg">
      {pathname.includes("/pokemon") || pathname.includes("/search") ? (
        <div className="relative">
          <FaPlus
            onMouseOver={() => setAdd(true)}
            onMouseLeave={() => setAdd(false)}
            onClick={() => {
              dispatch(addPokemonToList(pokemon));
            }}
            className="text-green-500 transition-all duration-200 cursor-pointer hover:animate-grow"
          />
          <span
            className={`absolute transition text-xs bg-slate-400 w-[60px] -top-4 right-6 p-1 rounded-sm ${
              add ? "flex" : "hidden"
            } `}
          >
            Add to your list
          </span>
        </div>
      ) : (
        <div className="relative">
          <FaTrash
            onMouseOver={() => setTrash(true)}
            onMouseLeave={() => setTrash(false)}
            onClick={() => {
              //@ts-ignore
              dispatch(removePokemonFromUserList({ id: pokemon.firebaseId }));
            }}
            className="text-red-500 cursor-pointer hover:animate-grow"
          />
          <span
            className={`absolute transition text-xs bg-slate-400 w-[60px] -top-4 right-6 p-1 rounded-sm ${
              trash ? "flex" : "hidden"
            } `}
          >
            Delete from list
          </span>
        </div>
      )}
      <div className="relative">
        <IoMdGitCompare
          onMouseOver={() => setCompare(true)}
          onMouseLeave={() => setCompare(false)}
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
        <span
          className={`absolute transition text-xs bg-slate-400 w-[60px] -top-4 left-6 p-1 rounded-sm ${
            compare ? "flex" : "hidden"
          } `}
        >
          Add to Compare
        </span>
      </div>
    </div>
  );
};

export default CardNav;
