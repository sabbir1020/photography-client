import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  const { _id, servicePrice, name, PhotoURL, rating, description } = service;
  // console.log(service);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={PhotoURL}>
          <img className="h-96 rounded	" src={PhotoURL} alt="Shoes" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.length > 200 ? (
            <p>{description.slice(0, 200) + "...."}</p>
          ) : (
            <p>{description}</p>
          )}
        </p>
        <p>
          Rating <strong> {rating}</strong>
        </p>
        <div className="card-actions justify-around ">
          <p className="text-xl">Price: {servicePrice}</p>
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
