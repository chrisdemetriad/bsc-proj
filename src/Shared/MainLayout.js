import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BaseProvider } from "./../Shared/BaseContext";

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

	return (
		<BaseProvider>
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
		</BaseProvider>
	);
};

export default MainLayout;
