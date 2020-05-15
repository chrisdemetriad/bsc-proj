/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { GdprPopup } from "./../Shared/GdprPopup";
import * as firebase from "firebase/app";
import "firebase/firestore";

import MainLayout from "./../Shared/MainLayout";

const Listing = (props) => {
	const [adList, setAdList] = useState([]);

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
		// console.log(values);
		setAdList(values);
	}

	return (
		<MainLayout>
			<h2>Listing</h2>
			{adList.length > 0 ? (
				adList.map((ad) => (
					<div key={ad.docId}>
						<Link to={"/advert/" + ad.docId} data="nice">
							{console.log(ad.file)}
						</Link>

						{/* {ad.file.map((item, index) => {
							return (
								<div key={index}>
									<img src={item} width="100" height="100" />
									<br />
								</div>
							);
						})} */}

						<img src={ad.url} width="100" height="100" />
						<p> {ad.description} </p>
						<p> {ad.type} </p>
						<p> {ad.category} </p>
						<p> {ad.price} </p>
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
