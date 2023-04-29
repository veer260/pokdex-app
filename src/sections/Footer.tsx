import { signOut } from "firebase/auth";
import React from "react";
import { IoLogOut } from "react-icons/io5";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setToast, setUser } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/Constants";
import { setPokemonTab } from "../app/slices/AppSlice";
import { useLocation } from "react-router";

const Footer = () => {
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    await signOut(firebaseAuth);
    dispatch(setUser(undefined));
    dispatch(setToast("You've been logged out!"));
  };

  const { currentPokemonTab } = useAppSelector((state) => state.app);

  const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Locations",
    },
    {
      name: pokemonTabs.moves,
      value: "Moves",
    },
  ];

  const { pathname } = useLocation();
  return (
    <div className="min-h-[10%] text-white flex justify-between">
      <div className="w-16 border-white border-[1px] border-opacity-20"></div>
      <div className="flex w-full text-white">
        {pathname.includes("/pokemon") &&
          routes.map((route) => {
            return (
              <div
                onClick={() => {
                  dispatch(setPokemonTab(route.name));
                }}
                className={
                  "flex items-center justify-center hover:bg-primary-color transition-all duration-300 ease-in cursor-pointer  flex-1 " +
                  // " active"
                  (route.name == currentPokemonTab ? " bg-primary-color" : "")
                }
              >
                <span className="text-sm font-semibold tracking-widest text-gray-300 uppercase">
                  {route.name}
                </span>
              </div>
            );
          })}
      </div>
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
