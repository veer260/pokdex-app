import React from "react";
import { useAppSelector } from "../app/hooks";

const NextEvolModal = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div>
      <h1>{currentPokemon?.name}</h1>
      <div>
        <span>Title</span>
      </div>
    </div>
  );
};

export default NextEvolModal;
