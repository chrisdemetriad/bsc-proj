import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import Settings from "./Account/Settings";
import ListAds from "./Account/ListAds";
import EditAds from "./Account/EditAds";
import SignIn from "./Auth/Signin";
import SignUp from "./Auth/Signup";
import Listing from "./Ad/Listing";
import Ad from "./Ad/Ad";
import Home from "./Home";
import CookiePolicy from "./Footer/CookiePolicy";
import PrivacyPolicy from "./Footer/PrivacyPolicy";

function App() {
	let loggedIn = true;
	return (
		<Router>
			<div>
				<strong>THIS IS THE ROOT COMPONENT</strong>
				<div>
					<NavLink activeClassName="active" to="/">
						Home
					</NavLink>
					<NavLink activeClassName="active" to="/account">
						My account
					</NavLink>
					<NavLink activeClassName="active" to="/account/adverts">
						My adverts
					</NavLink>
					<NavLink activeClassName="active" to="/sign-in">
						Sign in
					</NavLink>
					<NavLink activeClassName="active" to="/sign-up">
						Sign up
					</NavLink>
					<NavLink activeClassName="active" to="/sign-up">
						{loggedIn ? "Logged in" : "Not logged in"}
					</NavLink>
				</div>

				<Switch>
					<Route component={Listing} path="/adverts" />
					<Route component={Ad} path="/adverts/:id" />
					<Route component={Settings} path="/account" />
					<Route component={ListAds} path="/account/adverts" />
					<Route component={SignIn} path="/sign-in" />
					<Route component={SignUp} path="/sign-up" />

					<Route component={CookiePolicy} path="/cookies" />
					<Route component={PrivacyPolicy} path="/privacy-policy" />

					<Route component={Home} path="/">
						{loggedIn ? <Redirect to="/adverts" /> : <Home />}
						<Redirect to="/adverts" />
					</Route>
				</Switch>
			</div>
		</Router>
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
