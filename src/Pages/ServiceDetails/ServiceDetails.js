import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, servicePrice, name, PhotoURL, serviceRating, description } =
    service;
  console.log(service);
  return (
    <div className="card card-compact w-full bg-base-100 p-7 shadow-xl">
      <figure>
        <img className=" rounded w-full" src={PhotoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions  ">
          <p className="text-xl">Price: {servicePrice}</p>
          <p className="text-xl">Rating: {serviceRating}</p>
          {/* <Link to={`/serviceDetails/${_id}`}>
           
        </Link> */}
          {/* <button className="btn btn-primary">View Details</button> */}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
