import React, { useState } from "react";

const AddService = () => {
  const [user, setUser] = useState({});
  const handleAddService = (event) => {
    const form = event.target;
    event.preventDefault();
    console.log(user);

    fetch("https://photography-server-jade.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("service placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    // newUser.reset();
  };
  return (
    <div>
      <form onSubmit={handleAddService} className="form-control w-96 m-auto ">
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
            <span className="label-text">Description </span>
          </label>
          <input
            onBlur={handleInputBlur}
            type="text"
            name="description"
            placeholder="Description "
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Rating</span>
          </label>
          <input
            onBlur={handleInputBlur}
            type="value"
            name="serviceRating"
            placeholder="Service Rating "
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"> Add Service</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
