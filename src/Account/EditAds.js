import React from 'react';

import {Routes, Route, Link} from 'react-router-dom';
const EditAds = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="adverts">Listing ads</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
    </div>
  );
};

export default EditAds;
