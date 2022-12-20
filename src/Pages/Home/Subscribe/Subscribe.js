import React, { useState } from "react";

const Subscribe = () => {
  const [subscribe, setSubscribe] = useState(null);
  const handleSubscribe = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);
    fetch("https://photography-server-jade.vercel.app/subscribe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subscribe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setSubscribe(data);
        form.reset();
      });
  };
  return (
    <div className="mt-4 p-10">
      <h1 className="text-4xl text-center">
        Please subscribe to receive our services <br />
        <span className="text-2xl">Please Subscribe</span>
        <form onSubmit={handleSubscribe} className="mt-4">
          <input
            type="email "
            name="email"
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
