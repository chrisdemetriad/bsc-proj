/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import React from "react";
import { Link } from "react-router-dom";
import Search from "./../Shared/Search";
import Nav from "./../Shared/Nav";
import logo from "./../logo.png";

const headerContainer = css`
	margin-top: 5px;
	// border-bottom: 1px solid #ddd;
	// margin-bottom: 15px;
	align-items: center;
	> div {
		margin: 0;
	}
`;

const searchBoxContainer = css`
	flex: 1 1 auto;
`;

const Header = () => {
	return (
		<React.Fragment>
			<div css={headerContainer} className="clearfix d-flex">
				<div>
					<Link to="/">
						<img src={logo} alt="Logo" width="80" title="5th - BUY AND SELL" />
					</Link>
				</div>

				<div css={searchBoxContainer}>
					<Search />
				</div>

				<Nav />
			</div>
		</React.Fragment>
	);
};

export default Header;
