import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("./Home"));

const Settings = lazy(() => import("./Account/Settings"));
const MyAdverts = lazy(() => import("./Account/MyAdverts"));

const Login = lazy(() => import("./Auth/Login"));
const Signup = lazy(() => import("./Auth/Signup"));

const Listing = lazy(() => import("./Ad/Listing"));
const Ad = lazy(() => import("./Ad/Ad"));

const Post = lazy(() => import("./Post"));
const Success = lazy(() => import("./Success"));

const CookiePolicy = lazy(() => import("./Footer/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./Footer/PrivacyPolicy"));

function App() {
	return (
		<AuthProvider>
			<Suspense fallback={<div>Loading... </div>}>
				<BrowserRouter>
					<Switch>
						<PrivateRoute exact path="/adverts" component={Listing} />
						<PrivateRoute exact path="/advert/:id" component={Ad} />
						<PrivateRoute exact path="/post" component={Post} />
						<PrivateRoute exact path="/edit/:id" component={Post} />
						<PrivateRoute exact path="/success/:id" component={Success} />

						<PrivateRoute exact path="/account" component={MyAdverts} />
						<PrivateRoute exact path="/account/settings" component={Settings} />

						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />

						<Route component={CookiePolicy} path="/cookies" />
						<Route component={PrivacyPolicy} path="/privacy-policy" />

						<Route component={Home} path="/" />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</AuthProvider>
	);
}

export default App;
