import React from "react";
import { useAppSelector } from "../app/hooks";
import Stat from "./Stat";

const StatComponent = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemon);
  return (
    <div className="left-0 lg:absolute bottom-4">
      {/* <h1>hello</h1> */}

      {currentPokemon?.stats.map((stat, index) => {
        // const class = `h-1 w-[${40}px] bg-primary-color`
        // console.log({ index });
        return <Stat length={stat.baseStat} index={index} name={stat.name} />;
      })}
    </div>
  );
};

export default StatComponent;
