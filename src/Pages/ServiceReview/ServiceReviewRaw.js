import React from "react";

const ServiceReviewRaw = ({ review }) => {
  const { name, PhotoURL, ReviewRating, message } = review;
  return (
    <div>
      <tr>
        {/* <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th> */}
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
          {/* <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span> */}
        </td>
        <td>{ReviewRating}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default ServiceReviewRaw;
