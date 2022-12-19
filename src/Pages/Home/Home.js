import React from "react";
import { Link } from "react-router-dom";

import BanarCarousel from "./BanarCarousel/BanarCarousel";

const Home = () => {
  return (
    <div>
      <BanarCarousel></BanarCarousel>
      <div className="mt-3 mb-3">
        <Link to="/services">
          <button className="btn btn-outline btn-primary">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
