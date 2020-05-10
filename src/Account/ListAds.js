import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GdprPopup } from "./../Shared/GdprPopup";
import * as firebase from "firebase/app";
import "firebase/firestore";
const ListAds = () => {
	const [user, setUser] = useState(firebase.auth().currentUser.email);
	const [adList, setAdList] = useState([]);
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
		// console.log(values);
		setAdList(values);
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
	return (
		<>
			<h1>Listing</h1>
			{adList.length > 0 ? (
				adList.map((ad) => (
					<div key={ad.docId}>
						<Link to={"/advert/" + ad.docId} data="nice">
							{ad.title}
						</Link>
						<p> {ad.description} </p>
						<p> {ad.type} </p>
						<p> {ad.category} </p>
						<p> {ad.price} </p>
						<Link to={"/edit/" + ad.docId} data="nice">
							Edit
						</Link>
						<br />
						<br />
						<button
							onClick={() => {
								deleteAdvert(ad.docId);
							}}
						>
							Delete
						</button>
					</div>
				))
			) : (
				<p>No data</p>
			)}
			<GdprPopup />
		</>
	);
};

export default ListAds;
