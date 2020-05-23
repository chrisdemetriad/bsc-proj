/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import promoImage from "./../promo.jpg";

const container = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 400px;
	justify-content: space-evenly;
	background-image: url(${promoImage});
	padding: 0;
`;

const InfoBanner = () => {
	return (
		<div css={container}>
			<Link className="btn btn-secondary p-3" to="/login">
				Join today
			</Link>
		</div>
	);
};

export default InfoBanner;
