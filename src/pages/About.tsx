//@ts-nocheck
import React from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";

const About: React.FC<Props> = ({ styling }) => {
  return (
    <div className={styling}>
      <div className="p-6">
        <p>
          {" "}
          The Pokédex (ポケモン図鑑ずかん, Pokemon Zukan, Illustrated Pokémon
          Encyclopedia) is an electronic device created and designed to catalog
          and provide information regarding the various species of Pokémon
          featured in the Pokémon video game, anime and manga series. The name
          Pokédex is a neologism including "Pokémon" (which itself is a
          portmanteau of "pocket" and "monster") and "index". The Japanese name
          is simply "Pokémon Encyclopedia", as it can feature every Pokémon on
          it, depending on the Pokédex.
        </p>
      </div>
    </div>
  );
};

export default Wrapper(About);
