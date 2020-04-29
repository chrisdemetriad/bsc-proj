import React from "react";

import { Link } from "react-router-dom";
const ListAds = () => {
	return (
		<div>
			<h1>My account</h1>
			<nav>
				<Link to="settings">Settings</Link>
			</nav>
			<hr />
		</div>
	);
};

export default ListAds;
