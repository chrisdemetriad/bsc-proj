import React from "react";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Footer = () => {
	const links = css`
		margin: 80px 0;
		li {
			margin-bottom: 10px;
			:first-of-type {
				margin-bottom: 20px;
				font-weight: bold;
				text-transform: uppercase;
			}
		}
	`;

	return (
		<React.Fragment>
			<div className="row">
				<ul className="list-unstyled col-md-3" css={links}>
					<li>About</li>
					<li>
						<Link to="#">About 5th</Link>
					</li>
					<li>
						<Link to="#">Press Contact</Link>
					</li>
					<li>
						<Link to="#">Careers</Link>
					</li>
				</ul>
				<ul className="list-unstyled col-md-3" css={links}>
					<li>Help</li>
					<li>
						<Link to="#">FAQ</Link>
					</li>
					<li>
						<Link to="#">Contact</Link>
					</li>
					<li>
						<Link to="#">Policies</Link>
					</li>
				</ul>
				<ul className="list-unstyled col-md-3" css={links}>
					<li>More</li>
					<li>
						<Link to="#">Cars</Link>
					</li>
					<li>
						<Link to="#">Insurance</Link>
					</li>
					<li>
						<Link to="#">Business</Link>
					</li>
				</ul>
				<ul className="list-unstyled col-md-3" css={links}>
					<li>Others</li>
					<li>
						<Link to="#">Popular searches</Link>
					</li>
					<li>
						<Link to="#">Social media</Link>
					</li>
					<li>
						<Link to="#">Blog</Link>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Footer;
