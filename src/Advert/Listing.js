/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./../Auth";

import { Link, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import MainLayout from "../Shared/MainLayout";
import { AiOutlineHeart } from "react-icons/ai";

const Listing = (props) => {
	const [advert, setAdvert] = useState([]);
	const { currentUser } = useContext(AuthContext);

	let location = useLocation();
	let path = location.pathname;
	let splitPath = path.split("/");
	let category = splitPath.pop() || splitPath.pop();
	let catName = category.charAt(0).toUpperCase() + category.slice(1);

	useEffect(() => {
		getData();
	}, []);

	// const [toggle, setToggle] = React.useState(localStorage.getItem("love") === "true");

	// useEffect(() => {
	// 	localStorage.setItem("love", toggle);
	// }, [toggle]);

	async function getData() {
		if (catName != "Adverts") {
			var snapshot = await firebase.firestore().collection("adverts").where("category", "==", catName).get();
		} else {
			var snapshot = await firebase.firestore().collection("adverts").get();
		}

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
								<div>No images</div>
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
									{currentUser && (
										<AiOutlineHeart
											onClick={() => {
												console.log("firebase call and toggle value");
											}}
											css={heart}
										/>
									)}
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

export default Listing;
