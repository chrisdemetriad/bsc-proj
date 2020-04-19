import React from "react";
import { Link } from "react-router-dom";
import { dummyAds } from "./../Shared/Data";
import { GdprPopup } from "./../Shared/GdprPopup";
// console.log(Data);

const Listing = () => {
  return (
    <>
      <GdprPopup />
      <h1>Listing</h1>
      {dummyAds.map((ad) => (
        <div>
          <Link to={ad.id}>{ad.poster.name}</Link>
          <img
            src={"http://lorempixel.com/400/200/fashion/" + ad.poster.name}
          />
          <p> {ad.adDesc} </p>
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
