import React, { useCallback, useEffect, useReducer, useState } from "react";
import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";

const PostAdvert = (props) => {
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
					eventHandler("postcode", documentData.email);
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
		//this.setState({ selectedFile: event.target.files[0] })

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
		<form onSubmit={handleSubmit}>
			<br />
			<label>Title</label>
			<br />
			<input
				name="title"
				type="text"
				value={adInput.title}
				onChange={(e) => {
					eventHandler("title", e.target.value);
				}}
			/>{" "}
			<br />
			<label>Email</label>
			<br />
			<input
				name="email"
				type="text"
				value={adInput.email}
				onChange={(e) => {
					eventHandler("email", e.target.value);
				}}
			/>
			<br />
			<label>Phone</label>
			<br />
			<input
				name="phone"
				type="text"
				value={adInput.phone}
				onChange={(e) => {
					eventHandler("phone", e.target.value);
				}}
			/>
			<br />
			<label>City</label>
			<br />
			<input
				name="city"
				type="text"
				value={adInput.city}
				onChange={(e) => {
					eventHandler("city", e.target.value);
				}}
			/>
			<br />
			<label>Post Code</label>
			<br />
			<br />
			<input
				name="postcode"
				type="text"
				placeholder="Post Code"
				value={adInput.postcode}
				onChange={(e) => {
					eventHandler("postcode", e.target.value);
				}}
			/>
			<br />
			<br />
			{/* <input checked="checked" name="sex" type="radio" value="male" /> Male <br /> */}
			{/* <input name="sex" type="radio" value="female" /> Female <br /> */}
			<input
				name="sex"
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
			<label>Category</label>
			<br />
			<select
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
			<br />
			<br />
			<label>Description</label>
			<br />
			<textarea
				cols="30"
				rows="2"
				name="description"
				placeholder="Description"
				value={adInput.description}
				onChange={(e) => {
					eventHandler("description", e.target.value);
				}}
			></textarea>
			<br />
			<label>Type</label>
			<br />
			<input
				name="type"
				type="text"
				placeholder="Type"
				value={adInput.type}
				onChange={(e) => {
					eventHandler("type", e.target.value);
				}}
			></input>
			<br />
			<label>Price</label>
			<br />
			<input
				name="price"
				type="price"
				placeholder="Price"
				value={adInput.price}
				onChange={(e) => {
					eventHandler("price", e.target.value);
				}}
			></input>
			<br />
			<br />
			<select
				value={adInput.post}
				onChange={(e) => {
					eventHandler("post", e.target.value);
				}}
			>
				<option value="">Select post type</option>
				<option value="1">Will also post</option>
				<option value="2">Collection only</option>
			</select>
			<br />
			<input
				name="swap"
				type="checkbox"
				value="1"
				defaultChecked={adInput.swap === "1"}
				onChange={(e) => {
					eventHandler("swap", e.target.value);
				}}
			/>
			Keen to swap
			<br />
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
				<label>No Image Found</label>
			)}
			<input
				type="file"
				onChange={(e) => {
					fileChangedHandler(e);
				}}
				multiple
			/>
			<br />
			{/* <select>
				<option selected="selected" value="1">
					Yes
				</option>
				<option value="2">No</option>
			</select>
			<br />
			<input name="democheckbox" type="checkbox" value="1" /> Checkbox
			<br /> */}
			<button type="submit">Submit</button>
		</form>
	);
};

export default PostAdvert;
