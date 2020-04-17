import React from "react";

import { Routes, Route, Link, Outlet } from "react-router-dom";
const ListAds = () => {
  return (
    <div>
      <h1>My account</h1>
      <nav>
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default ListAds;
