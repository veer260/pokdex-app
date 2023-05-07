//@ts-nocheck
import React from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";
import AddPokemon from "../components/AddPokemon";
import { useAppSelector } from "../app/hooks";
import PokemonWithStrengthWeakness from "../components/PokemonWithStrengthWeakness";

const Compare: React.FC<Props> = ({ styling }) => {
  const { compareQueue } = useAppSelector(({ pokemon }) => pokemon);
  return (
    <div className={styling}>
      <div className="flex flex-col lg:flex-row h-full justify-evenly bg-[#19191f] bg-opacity-80">
        {compareQueue[0] && compareQueue.length > 0 ? (
          <PokemonWithStrengthWeakness pokemon={compareQueue[0]} />
        ) : (
          <AddPokemon />
        )}
        {compareQueue[1] && compareQueue.length > 1 ? (
          <PokemonWithStrengthWeakness pokemon={compareQueue[1]} />
        ) : (
          <AddPokemon />
        )}
        {/* {compareQueue[1] && compareQueue.length > 1 && <AddPokemon />} */}
      </div>
    </div>
  );
};

export default Wrapper(Compare);
