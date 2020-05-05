import React, { useContext } from "react";
import { NavLink, useLocation, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import app from "../.base";

const Nav = () => {
	let location = useLocation();
	let path = location.pathname;

	const { currentUser } = useContext(AuthContext);
	console.log(path);

	return (
		<>
			{(() => {
				switch (path) {
					case "/account":
						return (
							<>
								<NavLink activeClassName="active" to="/adverts">
									Adverts
								</NavLink>
								<NavLink activeClassName="active" to="/account/settings">
									Settings
								</NavLink>
							</>
						);
					case "/account/settings":
						return (
							<>
								<NavLink activeClassName="active" to="/adverts">
									Adverts
								</NavLink>
								<NavLink activeClassName="active" to="/account">
									My adverts
								</NavLink>
							</>
						);
					case "/":
						return (
							<>
								{!currentUser && (
									<>
										<NavLink activeClassName="active" to="/login">
											Log in
										</NavLink>
										<NavLink activeClassName="active" to="/signup">
											Sign up
										</NavLink>
									</>
								)}
								{currentUser && (
									<>
										<NavLink activeClassName="active" to="/post-advert">
											Post advert
										</NavLink>
										<NavLink activeClassName="active" to="/account">
											My account
										</NavLink>
									</>
								)}
							</>
						);
					case "/signup":
						return;
					case "/login":
						return;
					case "/adverts":
						return (
							<>
								<NavLink activeClassName="active" to="/post-advert">
									Post advert
								</NavLink>
								<NavLink activeClassName="active" to="/account/settings">
									Settings
								</NavLink>
								<NavLink activeClassName="active" to="/account">
									My account
								</NavLink>
							</>
						);
					case "/advert/*":
						return (
							<>
								<NavLink activeClassName="active" to="/post-advert">
									Post advert
								</NavLink>
								<NavLink activeClassName="active" to="/account/settings">
									Settings
								</NavLink>
								<NavLink activeClassName="active" to="/account">
									My account
								</NavLink>
							</>
						);
					default:
						return "switch default case ";
				}
			})()}
			{/* <NavLink activeClassName="active" to="/">
				Home
			</NavLink>
 */}

			{currentUser && <button onClick={() => app.auth().signOut()}>Sign out</button>}
		</>
	);
};

export default Nav;
