import React from "react";

interface TypeWithNameProps {
  name: string;
  image: string;
}

const TypeWithName: React.FC<TypeWithNameProps> = ({ name, image }) => {
  // console.log({ name, image });
  return (
    <div className="flex flex-col items-center text-[9px] font-bold uppercase lg:text-xs gap-y-1 ">
      <img className="w-4 h-4 lg:w-8 lg:h-8" src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default TypeWithName;
