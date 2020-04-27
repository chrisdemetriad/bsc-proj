import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";

const Settings = lazy(() => import("./Account/Settings"));
const ListAds = lazy(() => import("./Account/ListAds"));
const EditAds = lazy(() => import("./Account/EditAds"));
const SignIn = lazy(() => import("./Auth/Signin"));
const SignUp = lazy(() => import("./Auth/Signup"));
const Listing = lazy(() => import("./Ad/Listing"));
const Ad = lazy(() => import("./Ad/Ad"));
const Home = lazy(() => import("./Home"));
const CookiePolicy = lazy(() => import("./Footer/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./Footer/PrivacyPolicy"));
const Nav = lazy(() => import("./Shared/Nav"));

function App() {
	let loggedIn = true;
	return (
		<Suspense fallback={<div>Loading... </div>}>
			<Router>
				<Nav />

				<Switch>
					<Route component={Ad} path="/adverts/:id" />
					<Route component={Listing} path="/adverts" />

					<Route component={Settings} path="/account" />
					<Route component={ListAds} path="/account/adverts" />
					<Route component={SignIn} path="/sign-in" />
					<Route component={SignUp} path="/sign-up" />

					<Route component={CookiePolicy} path="/cookies" />
					<Route component={PrivacyPolicy} path="/privacy-policy" />

					<Route component={Home} path="/">
						{loggedIn ? <Redirect to="/adverts" /> : <Home />}
					</Route>
				</Switch>
			</Router>
		</Suspense>
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
