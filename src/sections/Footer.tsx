import React from "react";
import { IoLogOut } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="h-[10%] text-white flex justify-between">
      <div className="w-16 border-white border-[1px] border-opacity-20"></div>
      <div className="justify">hello</div>
      <div className="flex items-center justify-center w-16 box-border border-white border-opacity-20 border-[1px]">
        <IoLogOut className="text-2xl text-red-500 " />
      </div>
    </div>
  );
};

export default Footer;
