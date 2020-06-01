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
		margin: 10px;
	}
`;

const searchBoxContainer = css`
	flex: 1 1 auto;
`;

// const logoContainer = css`
// 	background: #372a2a;
// 	display: inline-block;
// 	height: 44px;
// 	text-align: center;
// 	letter-spacing: -1px;
// 	position: relative;
// 	color: white;
// 	width: 60px;
// 	&:before {
// 		border-bottom: 8px solid #372a2a;
// 		border-left: 30px solid transparent;
// 		border-right: 30px solid transparent;
// 		content: "";
// 		height: 0;
// 		left: 0;
// 		position: absolute;
// 		top: -8px;
// 		width: 0;
// 	}
// 	a,
// 	a:hover {
// 		color: white;
// 		text-decoration: none;
// 	}
// `;

// const logo = css`
// 	font-weight: 900;
// `;

const Header = () => {
	return (
		<React.Fragment>
			<div css={headerContainer} className="clearfix d-flex">
				<div>
					{/* <div css={logoContainer}> */}
					<div>
						<Link to="/">
							{/* <h1 css={logo}>5th</h1> */}
							<img src={logo} alt="Logo" width="80" title="7th" />
						</Link>
					</div>
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
