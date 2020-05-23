import React, { useState } from "react";
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";
import { Link } from "react-router-dom";

const gdprContainer = css`
	position: absolute;
	right: 0;
	bottom: 0;
	background: greenyellow;
	padding: 20px;
	width: 300px;
	font-size: 14px;
	border-radius: 2px;
`;

const GdprPopup = () => {
	const [accept, setAccept] = useState(false);

	const clickHandler = () => {
		setAccept(true);
	};

	return (
		<React.Fragment>
			{!accept && (
				<React.Fragment>
					<div css={gdprContainer}>
						<p>We use cookies in order to improve your experience on our website, analyse our website's traffic and understand where our audience is coming from. </p>
						<p>
							To find out more about our policies, or to opt-out, please check our <Link to="cookies">Cookie Policy</Link>. Also, check our <Link to="privacy-policy">Privacy Policy</Link> for more information.
						</p>
						<div className="text-right">
							<button className="btn btn-outline-primary" onClick={clickHandler}>
								OK
							</button>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default GdprPopup;
