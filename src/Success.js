import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "./Shared/MainLayout";

const Success = (props) => {
	const [title, setTitle] = useState("");
	const [newEntry, setNewEntry] = useState(true);

	useEffect(() => {
		if (props.match.params.status === "edited") {
			setNewEntry(false);
		} else if (props.match.params.status === "added") {
			setNewEntry(true);
		}
		if (props.match.params.id) {
			EditPost(props.match.params.id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function EditPost() {
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
				{newEntry ? (
					<>
						<p>Your advert has been successfully posted.</p>

						<div className="mb-3">
							<Link to={"/advert/" + props.match.params.id}>{title}</Link> - <Link to={"/edit/" + props.match.params.id}>edit</Link>.
						</div>

						<p>
							Go to your <Link to="/myadverts">my adverts</Link> or <Link to="/post">post a new advert</Link>!
						</p>
					</>
				) : (
					<>
						<p>Your advert has been successfully edited.</p>

						<div className="mb-3">
							<Link to={"/advert/" + props.match.params.id}>{title}</Link> - <Link to={"/edit/" + props.match.params.id}>edit</Link>.
						</div>

						<p>
							Go to <Link to="/adverts/myadverts">my adverts</Link> or <Link to="/post">post a new advert</Link>!
						</p>
					</>
				)}
			</MainLayout>
		</>
	);
};

export default Success;
