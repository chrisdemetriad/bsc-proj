import React from "react";
import { Link } from "react-router-dom";
import { dummyAds } from "./../Shared/Data";
// console.log(Data);

const Listing = () => {
  return (
    <>
      <h1>Listing</h1>
      {dummyAds.map((ad) => (
        <div>
          <p> {ad.name} </p>
          <p> {ad.bodyText} </p>
          <p> {ad.prodId} </p>
          <p> {ad.email} </p>
          <p> {ad.town} </p>
          <p> {ad.adTitle} </p>
        </div>
      ))}
    </>
  );
};

export default Listing;
