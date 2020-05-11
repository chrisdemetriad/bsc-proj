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

			<div className="row no-gutters">
				{adList.length > 0 ? (
					adList.map((ad) => (
						<Link to={"/advert/" + ad.docId} data="nice">
							<div key={ad.docId} className="shadow p-3 mb-5 bg-white rounded col-sm-3">
								{ad.title}

								<p> {ad.price} </p>

								{ad.file.length > 0 ? (
									ad.file.map((item, index) => {
										return (
											<div key={index}>
												<img src={item.url} width="300" />
												<br />
											</div>
										);
									})
								) : (
									<label>No images</label>
								)}
								<div className="clearfix">
									<div className="float-left">
										<Link to={"/edit/" + ad.docId} data="nice">
											Edit
										</Link>
									</div>
									<div className="float-right">
										<Link
											onClick={() => {
												deleteAdvert(ad.docId);
											}}
										>
											Delete
										</Link>
									</div>
								</div>
							</div>
						</Link>
					))
				) : (
					<p>No data</p>
				)}
			</div>
			<GdprPopup />
		</>
	);
};

export default ListAds;
