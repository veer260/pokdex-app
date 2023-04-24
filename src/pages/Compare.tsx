//@ts-nocheck
import React from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";

const Compare: React.FC<Props> = ({ styling }) => {
  return <div className={styling}>Compare</div>;
};

export default Wrapper(Compare);
