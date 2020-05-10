import React, { useCallback, useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
// import {dummyAds}  from "../Shared/Data/dummyAds";
import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";
const Advert = (props) => {
	const [adInput, setAdInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
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
	useEffect(() => {
		if (props.match.params.id) {
			EditPost(props.match.params.id);
		}
	}, []);
	const handleChangeForAdInput = (name, newValue) => {
		setAdInput({ [name]: newValue });
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

	return (
		<div key={adInput.title}>
			{adInput.file.length > 0 ? (
				adInput.file.map((item, index) => {
					return (
						<div key={index}>
							<img src={item.url} width="100" height="100" />
							<br />
						</div>
					);
				})
			) : (
				<label>No images</label>
			)}
			<p> {adInput.title} </p>
			<p> {adInput.description} </p>
			<p> {adInput.price} </p>
			<p> {adInput.email} </p>
			<p> {adInput.postcode} </p>
			<p> {adInput.category} </p>
			<p> {adInput.city} </p>
			<p> {adInput.title} </p>
			<p> {adInput.type} </p>
			<p> {adInput.phone} </p>
		</div>
	);
};

export default Advert;
