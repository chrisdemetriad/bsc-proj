/* eslint-disable */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "../Shared/MainLayout";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import { Shorten as short } from "./../Shared/Utils/Shorten";

const MyAdverts = (props) => {
	const [user] = useState(firebase.auth().currentUser.email);
	const [advert, setAdvert] = useState([]);

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function getData() {
		const snapshot = await firebase.firestore().collection("adverts").where("user", "==", user).get();
		const values = snapshot.docs.map((doc) => {
			const data = doc.data();
			return { docId: doc.id, ...data };
		});

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

	const listing = css`
		@media (min-width: 1110px) {
			flex: 0 0 24%;
			max-width: 24%;
		}
		border: 1px solid #eee;
		padding: 0;

		margin-bottom: 15px;
		background: white;
		border-radius: 0px 0px 2px 2px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
		transition: box-shadow 0.2s;
		:hover {
			box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);
			svg {
				color: black;
			}
		}
	`;
	const actions = css`
		border-top: 6px solid indianred;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
	`;
	const title = css`
		text-align: center;
		padding: 1rem;
		border-bottom: 6px solid indianred;
	`;

	const image = css`
		display: flex;
		height: 200px;
		align-items: center;
		justify-content: center;
		background: rgb(34, 193, 195);
		background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);
		img {
			height: 100%;
			width: auto;
		}
	`;

	const noImage = css`
		min-height: 200px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
		text-transform: uppercase;
	`;

	return (
		<MainLayout>
			<h2>My adverts</h2>
			<div className="row no-gutters d-flex justify-content-between">
				{advert.length > 0 ? (
					advert.map((ad) => (
						<div className="col-md-3" key={ad.docId} css={listing}>
							<div css={title}>
								<Link to={"/advert/" + ad.docId}>
									{short(ad.title, 16)} - £{ad.price}
								</Link>
							</div>
							{ad.file.length > 0 ? (
								ad.file.map((item, index) => {
									// @todo only showing one photo for now
									if (index === 1) {
										return;
									} else {
										return (
											<Link to={"/advert/" + ad.docId} key={ad.docId}>
												<div key={index} css={image}>
													{<img src={item.url} alt={ad.title} />}
												</div>
											</Link>
										);
									}
								})
							) : (
								<div css={noImage}>No images</div>
							)}
							<div css={actions}>
								<Link
									to="#"
									onClick={() => {
										alert("Are you sure?");
										deleteAdvert(ad.docId);
									}}
									title="Delete advert"
								>
									<AiOutlineDelete />
								</Link>
								<Link to={"/edit/" + ad.docId} data="edit" title="Edit advert" className="text-danger">
									<AiOutlineEdit />
								</Link>
							</div>
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
