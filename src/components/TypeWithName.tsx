import React from "react";

interface TypeWithNameProps {
  name: string;
  image: string;
}

const TypeWithName: React.FC<TypeWithNameProps> = ({ name, image }) => {
  // console.log({ name, image });
  return (
    <div className="flex flex-col items-center text-xs font-bold uppercase gap-y-1 ">
      <img className="w-8 h-8" src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default TypeWithName;
