/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./Auth";

import { Link, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "./Shared/MainLayout";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const SearchListing = (props) => {
	const [advert, setAdvert] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const [favouriteList, setFavouriteList] = useState([]);
	const ref = firebase.firestore().collection("favorite");

	let location = useLocation();
	let path = location.pathname;
	let splitPath = path.split("/");
	let category = splitPath.pop() || splitPath.pop();
	let catName = category.charAt(0).toUpperCase() + category.slice(1);

	async function getFavourite() {
		if (currentUser) {
			firebase
				.firestore()
				.collection("favorite")
				.doc(currentUser.email)
				.get()
				.then(async (docRef) => {
					if (docRef.data()) {
						setFavouriteList(docRef.data().productId);
					} else {
						setFavouriteList([]);
					}
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});
		}
	}
	async function setFavourite(ad) {
		let list = favouriteList;
		let arr = []
		if (currentUser) {
			if (favouriteList.length > 0) {
				if (favouriteList.indexOf(ad.docId) > -1) {
					list.splice(favouriteList.indexOf(ad.docId), 1);
					arr = [...list]
				} else {
					arr = [...favouriteList, ad.docId];
				}
				firebase
					.firestore()
					.collection("favorite")
					.doc(currentUser.email)
					.update({ productId: arr })
					.then((docRef) => {
						setFavouriteList(arr);
					})
					.catch((error) => {
						console.error("Error adding document: ", error);
					});
			} else {
				let favData = { productId: [ad.docId] };

				ref
					.doc(currentUser.email)
					.set(favData)
					.then((docRef) => {
						setFavouriteList(favData.productId);
					})
					.catch((error) => {
						console.error("Error adding document: ", error);
					});
			}
		}
	}

	useEffect(()=>{
		getFavourite();
	},[currentUser])

	useEffect(() => {
		getData();

	}, [favouriteList]);

	const getData = async () => {
		let searchTerm = props.match.params.data;
		var searchTermLength = searchTerm.length;
		var searchTermFront = searchTerm.slice(0, searchTermLength - 1);
		var searchTermBack = searchTerm.slice(searchTermLength - 1, searchTerm.length);

		var start = searchTerm.toLowerCase();
		var end = searchTermFront + String.fromCharCode(searchTermBack.charCodeAt(0) + 1).toLowerCase();

		const db = firebase.firestore();

		const data = await db.collection("adverts").where("title_s", ">=", start).where("title_s", "<", end).get();

		const values = data.docs.map((doc) => {
			const returnedData = doc.data();
			return { docId: doc.id, ...returnedData };
		});

		setAdvert(values);

		// console.log("search term is: " + searchTerm);
		// console.log("returned data is: ", values);
	};

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
	const details = css`
		border-top: 6px solid indianred;
		padding: 1rem;
	`;
	const title = css`
		font-size: 15px;
		font-weight: bold;
	`;

	const price = css`
		font-size: 20px;
		font-weight: bold;
	`;
	const city = css`
		font-size: 10px;
		text-transform: uppercase;
		margin-bottom: 0;
	`;
	const image = css`
		display: flex;
		height: 200px;
		align-items: center;
		justify-content: center;
		border-radius: 2px 2px 0px 0px;
		background: rgb(34, 193, 195);
		background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);
		img {
			height: 100%;
			width: auto;
		}
		}
	`;

	const heart = css`
		font-size: 2rem;
		float: right;
		color: #888;
		transition: color 0.2s;
		cursor: pointer;
	`;

	const heartSelected = css`
		font-size: 2rem;
		float: right;
		color: #e34d4d;
		transition: color 0.2s;
		cursor: pointer;
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
			<h2>Adverts</h2>
			{advert && advert.length > 0 ? (
				<div className="row no-gutters d-flex justify-content-between">
					{advert.map((ad) => (
						<div className="col-md-3" key={ad.docId} css={listing}>
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
							<div css={details}>
								<p css={title}>
									<Link to={"/advert/" + ad.docId}>{ad.title}</Link>
								</p>
								<p css={city}>
									{ad.city}
									{ad.postcode && ", " + ad.postcode}
								</p>
								<div className="clearfix">
									<span css={price}>£{ad.price}</span>
									{currentUser &&
										favouriteList &&
										(favouriteList.length > 0 && favouriteList.indexOf(ad.docId) > -1 ? (
											<AiFillHeart
												onClick={() => {
													setFavourite(ad);
												}}
												css={heartSelected}
											/>
										) : (
											<AiOutlineHeart
												onClick={() => {
													setFavourite(ad);
												}}
												css={heart}
											/>
										))}
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<p>
					No data in <code>{category}</code>.
				</p>
			)}
		</MainLayout>
	);
};

export default SearchListing;
