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
		@media (max-width: 1110px) {
			max-width: 100%;
		}
	`;

	const headerContainer = css`
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;
		margin-bottom: 15px;
		> div {
			@media (max-width: 1110px) {
				margin: 0;
				width: 100%;
				max-width: 100%;
			}
		}
	`;

	const footerContainer = css`
		box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.18) !important;
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
