import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./Auth";
import { BaseProvider } from "./Shared/BaseContext";

import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("./Home"));
const NoMatch = lazy(() => import("./NoMatch"));

const MyFavourites = lazy(() => import("./Account/MyFavourites"));
const MyAdverts = lazy(() => import("./Account/MyAdverts"));

const Login = lazy(() => import("./Auth/Login"));
const Signup = lazy(() => import("./Auth/Signup"));

const Listing = lazy(() => import("./Advert/Listing"));
const Advert = lazy(() => import("./Advert/Advert"));

const Post = lazy(() => import("./Post"));
const Success = lazy(() => import("./Success"));

const SearchListing = lazy(() => import("./SearchListings"));

const CookiePolicy = lazy(() => import("./Shared/Footer/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./Shared/Footer/PrivacyPolicy"));

function App() {
	return (
		<AuthProvider>
			<BaseProvider>
				<Suspense fallback={<div>Loading... </div>}>
					<BrowserRouter basename="bsc-proj">
						<Switch>
							<Route exact component={Listing} path="/adverts/clothes" />
							<Route exact component={Listing} path="/adverts/electronics" />
							<Route exact component={Listing} path="/adverts/vehicles" />
							<Route exact component={Listing} path="/adverts/toys" />
							<Route exact component={Listing} path="/adverts/books" />

							<Route exact path="/adverts" component={Listing} />
							<Route exact path="/advert/:id" component={Advert} />
							<PrivateRoute exact path="/post" component={Post} />
							<PrivateRoute exact path="/edit/:id" component={Post} />
							<PrivateRoute exact path="/success/:id/:status" component={Success} />
							<PrivateRoute exact path="/account/myadverts" component={MyAdverts} />
							<PrivateRoute exact path="/account/favourites" component={MyFavourites} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/search/:data" component={SearchListing} />
							<Route component={CookiePolicy} path="/cookies" />
							<Route component={PrivacyPolicy} path="/privacy-policy" />

							<Route component={Home} exact path="/" />

							<Route>
								<NoMatch />
							</Route>
						</Switch>
					</BrowserRouter>
				</Suspense>
			</BaseProvider>
		</AuthProvider>
	);
}

export default App;
