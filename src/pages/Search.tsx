//@ts-nocheck
import React from "react";
import Wrapper from "../sections/WrapperHOC";

export type Props = {
  styling: string;
};

const Search: React.FC<Props> = ({ styling }) => {
  return <div className={styling}>Search</div>;
};

export default Wrapper(Search);
