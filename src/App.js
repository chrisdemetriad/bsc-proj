import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const Settings = lazy(() => import("./Account/Settings"));
const ListAds = lazy(() => import("./Account/ListAds"));
// const EditAds = lazy(() => import("./Account/EditAds"));
const Login = lazy(() => import("./Auth/Login"));
const Signup = lazy(() => import("./Auth/Signup"));
const Listing = lazy(() => import("./Ad/Listing"));
const Ad = lazy(() => import("./Ad/Ad"));
const Home = lazy(() => import("./Home"));
const CookiePolicy = lazy(() => import("./Footer/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./Footer/PrivacyPolicy"));
const Nav = lazy(() => import("./Shared/Nav"));

function App() {
	// let loggedIn = true;
	return (
		<AuthProvider>
			<Suspense fallback={<div>Loading... </div>}>
				<BrowserRouter>
					<Nav />

					<Switch>
						{/* <PrivateRoute exact path="/" component={Home} /> */}

						<PrivateRoute exact path="/adverts/:id" component={Ad} />
						<PrivateRoute exact path="/adverts" component={Listing} />
						<PrivateRoute exact path="/account" component={Settings} />
						<PrivateRoute exact path="/account/adverts" component={ListAds} />

						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />

						{/* <Route component={Ad} path="/adverts/:id" />
						<Route component={Listing} path="/adverts" /> */}

						<Route component={Settings} path="/account" />
						<Route component={ListAds} path="/account/adverts" />
						{/* <Route exact component={Login} path="/login" />
						<Route exact component={Signup} path="/signup" /> */}

						<Route component={CookiePolicy} path="/cookies" />
						<Route component={PrivacyPolicy} path="/privacy-policy" />

						<Route component={Home} path="/" />
						{/* {loggedIn ? <Redirect to="/adverts" /> : <Home />}
						</Route> */}
					</Switch>
				</BrowserRouter>
			</Suspense>
		</AuthProvider>
	);

	//     <Router>
	//       <Routes>
	//         <Route path="/" element={<Home />} />
	//         <Route path="/adverts" element={<Listing />} />
	// <Router></Router>
	//         <Route path="account" element={<ListAds />}>
	//           <Route path="settings" element={<Settings />} />
	//           <Route path="edit-ads" element={<E />} />
	//         </Route>
	//       </Routes>
	//     </Router>
}

export default App;
