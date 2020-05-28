/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";

const Search = () => {
	const [searchItem, setSearchItem] = useState([]);

	const getData = async (searchTerm) => {
		var searchTermLength = searchTerm.length;
		var searchTermFront = searchTerm.slice(0, searchTermLength - 1);
		var searchTermBack = searchTerm.slice(searchTermLength - 1, searchTerm.length);

		var start = searchTerm;
		var end = searchTermFront + String.fromCharCode(searchTermBack.charCodeAt(0) + 1);

		const db = firebase.firestore();

		// https: stackoverflow.com/questions/46573804/firestore-query-documents-startswith-a-string
		const data = await db.collection("adverts").where("title", ">=", start).where("title", "<", end).get();

		const values = data.docs.map((doc) => {
			const returnedData = doc.data();
			return { docId: doc.id, ...returnedData };
		});

		setSearchItem(values);

		// console.log("search term is: " + searchTerm);
		// console.log("returned data is: ", values);
	};

	const searchHandler = (searchTerm) => {
		getData(searchTerm);
	};

	const container = css`
		position: relative;
	`;

	// const searchInput = css`
	// 	width: 50%;
	// `;

	const results = css`
		width: 100%;
		list-style: none;
		padding: 0;
		top: 37px;
		position: absolute;
		background: white;
		border: 1px solid #ccc;
		border-radius: 0px 0px 0.15rem 0.15rem;
		z-index: 1;
		li {
			padding: 4px 12px;
			border-bottom: 1px solid #eee;
			:last-of-type {
				border: none;
			}
		}
	`;

	return (
		<React.Fragment>
			<div css={container}>
				<input
					// css={searchInput}
					onChange={(e) => {
						searchHandler(e.target.value);
					}}
					className="form-control"
					type="text"
					placeholder="What are you looking for.."
				/>
				{searchItem && searchItem.length > 0 && (
					<ul css={results}>
						{searchItem.map((s) => (
							<li key={s.docId}>
								<Link to={"/advert/" + s.docId}>{s.title}</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</React.Fragment>
	);
};

export default Search;
