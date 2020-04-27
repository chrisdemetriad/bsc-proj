import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	let loggedIn = true;
	return (
		<>
			<NavLink activeClassName="active" to="/">
				Home
			</NavLink>
			<NavLink activeClassName="active" to="/account">
				My account
			</NavLink>
			<NavLink activeClassName="active" to="/account/adverts">
				My adverts
			</NavLink>
			<NavLink activeClassName="active" to="/sign-in">
				Sign in
			</NavLink>
			<NavLink activeClassName="active" to="/sign-up">
				Sign up
			</NavLink>
			<NavLink activeClassName="active" to="/sign-up">
				{loggedIn ? "Logged in" : "Not logged in"}
			</NavLink>
		</>
	);
};

export default Nav;
