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

	const headerContainer = css`
		background: aliceblue;
		margin-bottom: 15px;
	`;

	return (
		<React.Fragment>
			<div css={headerContainer}>
				<div className="container">
					<Header />
				</div>
			</div>
			<div className="container" css={base}>
				{props.children}
			</div>
		</React.Fragment>
	);
};

export default MainLayout;
