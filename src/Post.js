/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { useCallback, useEffect, useReducer, useState } from "react";
import * as firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import "firebase/firestore";
import "firebase/storage";

import MainLayout from "./Shared/MainLayout";
import { IoIosArrowBack } from "react-icons/io";

const Post = (props) => {
	let history = useHistory();
	const ref = firebase.firestore().collection("adverts");
	const [imageArray, setImageArray] = useState([]);
	const [categoryArray, setCategoryArray] = useState([]);
	const [user, setUser] = useState(firebase.auth().currentUser.email);
	const [adInput, setAdInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
		title: "",
		email: "",
		phone: "",
		city: "",
		postcode: "",
		category: "",
		price: "",
		description: "",
		file: [],
		post: "",
		// swap: "",
		// sex: "",
		// type: ""
	});

	const eventHandler = (name, newValue) => {
		// console.log(newValue);
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
		const values = snapshot.docs.map((doc) => {
			const data = doc.data();
			return { docId: doc.id, ...data };
		});
		setCategoryArray(values);
	}
	async function editPost() {
		firebase
			.firestore()
			.collection("adverts")
			.doc(props.match.params.id)
			.get()
			.then(async (docRef) => {
				if (docRef.exists) {
					let documentData = docRef.data();
					eventHandler("title", documentData.title);
					eventHandler("email", documentData.email);
					eventHandler("phone", documentData.phone);
					eventHandler("city", documentData.city);
					eventHandler("postcode", documentData.postcode);
					eventHandler("category", documentData.category);
					eventHandler("price", documentData.price);
					eventHandler("description", documentData.description);
					eventHandler("file", documentData.file);
					eventHandler("post", documentData.post);
					// eventHandler("swap", documentData.swap);
					// eventHandler("sex", documentData.sex);
					// eventHandler("type", documentData.type);
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
		if (adInput.file.length > 0 && uploadedImages.length == 0) {
			uploadedImages = adInput.file;
		}
		let arrayFile = { file: uploadedImages, user: user };
		let objectData = { ...adInput, ...arrayFile };
		// console.log(objectData);
		if (props.match.params.id) {
			firebase
				.firestore()
				.collection("adverts")
				.doc(props.match.params.id)
				.update(objectData)
				.then((docRef) => {
					props.history.push("/success/" + props.match.params.id + "/edited");
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});
		} else {
			ref
				.add(objectData)
				.then((docRef) => {
					// console.log(docRef);
					props.history.push("/success/" + docRef.id + "/added");
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

	const formGroup = css`
		margin-bottom: 10px;
	`;

	const formRow = css`
		background: white;
		border-radius: 2px;
		padding: 10px 0;
	`;

	const fileContainer = css`
		overflow: hidden;
		position: relative;
		background: white;
		border-radius: 2px;
		border: 1px solid #333;
		float: left;
		padding: 0.375rem 0.75rem;
		cursor: pointer;
		transition: all 0.2s;

		:hover {
			background: #a52a2a;
			color: white;
			border: 1px solid brown;
		}

		[type="file"] {
			cursor: inherit;
			display: block;
			font-size: 999px;
			filter: alpha(opacity=0);
			min-height: 100%;
			min-width: 100%;
			opacity: 0;
			position: absolute;
			right: 0;
			text-align: right;
			top: 0;
		}
	`;

	return (
		<MainLayout>
			<div className="text-right">
				<button className="btn btn-sm btn-outline-primary " onClick={() => history.goBack()}>
					<IoIosArrowBack /> Back
				</button>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-group" css={formGroup}>
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
				<div className="form-row" css={formRow}>
					<div className="form-group col-md-6" css={formGroup}>
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
					<div className="form-group col-md-6" css={formGroup}>
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
				<div className="form-row" css={formRow}>
					<div className="form-group col-md-6" css={formGroup}>
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
					<div className="form-group col-md-6" css={formGroup}>
						<label>Postcode</label>

						<input
							name="postcode"
							className="form-control"
							type="text"
							value={adInput.postcode}
							onChange={(e) => {
								eventHandler("postcode", e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="form-row" css={formRow}>
					<div className="form-group col-md-4" css={formGroup}>
						<label>Price</label>

						<input
							name="price"
							className="form-control"
							type="price"
							value={adInput.price}
							onChange={(e) => {
								eventHandler("price", e.target.value);
							}}
						></input>
					</div>
					<div className="form-group col-md-4" css={formGroup}>
						<label>Post or collection</label>

						<select
							className="form-control"
							value={adInput.post}
							onChange={(e) => {
								eventHandler("post", e.target.value);
							}}
						>
							<option value="">Select</option>
							<option value="1">Will also post</option>
							<option value="2">Collection only</option>
						</select>
					</div>
					<div className="form-group col-md-4" css={formGroup}>
						<label>Category</label>

						<select
							className="form-control"
							value={adInput.category}
							onChange={(e) => {
								eventHandler("category", e.target.value);
							}}
						>
							<option value="">Select</option>
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
				</div>
				<div className="form-group" css={formGroup}>
					<label>Description</label>

					<textarea
						className="form-control"
						cols="30"
						rows="3"
						name="description"
						value={adInput.description}
						onChange={(e) => {
							eventHandler("description", e.target.value);
						}}
					></textarea>
				</div>
				<div className="form-group" css={formGroup}>
					{adInput.file.length > 0 &&
						adInput.file.map((item, index) => {
							return (
								<div key={index}>
									<img src={item.url} width="100" />
								</div>
							);
						})}
				</div>
				<label css={fileContainer}>
					Upload images
					<input
						type="file"
						className="btn btn-outline-primary"
						onChange={(e) => {
							fileChangedHandler(e);
						}}
						multiple
					/>
				</label>

				<div className="clearfix">
					<button type="submit" className="btn btn-primary float-right w-25">
						Submit
					</button>
				</div>
			</form>
		</MainLayout>
	);
};

export default Post;

/* <label>Type</label>

				<input
					name="type"
					type="text"
					value={adInput.type}
					onChange={(e) => {
						eventHandler("type", e.target.value);
					}}
				></input> */

/* <select>
				<option selected="selected" value="1">
					Yes
				</option>
				<option value="2">No</option>
			</select>
			<br />
			<input name="democheckbox" type="checkbox" value="1" /> Checkbox
			<br /> */

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
