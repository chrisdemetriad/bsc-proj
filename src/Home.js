/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Redirect } from "react-router-dom";
import Header from "./Shared/Header";
import PromoBanner from "./Shared/PromoBanner";

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
				<PromoBanner />

				{currentUser && <Redirect to="/adverts" />}
			</div>
		</React.Fragment>
	);
};

export default Home;
