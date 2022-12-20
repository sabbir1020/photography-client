import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-4 p-10">
      <h1 className="text-4xl text-center">
        You will be get Our service <br />
        <span className="text-2xl">Please Subscribe</span>
        <form className="mt-4">
          <input
            type="email "
            placeholder="Your Email"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <button className="btn btn-outline ml-3">
            <input className="ml-3" type="submit" value="Subscribe" />
          </button>
        </form>
      </h1>
    </div>
  );
};

export default Subscribe;
