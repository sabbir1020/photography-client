import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const [users, setUsers] = useState({});

  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, servicePrice, name, PhotoURL, serviceRating, description } =
    service;
  console.log(service);
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(users);
    fetch("https://photography-server-jade.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added Successfully");
          form.reset();
        }
      });
  };
  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...users };
    newUser[field] = value;
    setUsers(newUser);
  };

  return (
    <div>
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
      <div className="mt-10 mb-5">
        <h1 className="text-3xl text-center mb-3"> Review Section </h1>
        {user?.uid ? (
          <div>
            <form
              onSubmit={handleAddService}
              className="form-control w-96 m-auto "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onBlur={handleInputBlur}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL </span>
                </label>
                <input
                  onBlur={handleInputBlur}
                  type="photo"
                  name="PhotoURL"
                  placeholder="Photo URL "
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  onBlur={handleInputBlur}
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Review Rating</span>
                </label>
                <input
                  onBlur={handleInputBlur}
                  type="value"
                  name="ReviewRating"
                  placeholder="Review Rating "
                  className="input input-bordered"
                />
              </div>
              {/* <div className="form-control">
               <label className="label">
                 <span className="label-text">Service Price</span>
               </label>
               <input
                 onBlur={handleInputBlur}
                 type="value"
                 name="servicePrice"
                 placeholder="Service Price "
                 className="input input-bordered"
               />
             </div> */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Service Review</button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <h1 className="text-3xl text-center">
              Please Login to add a review{" "}
              <Link className="text-blue-800" to="/login">
                <button>login</button>
              </Link>
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
