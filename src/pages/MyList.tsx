//@ts-nocheck

import React from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";
import { useAppSelector } from "../app/hooks";
import Login from "../components/Login";

const MyList: React.FC<Props> = ({ styling }) => {
  const { userInfo } = useAppSelector(({ app }) => app);
  return (
    <div className={styling}>
      <Login />
    </div>
  );
};

export default Wrapper(MyList);
