import React, { useContext, useState } from "react";
import { FaAngleRight, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { loading, createUser, googleSignIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        const errorMessage = err.message;
      });
    // console.log(name, email, password);
  };
  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center lg:text-center font-bold">
            Register now!
          </h1>
          <p className="py-6">
            <img src={img} alt="" />
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <p className="">
                Already have an account?
                <button>
                  <Link className="link link-hover text-blue-800" to="/login">
                    SIGN IN
                  </Link>
                </button>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center">
            <button onClick={handleGoogleSign} className="btn btn-primary mb-5">
              <FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
