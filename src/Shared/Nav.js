/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth";
import app from "../.base";
import { AiOutlineLogout, AiOutlineLogin, AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { FiUser, FiSettings, FiList } from "react-icons/fi";

const Nav = () => {
	let location = useLocation();
	let path = location.pathname;

	const { currentUser } = useContext(AuthContext);

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
						case "/account/myadverts":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/adverts">
										<FiList /> Adverts
									</NavLink>
									<NavLink activeClassName="active" to="/account/favourites">
										<FiSettings /> My favourites
									</NavLink>
								</React.Fragment>
							);
						case "/account/favourites":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/adverts">
										<FiList /> Adverts
									</NavLink>
									<NavLink activeClassName="active" to="/account/myadverts">
										<AiOutlineUser /> My adverts
									</NavLink>
								</React.Fragment>
							);
						case "/":
							return (
								<React.Fragment>
									{!currentUser && (
										<React.Fragment>
											<NavLink activeClassName="active" to="/signup">
												<AiOutlineUserAdd /> Sign up
											</NavLink>
											<NavLink activeClassName="active" to="/login">
												<AiOutlineLogin /> Log in
											</NavLink>
										</React.Fragment>
									)}
									{currentUser && (
										<React.Fragment>
											<NavLink activeClassName="active" to="/post" className="btn btn-primary">
												<IoIosAdd /> Post advert
											</NavLink>
											<NavLink activeClassName="active" to="/account/myadverts">
												<AiOutlineUser /> My adverts
											</NavLink>
										</React.Fragment>
									)}
								</React.Fragment>
							);
						case "/signup":
							return;
						case "/login":
							return;
						case "/advert/":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/post" className="btn btn-primary">
										<IoIosAdd /> Post advert
									</NavLink>
									<NavLink activeClassName="active" to="/account/myadverts">
										<AiOutlineUser /> My adverts
									</NavLink>
								</React.Fragment>
							);
						case "/adverts":
							return (
								<React.Fragment>
									<NavLink activeClassName="active" to="/post" className="btn btn-primary">
										<IoIosAdd /> Post advert
									</NavLink>
									<NavLink activeClassName="active" to="/account/myadverts">
										<AiOutlineUser /> My adverts
									</NavLink>
								</React.Fragment>
							);
						default:
							return;
					}
				})()}

				{currentUser && (
					<NavLink activeClassName="active" to="/" title="Sign out" onClick={() => app.auth().signOut()}>
						<AiOutlineLogout /> Sign out
					</NavLink>
				)}
			</div>
		</React.Fragment>
	);
};

export default Nav;
