import React from "react";
import { PokemonTypeInterface } from "../utils/type";
import TypeWithName from "./TypeWithName";

interface TypesFooterProps {
  types: PokemonTypeInterface[];
}

const TypesFooter: React.FC<TypesFooterProps> = ({ types }) => {
  return (
    <div className="flex justify-center gap-x-16 w-[70%] mt-4 mx-auto">
      {types.length > 0 &&
        types.map((type) => {
          const name = Object.keys(type)[0];
          const image = type[name].image;
          return <TypeWithName name={name} image={image} />;
        })}
    </div>
  );
};

export default TypesFooter;
