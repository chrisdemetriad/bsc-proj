import React, { useState, useContext } from "react";
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";
import { Link } from "react-router-dom";
import { BaseContext } from "./../Shared/BaseContext";

const gdprContainer = css`
	position: absolute;
	right: 0;
	bottom: 0;
	background: white;
	padding: 20px;
	width: 360px;
	font-size: 14px;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 13px 0px;
	border-radius: 10px 0px 0px 0;
`;

const GdprPopup = () => {
	const [accepted, setAccepted] = useContext(BaseContext);

	const acceptGdpr = () => {
		setAccepted((x) => !x);
	};
	return (
		<React.Fragment>
			<React.Fragment>
				{!accepted && (
					<div css={gdprContainer}>
						<p>
							We use cookies for the best experience. By using the site you accept our cookie policy <Link to="cookies">Cookie Policy</Link>.
						</p>
						<p>
							Also, check our <Link to="privacy-policy">Privacy Policy</Link> for more information.
						</p>
						<div className="text-right">
							<button className="btn btn-outline-primary" onClick={acceptGdpr}>
								OK
							</button>
						</div>
					</div>
				)}
			</React.Fragment>
		</React.Fragment>
	);
};

export default GdprPopup;
