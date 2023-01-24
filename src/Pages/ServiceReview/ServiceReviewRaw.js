import React from "react";

const ServiceReviewRaw = ({ review, handleDelete }) => {
  const { _id, name, PhotoURL, ReviewRating, message } = review;
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={PhotoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        <td>
          {message} <br />
        </td>
        <td>{ReviewRating}</td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </div>
  );
};

export default ServiceReviewRaw;
