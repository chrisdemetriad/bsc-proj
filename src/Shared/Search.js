import React from "react";
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

const searchInput = css`
	width: 50%;
`;

const Search = () => {
	return <input css={searchInput} className="form-control" type="text" placeholder="What are you looking for.." />;
};
export default Search;
