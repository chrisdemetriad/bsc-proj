/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth";
import app from "../.base";
import { AiOutlineLogout, AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineHeart, AiOutlineSolution, AiOutlineUnorderedList } from "react-icons/ai";

const Nav = () => {
	let location = useLocation();
	let path = location.pathname;

	const { currentUser } = useContext(AuthContext);

	const routesContainer = css`
		> a {
			margin-left: 30px;
			@media (max-width: 800px) {
				margin-left: 3px;
			}
			@media (max-width: 600px) {
				margin-left: 6px;
			}
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
									<Link to="/adverts">
										<AiOutlineUnorderedList /> Adverts
									</Link>
									<Link to="/account/favourites">
										<AiOutlineHeart /> My favourites
									</Link>
								</React.Fragment>
							);
						case "/account/favourites":
							return (
								<React.Fragment>
									<Link to="/adverts">
										<AiOutlineUnorderedList /> Adverts
									</Link>
									<Link to="/account/myadverts">
										<AiOutlineSolution /> My adverts
									</Link>
								</React.Fragment>
							);
						case "/":
							return (
								<React.Fragment>
									{!currentUser && (
										<React.Fragment>
											<Link to="/signup">
												<AiOutlineUserAdd /> Sign up
											</Link>
											<Link to="/login">
												<AiOutlineLogin /> Log in
											</Link>
										</React.Fragment>
									)}
									{currentUser && (
										<React.Fragment>
											<Link to="/post" className="btn btn-primary">
												<IoIosAdd /> Post advert
											</Link>
											<Link to="/account/myadverts">
												<AiOutlineSolution /> My adverts
											</Link>
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
									<Link to="/account/myadverts">
										<AiOutlineSolution /> My adverts
									</Link>
								</React.Fragment>
							);
						case "/adverts":
							return (
								<React.Fragment>
									<Link to="/account/myadverts">
										<AiOutlineSolution /> My adverts
									</Link>
								</React.Fragment>
							);
						default:
							return;
					}
				})()}

				{currentUser && (
					<React.Fragment>
						<Link to="/" title="Sign out" onClick={() => app.auth().signOut()}>
							<AiOutlineLogout /> Sign out
						</Link>
						<Link to="/post" className="btn btn-primary">
							<IoIosAdd /> Post advert
						</Link>
					</React.Fragment>
				)}
			</div>
		</React.Fragment>
	);
};

export default Nav;
