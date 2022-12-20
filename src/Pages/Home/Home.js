import React from "react";
import { Link } from "react-router-dom";

import BanarCarousel from "./BanarCarousel/BanarCarousel";
import Photography from "./Photography/Photography";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <BanarCarousel></BanarCarousel>
      <div className="mt-3 mb-3 text-center">
        <Link to="/services">
          <button className="btn btn-outline btn-primary">See More</button>
        </Link>
      </div>
      <Photography></Photography>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
