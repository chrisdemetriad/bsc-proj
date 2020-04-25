import React from "react";
// > V5.1
import { useParams } from "react-router";

const Advert = (props) => {
	let { id } = useParams();
	return (
		<div>
			Portfolio component
			<p>Topic: {id}</p>
		</div>
	);
};

export default Advert;
