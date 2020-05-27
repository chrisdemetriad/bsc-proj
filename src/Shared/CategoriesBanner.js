/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

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
				<li>
					<Link to="/adverts/clothes">Clothes</Link>
				</li>
				<li>
					<Link to="/adverts/electronics">Electronics</Link>
				</li>
				<li>
					<Link to="/adverts/vehicles">Vehicles</Link>
				</li>
				<li>
					<Link to="/adverts/toys">Toys</Link>
				</li>
				<li>
					<Link to="/adverts/books">Books</Link>
				</li>
			</ul>
		</div>
	);
};

export default CategoriesBanner;
