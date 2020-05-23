/** @jsx jsx */
import { jsx, css, Global, ClassNames } from "@emotion/core";
import "./custom.scss";
// import "bootstrap/dist/css/bootstrap.css";
import "./fonts/geomanist-regular-webfont.ttf";
import "./fonts/geomanist-regular-italic-webfont.ttf";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const base = css`
	display: flex;
	flex-direction: column;
`;

ReactDOM.render(
	<React.StrictMode>
		<main css={base}>
			<App />
		</main>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
