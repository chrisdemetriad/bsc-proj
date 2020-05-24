import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Header from "./../Shared/Header";
import Footer from "./../Shared/Footer/Footer";
import GdprPopup from "./../Shared/GdprPopup";

const MainLayout = (props) => {
	const container = css`
		position: relative;
		h1,
		h2 {
			margin-bottom: 20px;
		}
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

	return (
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
	);
};

export default MainLayout;
