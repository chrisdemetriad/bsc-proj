/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "../Shared/MainLayout";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const MyFavourites = (props) => {
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

		setAdvert(values);
	}

	const listing = css`
		flex: 0 0 24%;
		border: 1px solid #eee;
		padding: 0;
		max-width: 24%;
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
		border-bottom: 6px solid indianred;
		background: rgb(34, 193, 195);
		background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);
		img {
			max-height: 200px;
		}
	`;

	return (
		<MainLayout>
			<h2>My favourites</h2>
			<div className="row no-gutters d-flex justify-content-between">
				{advert.length > 0 ? (
					advert.map((ad) => (
						<div classNames="col-md-3" key={ad.docId} css={listing}>
							<div css={title}>
								<Link to={"/advert/" + ad.docId}>
									{ad.title} - {ad.price}
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
								<div>No images</div>
							)}
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

export default MyFavourites;
