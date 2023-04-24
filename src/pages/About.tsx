//@ts-nocheck
import React from "react";
import Wrapper from "../sections/WrapperHOC";
import { Props } from "./Search";

const About: React.FC<Props> = ({ styling }) => {
  return <div className={styling}>About</div>;
};

export default Wrapper(About);
