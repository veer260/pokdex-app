//@ts-nocheck
import React from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";

const Pokemon: React.FC<Props> = ({ styling }) => {
  return <div className={styling}>Pokemons</div>;
};

export default Wrapper(Pokemon);
