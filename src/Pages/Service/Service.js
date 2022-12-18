import React from "react";

const Service = ({ service }) => {
  const { _id, price, pictureName, picture, rating, description } = service;
  console.log(service);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{pictureName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
