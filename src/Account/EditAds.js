import React from "react";

import { Routes, Route, Link, Outlet } from "react-router-dom";
const EditAds = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="adverts">Listing ads</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default EditAds;
