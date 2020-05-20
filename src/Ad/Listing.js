/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { GdprPopup } from "./../Shared/GdprPopup";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "./../Shared/MainLayout";

const Listing = (props) => {
	const [advert, setAdvert] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const snapshot = await firebase.firestore().collection("adverts").get();
		// const snapshot = await firebase.collection('adverts').get()
		const values = snapshot.docs.map((doc) => {
			const data = doc.data();
			return { docId: doc.id, ...data };
		});
		console.log("*****");
		console.log(values);
		console.log("*****");
		setAdvert(values);
	}

	return (
		<MainLayout>
			<h2>Listing</h2>
			{advert && advert.length > 0 ? (
				advert.map((ad) => (
					<div key={ad.docId}>
						{/* <Link to={"/advert/" + ad.docId} data="nice"> */}
						{ad.title} - {ad.price}
						{/* </Link> */}
						{ad.file.length > 0 ? (
							ad.file.map((item, index) => {
								return (
									<td key={index}>
										<img src={item.url} width="300" />
									</td>
								);
							})
						) : (
							<td>No images</td>
						)}
					</div>
				))
			) : (
				<p>No data</p>
			)}

			<GdprPopup />
		</MainLayout>
	);
};

export default Listing;
