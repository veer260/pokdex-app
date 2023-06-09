import React from "react";

interface PokemonPropertyProps {
  property: string;
  typeWithImg: { name: string; img: string }[];
}

const PokemonProperty: React.FC<PokemonPropertyProps> = ({
  property,
  typeWithImg,
}) => {
  return (
    <div className="flex items-center w-full my-[2px] lg:my-2 ">
      <h4 className="w-[30%] uppercase font-semibold text-gray-300 tracking-widest text-[9px] lg:text-sm">
        {property}
      </h4>
      <div className="flex flex-wrap gap-x-2 justify-evenly ">
        {typeWithImg.map((type) => {
          return (
            <div>
              <img className="w-4 h-4 lg:w-8 lg:h-8" src={type.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonProperty;
