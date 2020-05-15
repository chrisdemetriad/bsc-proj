/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Redirect } from "react-router-dom";
import Header from "./Shared/Header";

const base = css`
	align-items: center;
	min-height: 24em;
	justify-content: center;
`;

const Home = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<React.Fragment>
			<div css={base} className="container">
				<Header />
				<div className="">
					<h1 className="text1">Welcome to Whatever</h1>

					{currentUser && <Redirect to="/adverts" />}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
