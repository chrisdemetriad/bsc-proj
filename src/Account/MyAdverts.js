/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "../Shared/MainLayout";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const MyAdverts = (props) => {
	const [user] = useState(firebase.auth().currentUser.email);
	const [advert, setAdvert] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const snapshot = await firebase.firestore().collection("adverts").where("user", "==", user).get();
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
				getData();
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
			<div className="row">
				{advert.length > 0 ? (
					advert.map((ad) => (
						<div classNames="col-md-4" key={ad.docId}>
							{ad.file.length > 0 ? (
								ad.file.map((item, index) => {
									return (
										<span key={index}>
											<img src={item.url} width="300" css={image} />
										</span>
									);
								})
							) : (
								<span>No images</span>
							)}
							<Link
								onClick={() => {
									deleteAdvert(ad.docId);
								}}
								title="Delete advert"
							>
								<AiOutlineDelete />
							</Link>
							<Link to={"/advert/" + ad.docId} data="nice">
								{ad.title} - {ad.price}
							</Link>
							<Link to={"/edit/" + ad.docId} data="edit" title="Edit advert">
								<AiOutlineEdit />
							</Link>
						</div>
					))
				) : (
					<React.Fragment>
						<p>You do not seem to have posted any adverts yet.</p>
						<p>
							Why don't you <Link to="/post">post one now</Link>?
						</p>
					</React.Fragment>
				)}
			</div>
		</MainLayout>
	);
};

export default MyAdverts;
