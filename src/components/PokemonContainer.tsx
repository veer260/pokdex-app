import React from "react";

interface PokemonContainerProps {
  image: string;
}

const PokemonContainer: React.FC<PokemonContainerProps> = ({ image }) => {
  return (
    <div className="mt-12">
      <div className="relative">
        <div className="w-[300px] h-[300px]  flex items-center  border-4 rounded-full border-primary-color  justify-center ">
          <div className="h-[200px] w-[200px] border-4 rounded-full border-primary-color ">
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute -left-10 flex flex-col gap-8 -z-30 bottom-[140px] -rotate-45">
          <div className="w-[400px] h-[2px] bg-primary-color"></div>
          <div className="w-[400px] h-[2px] bg-primary-color"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonContainer;
