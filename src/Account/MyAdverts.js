/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { GdprPopup } from "../Shared/GdprPopup";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "../Shared/MainLayout";

const MyAdverts = () => {
	const [user, setUser] = useState(firebase.auth().currentUser.email);
	const [advert, setAdvert] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const snapshot = await firebase.firestore().collection("adverts").where("user", "==", user).get();
		// const snapshot = await firebase.collection('adverts').get()
		const values = snapshot.docs.map((doc) => {
			const data = doc.data();
			return { docId: doc.id, ...data };
		});
		console.log(values);
		setAdvert(values);
	}

	async function deleteAdvert(id) {
		firebase
			.firestore()
			.collection("adverts")
			.doc(id)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});
	}

	const image = css`
		max-height: 100px;
		width: auto;
	`;

	return (
		<MainLayout>
			<h2>My adverts</h2>

			<table class="table table-sm table-bordered">
				<thead>
					<tr>
						<th scope="col">Image</th>
						<th scope="col">Title</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{advert.length > 0 ? (
						advert.map((ad) => (
							<tr key={ad.docId}>
								{ad.file.length > 0 ? (
									ad.file.map((item, index) => {
										return (
											<td key={index}>
												<img src={item.url} width="300" css={image} />
											</td>
										);
									})
								) : (
									<td>No images</td>
								)}
								<td>
									<Link to={"/advert/" + ad.docId} data="nice">
										{ad.title} - {ad.price}
									</Link>
								</td>
								<td>
									<Link to={"/edit/" + ad.docId} data="edit">
										Edit
									</Link>
								</td>
								<td>
									<Link
										onClick={() => {
											deleteAdvert(ad.docId);
										}}
									>
										Delete
									</Link>
								</td>
							</tr>
						))
					) : (
						<p>No data</p>
					)}
				</tbody>
			</table>
			<GdprPopup />
		</MainLayout>
	);
};

export default MyAdverts;
