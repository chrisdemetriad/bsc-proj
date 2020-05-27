/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./Auth";

import MainLayout from "./Shared/MainLayout";
import { BaseProvider } from "./Shared/BaseContext";
import promoImage from "./404.jpg";

const container = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 800px;
	justify-content: space-around;
	background-image: url(${promoImage});
	background-size: cover;
	padding: 0;
`;

const text = css`
	font-size: 3rem;
	color: black;
	background: white;
	opacity: 0.5;
	font-weight: bold;
	padding: 20px;
`;

const NoMatch = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<BaseProvider>
			<MainLayout>
				<div css={container}>
					<p css={text}>Oh, no! You poor thing!</p>
					{currentUser ? (
						<Link className="btn btn-primary p-3" to="/post">
							Post today
						</Link>
					) : (
						<Link className="btn btn-secondary p-3" to="/login">
							Join today
						</Link>
					)}
				</div>
				<small>
					Image by <a href="sianbuckler">sianbuckler</a> from Pixabay.
				</small>
			</MainLayout>
		</BaseProvider>
	);
};

export default NoMatch;
