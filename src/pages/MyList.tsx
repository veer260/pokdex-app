//@ts-nocheck

import React from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";

const MyList: React.FC<Props> = ({ styling }) => {
  return <div className={styling}>MyList</div>;
};

export default Wrapper(MyList);
