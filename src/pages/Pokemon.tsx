//@ts-nocheck
import React, { useEffect } from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";
import { useAppSelector } from "../app/hooks";
import { PokemonRoute, pokemonTabs } from "../utils/Constants";
import Description from "./Pokemon/Description";
import Evolution from "./Pokemon/Evolution";
import Locations from "./Pokemon/Locations";
import CapableMoves from "./Pokemon/CapableMoves";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { images, defaultImages } from "../utils/getPokemonImages";
import extractColors from "extract-colors";

const Pokemon: React.FC<Props> = ({ styling }) => {
  const params = useParams();

  useEffect(() => {
    const imageElemet = document.createElement("img");
    imageElemet.src = images[params.id];
    console.log("img:", imageElemet.src);
    const options = {
      pixels: 10000,
      distance: 1,
      splitPower: 10,
      colorValidator: (red, green, blue, alpha = 255) => alpha > 250,
      saturationDistance: 0.2,
      lightnessDistance: 0.2,
      hueDistance: 0.083333333,
    };
    const getColor = async () => {
      console.log("helloe");
      const color = await extractColors(imageElemet.src, options);
      const root = document.documentElement;
      console.log("style:", root.style);
      root.style.setProperty("--accent-color", color[0].hex.split('"')[0]);
    };
    getColor();
    let image = images[params.id];
    if (!image) {
      image = defaultImages[params.id];
    }

    // getPokemonInfo(image);
  }, []);
  const { currentPokemonTab } = useAppSelector((state) => state.app);
  return (
    <div className={styling}>
      <div>
        {currentPokemonTab == pokemonTabs.description && <Description />}
        {currentPokemonTab == pokemonTabs.evolution && <Evolution />}
        {currentPokemonTab == pokemonTabs.locations && <Locations />}
        {currentPokemonTab == pokemonTabs.moves && <CapableMoves />}
      </div>
    </div>
  );
};

export default Wrapper(Pokemon);
