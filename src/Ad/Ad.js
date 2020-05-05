import React from "react";
import { useParams } from "react-router-dom";
// import {dummyAds}  from "../Shared/Data/dummyAds";

const Advert = (props) => {
	console.log("what");
	console.log(props);

	let { id } = useParams();

	return (
		<p>Post ID {id}</p>
		// {dummyAds.length > 0 ? (
		// 	dummyAds.map((ad) => (
		// 		<div key={ad.id}>
		// 			<Link to={"/adverts/" + ad.id} data="nice">
		// 				{ad.poster.name} - {ad.id}
		// 			</Link>
		// 			<img src={"http://lorempixel.com/400/200/fashion/" + ad.poster.name} alt="img" />
		// 			<p> {ad.id} </p>
		// 			<p> {ad.adDesc} </p>
		// 			<p> {ad.prodId} </p>
		// 			<p> {ad.email} </p>
		// 			<p> {ad.location.town} </p>
		// 			<p> {ad.adTitle} </p>
		// 		</div>
		// 	))
		// ) : (
		// 	<p>No data</p>
		// )}
	);
};

export default Advert;
