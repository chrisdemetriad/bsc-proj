import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Settings from "./Account/Settings";
import ListAds from "./Account/ListAds";
import EditAds from "./Account/EditAds";
import SignIn from "./Auth/Signin";
import SignUp from "./Auth/Signup";
import Listing from "./Ad/Listing";
import Ad from "./Ad/Ad";
import Home from "./Home";

function App() {
	let loggedIn = true;
	return (
		<Router>
			<div>
				<strong>THIS IS THE ROOT COMPONENT</strong>
				<div>
					<Link to="/">Home</Link>
					<Link to="/account">My account</Link>
					<Link to="/account/adverts">My adverts</Link>
					<Link to="/sign-in">Sign in</Link>
					<Link to="/sign-up">Sign up</Link>
					<Link to="/sign-up">{loggedIn ? "Logged in" : "Not logged in"}</Link>
				</div>

				<Switch>
					<Route component={Listing} path="/adverts" />
					<Route component={Ad} path="/adverts/:id" />
					<Route component={Settings} path="/account" />
					<Route component={ListAds} path="/account/adverts" />
					<Route component={SignIn} path="/sign-in" />
					<Route component={SignUp} path="/sign-up" />
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
