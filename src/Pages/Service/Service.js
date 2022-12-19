import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, servicePrice, name, PhotoURL, rating, description } = service;
  console.log(service);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-96 rounded	" src={PhotoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.length > 200 ? (
            <p> {description.slice(0, 200) + "...."}</p>
          ) : (
            { description }
          )}
        </p>
        <div className="card-actions justify-around ">
          <p className="text-xl">Price: {servicePrice}</p>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
