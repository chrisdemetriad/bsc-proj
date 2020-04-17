import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Settings from "./Account/Settings";
import ListAds from "./Account/ListAds";
import EditAds from "./Account/EditAds";

import Listing from "./Ad/Listing";
import Ad from "./Ad/Ad";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adverts" element={<Listing />} />

        <Route path="account" element={<ListAds />}>
          <Route path="settings" element={<Settings />} />
          <Route path="edit-ads" element={<EditAds />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
