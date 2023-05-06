//@ts-nocheck
import React from "react";
import { Props } from "./Search";
import Wrapper from "../sections/WrapperHOC";

const SelectPokemon: React.FC<Props> = ({ styling }) => {
  return (
    <div className={styling}>
      <div className="flex items-center justify-center w-full h-full tracking-widest text-gray-200 uppercase text-bold">
        You've not selected any pokemon yet
      </div>
    </div>
  );
};

export default Wrapper(SelectPokemon);
