import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceReviewRaw from "./ServiceReviewRaw";

const ServiceReview = () => {
  const reviews = useLoaderData();

  console.log(reviews);
  return (
    <div className="overflow-x-auto ">
      <table className="table ">
        {/* <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Message</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead> */}
        <tbody>
          {reviews.map((review) => (
            <ServiceReviewRaw
              key={review._id}
              review={review}
            ></ServiceReviewRaw>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceReview;
