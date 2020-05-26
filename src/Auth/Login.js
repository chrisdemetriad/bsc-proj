/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import React, { useCallback, useContext } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import app from "../.base";
import { AuthContext } from "../Auth";

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/" />;
	}

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
		font-size: 2rem;
	`;

	const button = css`
		margin: 20px 0;
		width: 100%;
	`;

	const subtitle = css`
		margin-bottom: 30px;
		font-size: 0.9rem;
	`;

	return (
		<React.Fragment>
			<div css={base}>
				<div css={formContainer}>
					<h1 css={title}>Log in</h1>
					<form onSubmit={handleLogin}>
						<p css={subtitle}>Please enter your email and password</p>
						<div className="form-group">
							<input name="email" type="email" placeholder="Email" className="form-control" />
						</div>
						<div className="form-group m-0">
							<input name="password" type="password" placeholder="Password" className="form-control" />
						</div>
						<div>
							<small>
								<Link to="/forgot">Forgot password</Link>
							</small>
						</div>
						<button className="btn btn-success" type="submit" css={button}>
							Log in
						</button>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withRouter(Login);
