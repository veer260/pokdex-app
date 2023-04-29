//@ts-nocheck

import React, { useEffect } from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Login from "../components/Login";
import { getUserPokemons } from "../app/reducers/getUserpokemons";
import PokemonCards from "../components/PokemonCards";

const MyList: React.FC<Props> = ({ styling }) => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(({ app }) => app);
  const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
  useEffect(() => {
    console.log("inside useEffect");
    dispatch(getUserPokemons());
  }, [dispatch, userInfo]);
  return (
    <div className={styling}>
      {userInfo?.email && userPokemons?.length ? (
        <div className="w-full h-full overflow-y-scroll">
          <PokemonCards randomPokemons={userPokemons} />
        </div>
      ) : (
        <Login />
      )}

      {/* <Login /> */}
    </div>
  );
};

export default Wrapper(MyList);
