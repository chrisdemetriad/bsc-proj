import React, { useCallback, useEffect, useReducer, useState } from "react";
import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";

import MainLayout from "./Shared/MainLayout";

const Post = (props) => {
	console.log(props);

	const ref = firebase.firestore().collection("adverts");
	const [imageArray, setImageArray] = useState([]);
	const [categoryArray, setCategoryArray] = useState([]);
	const [user, setUser] = useState(firebase.auth().currentUser.email);
	const [adInput, setAdInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
		postcode: "",
		category: "",
		description: "",
		type: "",
		price: "",
		title: "",
		email: "",
		phone: "",
		city: "",
		file: [],
		sex: "",
		swap: "",
		post: "",
	});

	const eventHandler = (name, newValue) => {
		setAdInput({ [name]: newValue });
	};

	useEffect(() => {
		if (props.match.params.id) {
			editPost(props.match.params.id);
		}
		getCategory();
	}, []);

	async function getCategory() {
		const snapshot = await firebase.firestore().collection("category").get();
		// const snapshot = await firebase.collection('adverts').get()
		const values = snapshot.docs.map((doc) => {
			const data = doc.data();
			return { docId: doc.id, ...data };
		});
		// console.log(values);
		setCategoryArray(values);
	}
	async function editPost() {
		// let res = await firebase.firestore().collection('adverts').doc(props.match.params.id).get()
		// console.log(res)
		// console.log("editPost");
		firebase
			.firestore()
			.collection("adverts")
			.doc(props.match.params.id)
			.get()
			.then(async (docRef) => {
				if (docRef.exists) {
					let documentData = docRef.data();
					eventHandler("email", documentData.email);
					eventHandler("postcode", documentData.postcode);
					eventHandler("category", documentData.category);
					eventHandler("description", documentData.description);
					eventHandler("type", documentData.type);
					eventHandler("price", documentData.price);
					eventHandler("title", documentData.title);
					eventHandler("phone", documentData.phone);
					eventHandler("city", documentData.city);
					eventHandler("file", documentData.file);
					eventHandler("sex", documentData.sex);
					eventHandler("swap", documentData.swap);
					eventHandler("post", documentData.post);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	}

	function fileChangedHandler(event) {
		// this.setState({ selectedFile: event.target.files[0] })

		let fileArray = [];
		for (let index = 0; index < event.target.files.length; index++) {
			const element = event.target.files[index];
			fileArray.push(element);
		}
		setImageArray(fileArray);
	}

	function uploadImageAsPromise(imageFile) {
		return new Promise(function (resolve, reject) {
			var storage = firebase.storage().ref();
			var storageRef = storage.child("images/" + imageFile.name);
			var task = storageRef.put(imageFile);
			task.on(
				"state_changed",
				function progress() {},
				function error(err) {
					reject(err);
				},
				function complete() {
					task.snapshot.ref
						.getDownloadURL()
						.then((downloadURL) => {
							resolve({ url: downloadURL });
						})
						.catch((err) => {
							reject(err);
						});
				}
			);
		});
	}

	function submitData(uploadedImages) {
		let arrayFile = { file: uploadedImages, user: user };
		let objectData = { ...adInput, ...arrayFile };
		console.log(objectData);
		if (props.match.params.id) {
			firebase
				.firestore()
				.collection("adverts")
				.doc(props.match.params.id)
				.update(objectData)
				.then((docRef) => {
					console.log(docRef);
					props.history.push("/success/" + props.match.params.id);
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});
		} else {
			ref
				.add(objectData)
				.then((docRef) => {
					console.log(docRef);
					props.history.push("/success/" + docRef.id);
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});
		}
	}

	const handleSubmit = useCallback(async (event) => {
		event.preventDefault();
		if (imageArray.length > 0) {
			Promise.all(imageArray.map((item) => uploadImageAsPromise(item))).then(async (uploadedImages) => {
				submitData(uploadedImages);
			});
		} else {
			submitData([]);
		}
	});

	return (
		<MainLayout>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Title</label>
					<input
						name="title"
						className="form-control"
						type="text"
						value={adInput.title}
						onChange={(e) => {
							eventHandler("title", e.target.value);
						}}
					/>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>Email</label>

						<input
							name="email"
							className="form-control"
							type="text"
							value={adInput.email}
							onChange={(e) => {
								eventHandler("email", e.target.value);
							}}
						/>
					</div>
					<div className="form-group col-md-6">
						<label>Phone</label>

						<input
							name="phone"
							className="form-control"
							type="text"
							value={adInput.phone}
							onChange={(e) => {
								eventHandler("phone", e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>City</label>

						<input
							name="city"
							className="form-control"
							type="text"
							value={adInput.city}
							onChange={(e) => {
								eventHandler("city", e.target.value);
							}}
						/>
					</div>
					<div className="form-group col-md-6">
						<label>Post Code</label>

						<input
							name="postcode"
							className="form-control"
							type="text"
							placeholder="Post Code"
							value={adInput.postcode}
							onChange={(e) => {
								eventHandler("postcode", e.target.value);
							}}
						/>
					</div>
				</div>

				<div className="form-group">
					<label>Category</label>

					<select
						className="form-control"
						value={adInput.category}
						onChange={(e) => {
							eventHandler("category", e.target.value);
						}}
					>
						<option value="">Select Category</option>
						{categoryArray.length > 0 ? (
							categoryArray.map((item, index) => {
								return (
									<option value={item.title} key={index}>
										{item.title}
									</option>
								);
							})
						) : (
							<option value="">No category Found</option>
						)}
					</select>
				</div>
				<div className="form-group">
					<label>Description</label>

					<textarea
						className="form-control"
						cols="30"
						rows="2"
						name="description"
						placeholder="Description"
						value={adInput.description}
						onChange={(e) => {
							eventHandler("description", e.target.value);
						}}
					></textarea>
				</div>
				<div className="form-group">
					<label>Price</label>

					<input
						name="price"
						className="form-control"
						type="price"
						placeholder="Price"
						value={adInput.price}
						onChange={(e) => {
							eventHandler("price", e.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<select
						className="form-control"
						value={adInput.post}
						onChange={(e) => {
							eventHandler("post", e.target.value);
						}}
					>
						<option value="">Select post type</option>
						<option value="1">Will also post</option>
						<option value="2">Collection only</option>
					</select>
				</div>

				<div className="form-group">
					{adInput.file.length > 0 ? (
						adInput.file.map((item, index) => {
							return (
								<div key={index}>
									<img src={item.url} width="100" />
								</div>
							);
						})
					) : (
						<label>No Image Found</label>
					)}
				</div>
				<div className="form-group">
					<input
						type="file"
						className="form-control"
						onChange={(e) => {
							fileChangedHandler(e);
						}}
						multiple
					/>
				</div>
				<div className="form-group"></div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</MainLayout>
	);
};

export default Post;

{
	/* <label>Type</label>

				<input
					name="type"
					type="text"
					placeholder="Type"
					value={adInput.type}
					onChange={(e) => {
						eventHandler("type", e.target.value);
					}}
				></input> */
}

{
	/* <select>
				<option selected="selected" value="1">
					Yes
				</option>
				<option value="2">No</option>
			</select>
			<br />
			<input name="democheckbox" type="checkbox" value="1" /> Checkbox
			<br /> */
}

{
	/* <div className="form-group">
					<input
						name="swap"
						className="form-control"
						type="checkbox"
						value="1"
						defaultChecked={adInput.swap === "1"}
						onChange={(e) => {
							eventHandler("swap", e.target.value);
						}}
					/>
					Keen to swap
				</div> */
}

{
	/* <div className="form-group">
					<input
						name="sex"
						className="form-control"
						type="radio"
						value="male"
						checked={adInput.sex === "male"}
						onChange={(e) => {
							eventHandler("sex", e.target.value);
						}}
					/>
					Male
					<br />
					<input
						name="sex"
						type="radio"
						value="female"
						checked={adInput.sex === "female"}
						onChange={(e) => {
							eventHandler("sex", e.target.value);
						}}
					/>
					Female
					<br />
				</div> */
}
