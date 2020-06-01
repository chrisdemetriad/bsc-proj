/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { AiOutlineSearch } from "react-icons/ai";
import { Redirect } from "react-router-dom";

const Search = (props) => {
	const [searchItem, setSearchItem] = useState([]);
	const [searchData, setSearchData] = useState();

	let history = useHistory();

	const getData = async (searchTerm) => {
		var searchTermLength = searchTerm.length;
		var searchTermFront = searchTerm.slice(0, searchTermLength - 1).toLowerCase();
		var searchTermBack = searchTerm.slice(searchTermLength - 1, searchTerm.length);

		var start = searchTerm.toLowerCase();
		var end = searchTermFront + String.fromCharCode(searchTermBack.charCodeAt(0) + 1).toLowerCase();

		const db = firebase.firestore();

		const data = await db.collection("adverts").where("title_s", ">=", start).where("title_s", "<", end).get();

		const values = data.docs.map((doc) => {
			const returnedData = doc.data();
			return { docId: doc.id, ...returnedData };
		});
		setSearchItem(values);

		// console.log("search term is: " + searchTerm);
		// console.log("returned data is: ", values);
	};

	const searchHandler = (searchTerm) => {
		if (searchTerm != undefined) {
			setSearchData(searchTerm);
			getData(searchTerm);
		}
	};

	useEffect(() => {
		if (searchData != undefined) {
			window.location.reload(true);
		}
	}, [window.location.pathname]);

	const container = css`
		position: relative;
	`;

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

	const searchIcon = css`
		position: absolute;
		right: 10px;
		top: 11px;
		color: #999;
		font-size: 22px;
	`;

	const submitInput = css`
		display: none;
	`;

	const handleSearch = (e) => {
		// e.preventDefault();
		// history.push("/search/" + searchData);
		if (e.key === "Enter") {
			history.push("/search/" + searchData);
		}
	};

	return (
		<React.Fragment>
			<div css={container}>
				{/* <form onSubmit={handleSearch}> */}
				<AiOutlineSearch css={searchIcon} />

				<input
					onChange={(e) => {
						searchHandler(e.target.value);
					}}
					onKeyPress={(event) => handleSearch(event)}
					className="form-control"
					type="text"
					placeholder="What are you looking for.."
				/>
				<input type="submit" value="Submit" css={submitInput} />
				{searchItem && searchItem.length > 0 && (
					<ul css={results}>
						{searchItem.map((s) => (
							<li key={s.docId}>
								<Link to={"/advert/" + s.docId}>{s.title}</Link>
							</li>
						))}
					</ul>
				)}
				{/* </form> */}
			</div>
		</React.Fragment>
	);
};

export default Search;
