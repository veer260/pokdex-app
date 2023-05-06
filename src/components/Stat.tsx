import React, { useEffect } from "react";

type StatProps = {
  length: number;
  index: number;
  name: string;
};

const Stat: React.FC<StatProps> = ({ length, index, name }) => {
  useEffect(() => {
    const divs = document.querySelectorAll(".index");
    //@ts-ignore
    divs[index].style.width = `${length}px`;
  }, []);
  // const divs = document.querySelectorAll(".index");
  // //@ts-ignore
  // divs[index].style.width = `${length}px`;

  // console.log(divs[index]);
  return (
    <div className=" items-center w-[400px] flex justify-between gap-2 text-gray-200 ">
      <div className="flex justify-end flex-1">
        <span className="text-xs font-medium uppercase">{name}:</span>
      </div>

      <h3 className="flex text-sm">{length}</h3>
      <div className="flex justify-start flex-1">
        <div className="h-[3px] rounded-md bg-primary-color index"></div>
      </div>
    </div>
  );
};

export default Stat;
