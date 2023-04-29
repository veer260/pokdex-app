import React from "react";
import { PokemonTypeInterface, UserPokemonsType } from "../utils/type";
import { pokemonTypes } from "../utils/PokemonTypes";
import PokemonProperty from "./PokemonProperty";
import { useAppDispatch } from "../app/hooks";
import { removeFromCompare } from "../app/slices/PokemonSlice";
import { addPokemonToList } from "../app/reducers/addPokemonToList";

interface PokemonWithStrengthWeaknessProps {
  pokemon: UserPokemonsType;
}

const createTypeImgArray = (
  property: string,
  types: PokemonTypeInterface[]
) => {
  const typeImgArray: { name: string; img: string }[] = [];
  types.forEach((type) => {
    const pokemonType = Object.keys(type)[0];
    // @ts-ignore
    // console.log(type[pokemonType][property]);
    const arr = type[pokemonType][property].map((type) => {
      // @ts-ignore
      typeImgArray.push({ name: type, img: pokemonTypes[type].image });
    });
  });
  return typeImgArray;
  // console.log({ typeImgArray });
};

// createTypeImgArray('waekness', )

const PokemonWithStrengthWeakness: React.FC<
  PokemonWithStrengthWeaknessProps
> = ({ pokemon }) => {
  // console.log({ pokemon });

  const dispatch = useAppDispatch();
  const typeImgArray = createTypeImgArray("resistance", pokemon.types);
  // console.log({ typeImgArray });
  // const images = pokemon.types.map((type) => {
  //   const image = Object.keys(type).map((key) => {

  //   })
  // })
  const images: string[] = [];
  // const keys = Object.keys(pokemon.types);
  pokemon.types.map((type) => {
    //@ts-ignore
    const image = pokemonTypes[Object.keys(type)[0]].image;
    console.log({ image });
    images.push(image);
  });
  // console.log({ keys });

  return (
    <div className="relative flex flex-col flex-1 w-full px-4 pt-6 ">
      <div className="flex flex-col items-center w-full">
        <h2 className="font-bold tracking-widest uppercase">{pokemon.name}</h2>
        <div>
          <img className="w-[130px]" src={pokemon.image} alt="" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex flex-col w-full p-2 pl-4 overflow-y-scroll ">
        {/* Types */}
        <div className="flex items-center my-2 ">
          <h4 className="w-[30%] uppercase text-gray-300 font-semibold text-sm tracking-widest">
            type
          </h4>
          <div className="flex gap-x-2">
            {images.map((image) => {
              return (
                <div>
                  <img className="w-8 h-8" src={image} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <PokemonProperty
          property="strength"
          typeWithImg={createTypeImgArray("strength", pokemon.types)}
        />
        <PokemonProperty
          property="resistance"
          typeWithImg={createTypeImgArray("resistance", pokemon.types)}
        />
        <PokemonProperty
          property="vulnerable"
          typeWithImg={createTypeImgArray("vulnerable", pokemon.types)}
        />
        <PokemonProperty
          property="weakness"
          typeWithImg={createTypeImgArray("weakness", pokemon.types)}
        />

        <div className="flex h-[50px] w-full mt-2 ">
          <button
            onClick={() => {
              dispatch(addPokemonToList(pokemon));
            }}
            className="flex-1 h-full uppercase transition-all duration-200 ease-in border border-gray-300 hover:bg-teal-500 border-1"
          >
            Add
          </button>
          <button className="flex-1 h-full uppercase transition-all duration-200 ease-in border border-gray-300 hover:bg-green-500 border-1">
            view
          </button>
          <button
            className="flex-1 h-full uppercase transition-all duration-200 ease-in border border-gray-300 hover:bg-red-500 border-1"
            onClick={() => {
              dispatch(removeFromCompare(pokemon));
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonWithStrengthWeakness;
