// @ts-nocheck
import React, { useEffect } from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const navigationRoutes = [
  {
    name: "Search",
    route: "/search",
  },
  {
    name: "Compare",
    route: "/compare",
  },
  {
    name: "Pokemon",
    route: "/pokemon/4",
  },
  {
    name: "My List",
    route: "/list",
  },
  {
    name: "About",
    route: "/about",
  },
];

const translate = (index: number) => {
  const underlines = document.querySelectorAll(".underline");
  for (let i = 0; i < underlines.length; i++) {
    underlines[i].style.transform = "translateX(" + index * 200 + "px)";
  }
};

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );

    console.log(index);
    translate(index);

    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <nav className="text-white font-bit min-h-[10vh] flex justify-between">
      <div className="flex items-center justify-center w-16 h-full border-white border-opacity-20 border-[1px]">
        <img src={pokeballIcon} className="w-8 h-8" alt="pokeball Icon" />
      </div>
      <div className="flex justify-center flex-grow ">
        <div className="flex items-center relative justify-evenly w-[80%]">
          {navigationRoutes.map(({ route, name }, index) => {
            return (
              <div
                key={index}
                className="box-border flex items-center justify-center flex-grow h-full cursor-pointer"
              >
                <Link className="font-medium " to={route}>
                  {name}
                </Link>
              </div>
            );
          })}

          <div className="absolute bottom-0 left-0 z-10 underline h-[3px] w-[20%] mix-blend-normal transition duration-[500ms] ease-in-out bg-white "></div>
          <div className="absolute bottom-0 left-0 z-10 underline h-[3px] w-[20%] mix-blend-normal trasition duration-[400ms] ease-in-out bg-white "></div>
          <div className="absolute bottom-0 left-0 z-10 underline h-[3px] w-[20%] mix-blend-normal transition duration-[600ms] ease-ib-out bg-white "></div>
        </div>
      </div>

      <div className="flex items-center border-[0.5px] border-white border-opacity-20 justify-center w-16 h-full text-lg text-white">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
