/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth";
import app from "../.base";

const Nav = () => {
	let location = useLocation();
	let path = location.pathname;

	const { currentUser } = useContext(AuthContext);
	console.log(path);

	const routesContainer = css`
		> a {
			margin-left: 30px;
		}
	`;

	return (
		<React.Fragment>
			<div css={routesContainer}>
				{(() => {
					switch (path) {
						case "/account":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/adverts">
										Adverts
									</NavLink>
									<NavLink activeClassName="active" to="/account/settings">
										Settings
									</NavLink>
								</React.Fragment>
							);
						case "/account/settings":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/adverts">
										Adverts
									</NavLink>
									<NavLink activeClassName="active" to="/account">
										My adverts
									</NavLink>
								</React.Fragment>
							);
						case "/":
							return (
								<React.Fragment>
									{!currentUser && (
										<React.Fragment>
											<NavLink activeClassName="active" to="/signup">
												Sign up
											</NavLink>
											<NavLink activeClassName="active" to="/login">
												Log in
											</NavLink>
										</React.Fragment>
									)}
									{currentUser && (
										<React.Fragment>
											<NavLink activeClassName="active" to="/post">
												Post advert
											</NavLink>
											<NavLink activeClassName="active" to="/account">
												My account
											</NavLink>
										</React.Fragment>
									)}
								</React.Fragment>
							);
						case "/signup":
							return;
						case "/login":
							return;
						case "/adverts":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/post">
										Post advert
									</NavLink>
									<NavLink activeClassName="active" to="/account/settings">
										Settings
									</NavLink>
									<NavLink activeClassName="active" to="/account">
										My account
									</NavLink>
								</React.Fragment>
							);
						case "/advert":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/post">
										Post advert
									</NavLink>
									<NavLink activeClassName="active" to="/account/settings">
										Settings
									</NavLink>
									<NavLink activeClassName="active" to="/account">
										My account
									</NavLink>
								</React.Fragment>
							);
						default:
							return;
					}
				})()}

				{currentUser && (
					<NavLink activeClassName="active" to="/account" onClick={() => app.auth().signOut()}>
						Sign out
					</NavLink>
				)}
			</div>
		</React.Fragment>
	);
};

export default Nav;
