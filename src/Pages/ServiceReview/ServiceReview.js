import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ServiceReviewRaw from "./ServiceReviewRaw";

const ServiceReview = () => {
  const reviews = useLoaderData();
  // const { loading } = useContext(AuthContext);

  const { isLoading, refetch } = useQuery({});
  const handleDelete = (id) => {
    fetch(`https://photography-server-jade.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          toast.error("Successfully deleted one document");
          refetch();
          // const remaining = reviews.filter((review) => review._Id !== id);
        }
      });
  };

  // console.log(reviews);

  if (isLoading) {
    return <div> loading ....</div>;
  }
  return (
    <div className="overflow-x-auto ">
      <table className="table ">
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
