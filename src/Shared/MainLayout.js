import React from "react";
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import Header from "./../Shared/Header";

const MainLayout = (props) => {
	const base = css`
		align-items: center;
		min-height: 24em;
		justify-content: center;
	`;

	return (
		<div className="container" css={base}>
			<Header />
			{props.children}
		</div>
	);
};

export default MainLayout;
