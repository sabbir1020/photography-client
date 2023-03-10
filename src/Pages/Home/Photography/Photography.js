import React from "react";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import photo from "../../../assets/img/photography.jpg";
const Photography = () => {
  return (
    <div className="flex md:flex-2">
      <img className=" w-1/2 rounded" src={photo} alt="" />

      <div className=" mx-auto my-auto">
        <FaCamera className="h-10 w-10 mb-4 ml-2"></FaCamera>
        <h1 className="text-2xl mt-1">Modern Photography</h1>
        <p className="mt-2 mb-2">
          This is my photography website. You can hire me.
        </p>
        <Link to="/services">
          <button className="btn btn-primary">Get Stated </button>
        </Link>
      </div>
    </div>
  );
};

export default Photography;
