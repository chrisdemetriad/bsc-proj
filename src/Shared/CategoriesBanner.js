/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import promoImage from "./../promo.jpg";

const container = css`
	ul {
		display: flex;
		justify-content: space-between;
		padding: 100px 30px;
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
