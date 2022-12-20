import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../assets/logo/logo.jpg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>

            {user?.uid ? (
              <>
                <li>
                  <Link to="/addService">Add Service</Link>
                </li>
                <li>
                  <Link to="/serviceReview">Service Reviews</Link>
                </li>
                <li>
                  <Link onClick={handleLogOut}>LogOut</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex ">
          <img className="h-11 w-11" src={logo} alt="" />
          <a className="btn btn-ghost normal-case text-xl">Gazi Photography</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          {user?.uid ? (
            <>
              <li>
                <Link to="/addService">Add Service</Link>
              </li>
              <li>
                <Link to="/serviceReview">Service Reviews</Link>
              </li>
              <li>
                <Link onClick={handleLogOut}>LogOut</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Header;
