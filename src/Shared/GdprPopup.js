import React from "react";
import { Link } from "react-router-dom";

export const GdprPopup = () => {
	return (
		<>
			We use cookies in order to improve your experience on our website, show personalised and original content and targeted ads, analyse our website's traffic and understand where our audience is coming from. To find out more about our policies, or to opt-out, please check our{" "}
			<Link to="cookies">Cookie Policy</Link>. Also, check our <Link to="privacy-policy">Privacy Policy</Link> for more information. Thank you.
		</>
	);
};
