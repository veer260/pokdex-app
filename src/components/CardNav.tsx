import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";

interface CardNavProp {
  pathname: string;
}

const CardNav: React.FC<CardNavProp> = ({ pathname }) => {
  return (
    <div className="flex justify-between w-full mb-2 text-lg">
      {pathname.includes("/pokemon") || pathname.includes("/search") ? (
        <FaPlus className="text-green-500" />
      ) : (
        <FaTrash className="text-red-500" />
      )}
      <IoMdGitCompare className="text-teal-500" />
    </div>
  );
};

export default CardNav;
