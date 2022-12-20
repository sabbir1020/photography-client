import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceReviewRaw from "./ServiceReviewRaw";

const ServiceReview = () => {
  const reviews = useLoaderData();

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://photography-server-jade.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          alert("Successfully deleted one document");
          const remaining = reviews.filter((review) => review._Id !== id);
        }
      });
  };

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
              handleDelete={handleDelete}
            ></ServiceReviewRaw>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceReview;
