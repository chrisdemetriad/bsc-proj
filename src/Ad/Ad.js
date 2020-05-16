/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import React, { useCallback, useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
// import {dummyAds}  from "../Shared/Data/dummyAds";
import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";

import MainLayout from "./../Shared/MainLayout";

const Advert = (props) => {
	const [advert, setAdvert] = useReducer((state, newState) => ({ ...state, ...newState }), {
		postCode: "",
		category: "",
		description: "",
		type: "",
		price: "",
		title: "",
		email: "",
		phone: "",
		city: "",
		file: [],
	});

	const [phone, setPhone] = useState("Show phone");
	const [email, setEmail] = useState("Show email");

	useEffect(() => {
		if (props.match.params.id) {
			EditPost(props.match.params.id);
		}
	}, []);

	const handleChangeForAdInput = (name, newValue) => {
		setAdvert({ [name]: newValue });
	};

	async function EditPost() {
		// let res = await firebase.firestore().collection('adverts').doc(props.match.params.id).get()
		// console.log(res)
		console.log("editPost");
		firebase
			.firestore()
			.collection("adverts")
			.doc(props.match.params.id)
			.get()
			.then(async (docRef) => {
				if (docRef.exists) {
					let documentData = docRef.data();
					handleChangeForAdInput("email", documentData.email);
					handleChangeForAdInput("postCode", documentData.email);
					handleChangeForAdInput("category", documentData.category);
					handleChangeForAdInput("description", documentData.description);
					handleChangeForAdInput("type", documentData.type);
					handleChangeForAdInput("price", documentData.price);
					handleChangeForAdInput("title", documentData.title);
					handleChangeForAdInput("phone", documentData.phone);
					handleChangeForAdInput("city", documentData.city);
					handleChangeForAdInput("file", documentData.file);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		// firebase.firestore().collection('adverts').doc(props.match.params.id).then(() => {
		//     console.log("Document successfully deleted!");
		//   }).catch((error) => {
		//     console.error("Error removing document: ", error);
		//   });
	}

	const row = css`
		> [class*="col-"] > div {
			background: white;
			border-radius: 2px;
			height: 100%;
		}
	`;

	const imageHolder = css`
		text-align: center;
		background: rgb(34, 193, 195);
		background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);
	`;

	const advertInfo = css`
		flex-direction: column;
		justify-content: space-between;
	`;

	return (
		<MainLayout>
			<h1>{advert.title}</h1>

			<div className="row" css={row}>
				<div className="col-7">
					<div className="p-4">
						{advert.file.length > 0 ? (
							advert.file.map((item, index) => {
								return (
									<div css={imageHolder} key={index}>
										<img src={item.url} height="500" />
										<br />
									</div>
								);
							})
						) : (
							<label>No images</label>
						)}
					</div>
				</div>
				<div className="col-5 position-relative">
					<div css={advertInfo} className="p-4 d-flex">
						<div className="clearfix">
							<button
								className="btn btn-secondary "
								onClick={() => {
									setPhone(advert.phone);
								}}
							>
								{phone}
							</button>

							<button
								className="btn btn-secondary float-right"
								onClick={() => {
									setEmail(advert.email);
								}}
							>
								{email}
							</button>
							<div className="description">{advert.description}</div>
						</div>

						{/* <p> {advert.category} </p> */}
						<span>
							{advert.city}
							{advert.postcode && ", " + advert.postcode}{" "}
						</span>
					</div>

					<a href="#" className="position-absolute top-0 right-0">
						Report
					</a>
				</div>
				{/* <div className="w-100 mb-2"></div> */}
			</div>
		</MainLayout>
	);
};

export default Advert;
