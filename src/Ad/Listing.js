import React from "react";
import { Link } from "react-router-dom";
import { dummyAds } from "./../Shared/Data";
import { GdprPopup } from "./../Shared/GdprPopup";
import Header from "./../Shared/Header";

const Listing = () => {
	return (
		<>
			<h1>Listing</h1>
			{dummyAds.length > 0 ? (
				dummyAds.map((ad) => (
					<div key={ad.id}>
						<Link to={"/advert/" + ad.id} data="nice">
							{ad.poster.name} - {ad.id}
						</Link>
						<img src={"http://lorempixel.com/400/200/fashion/" + ad.poster.name} alt="img" />
						<p> {ad.id} </p>
						<p> {ad.adDesc} </p>
						<p> {ad.prodId} </p>
						<p> {ad.email} </p>
						<p> {ad.location.town} </p>
						<p> {ad.adTitle} </p>
					</div>
				))
			) : (
				<p>No data</p>
			)}
			<GdprPopup />
		</>
	);
};

export default Listing;
