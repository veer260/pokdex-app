//@ts-nocheck
import React, { useEffect } from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { PokemonAPI, PokemonRoute, pokemonTabs } from "../utils/Constants";
import Description from "./Pokemon/Description";
import Evolution from "./Pokemon/Evolution";
import Locations from "./Pokemon/Locations";
import CapableMoves from "./Pokemon/CapableMoves";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { images, defaultImages } from "../utils/getPokemonImages";
import extractColors from "extract-colors";
import axios from "axios";
import { pokemonTypes } from "../utils/PokemonTypes";
import { setCurrentPokemon } from "../app/slices/PokemonSlice";

const Pokemon: React.FC<Props> = ({ styling }) => {
  const params = useParams();

  const dispatch = useAppDispatch();
  // console.log({ params });

  const getEvolutionRecursive = (evolutionChain, level, evolutionData) => {
    if (!evolutionChain.evolves_to.length) {
      return evolutionData.push({
        pokemon: {
          ...evolutionChain.species,
          url: evolutionChain.species.url.replace("pokemon-species", "pokemon"),
        },
        level,
      });
    }

    evolutionData.push({
      pokemon: {
        ...evolutionChain.species,
        url: evolutionChain.species.url.replace("pokemon-species", "pokemon"),
      },
      level,
    });

    return getEvolutionRecursive(
      evolutionChain.evolves_to[0],
      level++,
      evolutionData
    );
  };

  const getEvolutionData = (evolutionChain) => {
    const evolutionData = [];
    getEvolutionRecursive(evolutionChain, 1, evolutionData);
    return evolutionData;
  };

  const getPokemonInfo = async (image) => {
    // const pokemonURL = `${PokemonRoute}/${params.id}`;
    // console.log({ pokemonURL });
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    const { data: encountersData } = await axios.get(
      data.location_area_encounters
    );
    console.log({
      " data from pokemon id get request": data,
    });

    const stats = [];
    data.stats.map((stat) => {
      stats.push({
        name: stat.stat.name,
        baseStat: stat.base_stat,
      });
    });

    console.log({ stats });

    const {
      data: {
        evolution_chain: { url: evolutionURL },
      },
    } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
    );
    const { data: evolutionData } = await axios.get(evolutionURL);

    const pokemonAbilities = {
      abilities: data.abilities.map(({ ability }) => ability.name),
      moves: data.moves.map(({ move }) => move.name),
    };

    const encounters = [];

    encountersData.forEach((encounter) => {
      encounters.push(
        encounter.location_area.name.toUpperCase().split("-").join(" ")
      );
    });

    const evolution = getEvolutionData(evolutionData.chain);

    // console.log({ encounters });

    const types = [];

    data.types.forEach(({ type }) => {
      types.push({ [type.name]: pokemonTypes[type.name] });
    });

    dispatch(
      setCurrentPokemon({
        types,
        id: data.id,
        name: data.name,
        image,
        evolution,
        encounters,
        pokemonAbilities,
        stats,
      })
    );

    // console.log({ types });
  };

  useEffect(() => {
    const imageElemet = document.createElement("img");
    imageElemet.src = images[params.id];
    // console.log("img:", imageElemet.src);
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
      // console.log("helloe");
      const color = await extractColors(imageElemet.src, options);
      const root = document.documentElement;
      // console.log("style:", root.style);
      root.style.setProperty("--accent-color", color[0].hex.split('"')[0]);
    };
    getColor();
    let image = images[params.id];
    if (!image) {
      image = defaultImages[params.id];
    }

    getPokemonInfo(image);
  }, [params]);

  const { currentPokemonTab } = useAppSelector((state) => state.app);
  return (
    <div className={styling}>
      <div className="h-[100%] overflow-y-scroll relative">
        {currentPokemonTab == pokemonTabs.description && <Description />}
        {currentPokemonTab == pokemonTabs.evolution && <Evolution />}
        {currentPokemonTab == pokemonTabs.locations && <Locations />}
        {currentPokemonTab == pokemonTabs.moves && <CapableMoves />}
      </div>
    </div>
  );
};

export default Wrapper(Pokemon);
