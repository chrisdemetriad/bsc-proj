import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Redirect } from "react-router-dom";

const Home = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<>
			<h1>Home</h1>
			{currentUser && <Redirect to="/adverts" />}
		</>
	);
};

export default Home;
