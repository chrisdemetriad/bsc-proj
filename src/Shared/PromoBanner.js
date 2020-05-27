/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const container = css`
	display: flex;
	flex-direction: column;
	flex-direction: column;
	padding: 32px;
	text-align: center;
	align-items: center;
	min-height: 400px;
	color: white;
	margin-bottom: 20px;
	justify-content: space-evenly;
	background: rgb(34, 193, 195);
	background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(198, 63, 186, 1) 25%, rgba(76, 93, 201, 1) 67%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);

	h1 {
		font-size: 3rem;
		letter-spacing: -1px;
		text-transform: uppercase;
		font-weight: bold;
		margin: 0;
	}

	p {
		font-size: 2rem;
		padding: 0 20%;
		letter-spacing: -1px;
		line-height: 1;
		margin: 0;
	}
`;

const PromoBanner = () => {
	return (
		<div css={container}>
			<h1>Buy and sell within seconds</h1>
			<p>List them all with us and sell them for free. No fees, full control over your items, and privacy.</p>
			<Link className="btn btn-success p-3" to="/login">
				Post now
			</Link>
		</div>
	);
};

export default PromoBanner;
