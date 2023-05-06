import React from "react";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router";

const NextEvolModal = () => {
  const navigate = useNavigate();
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  // @ts-ignore
  //   const keys = Object.keys(currentPokemon?.types);
  const keys: string[] = [];
  currentPokemon?.types.map((type) => {
    keys.push(Object.keys(type)[0]);
  });

  const index = currentPokemon?.evolution.findIndex((pokemon) => {
    return pokemon.pokemon.name == currentPokemon.name;
  });

  let next: number = -1;
  //@ts-ignore

  if (index !== -1 && index < currentPokemon?.evolution.length! - 1) {
    next = currentPokemon?.id! + 1;
  }
  console.log({ keys });
  return (
    <div className="absolute flex flex-col p-2 font-bold w-[300px] text-gray-200 uppercase bg-gray-600 left-2 top-2 bg-opacity-70 gap-y-2">
      <h1 className="text-xl">{currentPokemon?.name}</h1>
      <div className="flex font-bold uppercase ">
        <span className="uppercase">Type:</span>
        <div className="flex ml-2">
          {keys.map((type) => (
            <span>{type}</span>
          ))}
        </div>
      </div>
      {next > 0 && (
        <div className="relative">
          <button
            onClick={() => {
              navigate(`/pokemon/${next}`);
            }}
            className="absolute cursor-pointer p-2 right-0 text-xs w-[150px] text-gray-200 uppercase border-2 -bottom-8 border-primary-color text-medium"
          >
            See next Evolution
          </button>
        </div>
      )}
    </div>
  );
};

export default NextEvolModal;
