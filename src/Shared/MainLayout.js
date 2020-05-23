import React from "react";
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import Header from "./../Shared/Header";
import Footer from "./../Shared/Footer/Footer";
import GdprPopup from "./../Shared/GdprPopup";

const MainLayout = (props) => {
	const container = css`
		position: relative;
	`;

	const mainContainer = css`
		align-items: center;
		min-height: 24em;
		justify-content: center;
	`;

	const headerContainer = css`
		background: aliceblue;
		margin-bottom: 15px;
	`;

	const footerContainer = css`
		background: aliceblue;
		margin-top: 15px;
	`;

	const gdprContainer = css`
		position: absolute;
		right: 0;
		bottom: 0;
		background: greenyellow;
		padding: 20px;
		width: 300px;
		font-size: 14px;
		border-radius: 2px;
	`;

	return (
		<React.Fragment>
			<div css={container}>
				<div css={headerContainer}>
					<div className="container">
						<Header />
					</div>
				</div>
				<div className="container" css={mainContainer}>
					{props.children}
				</div>
				<div css={footerContainer}>
					<div className="container">
						<Footer />
					</div>
				</div>

				<GdprPopup />
			</div>
		</React.Fragment>
	);
};

export default MainLayout;
