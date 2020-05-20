import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "./Shared/MainLayout";

const Success = (props) => {
	const [title, setTitle] = useState("");
	const [newEntry, setNewEntry] = useState(true);

	useEffect(() => {
		if (props.match.params.status == "edited") {
			setNewEntry(false);
		} else if (props.match.params.status == "added") {
			setNewEntry(true);
		}
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
				{newEntry ? <h2>The advert has been successfully posted</h2> : <h2>The advert has been successfully edited</h2>}

				<Link to={"/advert/" + props.match.params.id} data="nice">
					{title}
				</Link>
			</MainLayout>
		</>
	);
};

export default Success;
