import { signOut } from "firebase/auth";
import React from "react";
import { IoLogOut } from "react-icons/io5";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useAppDispatch } from "../app/hooks";
import { setToast, setUser } from "../app/slices/AppSlice";

const Footer = () => {
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    await signOut(firebaseAuth);
    dispatch(setUser(undefined));
    dispatch(setToast("You've been logged out!"));
  };
  return (
    <div className="min-h-[10%] text-white flex justify-between">
      <div className="w-16 border-white border-[1px] border-opacity-20"></div>
      <div className="justify">hello</div>
      <div className="flex items-center justify-center w-16 box-border border-white border-opacity-20 border-[1px]">
        <IoLogOut
          onClick={() => {
            handleClick();
          }}
          className="text-2xl text-red-500 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Footer;
