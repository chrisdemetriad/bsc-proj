import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "./Shared/MainLayout";

const Success = (props) => {
	const [title, setTitle] = useState("");
	useEffect(() => {
		if (props.match.params.id) {
			EditPost(props.match.params.id);
		}
	}, []);

	async function EditPost() {
		console.log("editPost");
		firebase
			.firestore()
			.collection("adverts")
			.doc(props.match.params.id)
			.get()
			.then(async (docRef) => {
				if (docRef.exists) {
					let documentData = docRef.data();
					console.log(documentData);
					setTitle(documentData.title);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	}
	return (
		<>
			<MainLayout>
				<h2>The advert has been successfully posted</h2>
				<Link to={"/advert/" + props.match.params.id} data="nice">
					{title}
				</Link>
			</MainLayout>
		</>
	);
};

export default Success;
