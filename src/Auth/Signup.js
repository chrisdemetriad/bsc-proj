/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";

import React, { useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import app from "./../.base";

const Signup = ({ history }) => {
	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().createUserWithEmailAndPassword(email.value, password.value);
				history.push("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const base = css`
		display: flex;
		align-items: center;
		min-height: 100vh;
		justify-content: center;
		background: rgb(34, 193, 195);
		background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(198, 63, 186, 1) 25%, rgba(76, 93, 201, 1) 67%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);
	`;

	const formContainer = css`
		background: white;
		padding: 25px;
		border-radius: 2px;
		text-align: center;
		width: 300px;
	`;

	const title = css`
		margin-bottom: 20px;
		font-size: 4rem;
	`;

	const button = css`
		margin: 20px 0;
		width: 100%;
		font-size: 1.6rem;
	`;

	const subtitle = css`
		margin-bottom: 30px;
		font-size: 1.4rem;
	`;

	return (
		<React.Fragment>
			<div css={base}>
				<div css={formContainer}>
					<h1 css={title}>Sign up</h1>
					<form onSubmit={handleSignUp}>
						<p css={subtitle}>
							Already a member? <Link to="/login">Log in</Link>
						</p>
						<div className="form-group">
							<input name="email" type="email" placeholder="Email" className="form-control" />
						</div>
						<div className="form-group m-0">
							<input name="password" type="password" placeholder="Password" className="form-control" />
						</div>
						<button className="btn btn-success" type="submit" css={button}>
							Sign up
						</button>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withRouter(Signup);
