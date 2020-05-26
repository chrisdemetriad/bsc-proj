/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const container = css`
	ul {
		display: flex;
		justify-content: space-evenly;
		padding: 70px 30px;
		border: 1px solid #ccc;
		background: aliceblue;
		margin: 30px 0;
		color: #666;
		letter-spacing: -1px;
		text-transform: uppercase;
		font-size: 1rem;
	}
`;

const CategoriesBanner = () => {
	return (
		<div css={container}>
			<ul className="list-unstyled">
				<li>Cars & Vechicles</li>
				<li>Property</li>
				<li>Services</li>
				<li>Jobs</li>
				<li>Community</li>
				<li>Pets</li>
			</ul>
		</div>
	);
};

export default CategoriesBanner;
